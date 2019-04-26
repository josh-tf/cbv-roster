# CBV Rosters

**cbv-roster** is a web application for managing volunteer rosters at [Computerbank Victoria Inc.](http://computerbank.org.au).

The goal of the project is to create an easy to use/manage roster system with possible future expansion with other volunteer related features (chat, file sharing etc).

## Stack

Details of the current full-stack can be found below, components may change or be added in the future as additional requirements are included in the project pipeline.

**Front end -** [React](https://reactjs.org/) <br>
**Back end -** [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/) <br>
**Database -** [MongoDB](https://www.mongodb.com/) <br>

![](https://i.imgur.com/CylWiH5.jpg) ![](https://i.imgur.com/EGWlnxq.jpg) <br>
![](https://i.imgur.com/QWG5K3P.jpg) ![](https://i.imgur.com/8k0NJQN.jpg)


## Installation / Running

Clone this repository and `cd` in to it and then run the following commands:
```bash
yarn start
nodemon server/server
```
`yarn start` will run the app server and display the front end<br>
`nodemon server/server` will run `server.js` which handles the endpoint for database actions (insert, update, etc) via its own router.

## Database Configuration
The MongoDB server is not provided as part of this package, you will need to run a server instance and create the `cbv-roster` database.

If you are running on a non standard port you can edit this in `database\db.js`. At some point this will be handled as part of the build.
```javascript
module.exports  = {
db: 'mongodb://localhost:27017/cbv-roster'
}
```

## To-do / Project Pipeline

This will be an on-going project and will also function as a tool to learn the various components of the stack, some of the required functionality for the application will include:

 - Generating rosters (weekly on schedule + adhoc)
 - User management system with login
 - Ability to 'sign up' to a roster
 - Email notifications (possible SMS notifications?)
 - Various admin tasks (edit rosters, users etc)

Suggestions are welcome, please open an issue to discuss or contact me via the email under my user page.

## Authors & Licence

- Currently developed with ❤️ by [josh-tf](https://github.com/josh-tf) 
- This project is created under the [MIT](https://choosealicense.com/licenses/mit/) licence
