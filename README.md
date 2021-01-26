It's A Bribe is a site similar to OpenSecrets where you can look up politicians and see where their funding is coming from.

To run the app follow these instructions:

# Start the server
1. Navigate to the backend directory in terminal
2. Run the command: npm i
3. Create a .env file in the backend folder
4. Copy this code into the .env file:

    ATLAS_URI=mongodb://localhost:27017/itsabribe
    PORT=5000
    ENVIRONMENT=development
    
5. Run the command: npm start

# Start Front End
1. In a new terminal window, navigate to the react-app folder
2. Run the command: npm i
3. Create a .env file in the react-app folder
4. Copy this code into the .env file:
    
    REACT_APP_API_URL=http://localhost:5000
    SERP_API_KEY=d47d2344d7fb98f3d66e68950666f13e416a68c1cca3e6782b95f2d02a37bb66
    MAILCHIMP_URL=https://arricor.us8.list-manage.com/subscribe/post?u=919a3df63a5b0cdb576e19738&amp;id=467384764a

5. Run the command: npm start
