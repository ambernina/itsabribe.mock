const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const legislatorRouter = require('./routes/legislators');
const contributorRouter = require('./routes/contributors');
const industryRouter = require('./routes/industries');
const organizationRouter = require('./routes/organizations');
const sponsorRouter = require('./routes/sponsors');
const orgImageRouter = require('./routes/orgImageRouter');
const candImageRouter = require('./routes/candImageRouter');
const orgDisRouter = require('./routes/orgDistance');
const fecRouter = require('./routes/fecRouter'); //opensecret2fec


app.use('/legislators', legislatorRouter);
app.use('/contributors', contributorRouter);
app.use('/industries', industryRouter);
app.use('/organizations', organizationRouter);
app.use('/getOrgImage', orgImageRouter);
app.use('/getCandImage', candImageRouter);
app.use('/getSponsor', sponsorRouter);
app.use('/getDis', orgDisRouter);
app.use('/fec', fecRouter);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
})
