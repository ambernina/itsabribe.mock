require('dotenv').config();
const mongoist = require('mongoist');

class MongoDBService {
  constructor() {
    this.connectionString =
      process.env.ENVIRONMENT == 'production'
        ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`
        : process.env.ATLAS_URI;
        // console.log(this.connectionString);
  }

  connect(callback) {
    this.db = mongoist(this.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // callback('Database connection established');
  }

  async save(coll, doc, options) {
    console.log(`Saving to ${coll.toUpperCase()} collection...`);
    await this.removeAll(coll.toLowerCase(), {})
    return this.db[coll.toLowerCase()].save(doc, options)
  }
  
  async find(coll, query) {
    const documents = await this.db[coll.toLowerCase()].find(query);
    return documents;
  }

  async findOne(coll, query) {
    const documents = await this.db[coll.toLowerCase()].findOne(query);
    return documents;
  }

  async removeAll(coll, query) {
    await this.db[coll.toLowerCase()].remove(query);
  }

  async aggregate(coll, query) {
    return this.db[coll.toLowerCase()].aggregate(query);
  }
}

module.exports = (function() {
  this.mongoDBService = null;

  function createNewServiceInstance() {
    this.mongoDBService = new MongoDBService();
    this.mongoDBService.connect(msg => {
      console.log(msg);
    });
    return this.mongoDBService;
  }

  return function() {
      if (!this.mongoDBService) this.mongoDBService = createNewServiceInstance();
      return this.mongoDBService;
    }
})();
