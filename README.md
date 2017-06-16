*PostIt* 
This is a simple application that allows friends and colleagues create groups for notifications. 

*Getting Started*
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

*Softwares I needed to build the app*
You need to install node.js, git bash, sublime text editor 

To install the app in your system, just download and start using

*Also installed frameworks like*
express
babel for converting es6 to es5, 
eslint for linting, 
sequelise to help migeration to the database, 
postgresql for database, 
postman for testing the routes, 
TravisCI for continous uploading of your files even when you've deployed.

*Steps on how the work got done*
- Create a github repository
- Create three directories:
        template -  for the front-end in HTML/CSS
        client - for your front-end implementation in ReactJS (Redux)
        server -for your back-end implementation in NodeJS-Express-Postgres
- The template should have the following
	User registration/login to the application.
	A page that allows registered users to create broadcast groups and add other registered users to created groups.
	A page that allows registered users post messages to all users in a particular group
	A “Message Board” page that allows registered users see messages that have been posted to groups they belong to.
	The display of messages should be categorised by the groups the user belongs to.
- Setup the back-end (server side) of the application with NodeJS - Express
- Setup eslint for linting and ensure you have the style guide rules configured properly- Write the server-side code to power the front-end built in challenge 0.
- Use Postgresql for relational data persistence and Sequelize as your ORM.
  At minimum, you should have the following API routes working:
- API routes for users to create accounts and login to the application
           POST: /api/user/signup
           Username, Password & Email Address
           POST: /api/user/signin
           Username & Password
           An API route that allow users create broadcast groups:
           POST: /api/group
- An API route that allow users add other users to groups:
             POST: /api/group/<group id>/user
- An API route that allows a logged in user post messages to created groups:
            POST: /api/group/<group id>/message
- An API route that allows a logged in user retrieve messages that have been posted to groups he/she belongs to:
            GET: /api/group/<group id>/messages
- Ensure to test all routes and see that they work using Postman.
- Write tests for all functions, models, middleware and API routes using Mocha or Jasmine.
- Integrate TravisCI for Continuous Integration in your repository (with ReadMe badge).
- Integrate test coverage reporting (e.g. Coveralls) with badge in the ReadMe.
- Obtain CI badges from Code Climate and Coveralls. These should be in the ReadMe.
- Deploy your server-side application on Heroku.


*Acknowledgments*

Hat tip to anyone who's code was used
Inspiration
Andela for the opportunity
And you studying it
