# cbv-roster

An early-stage web app for managing volunteer rosters at a nonprofit.

> Archived. No longer maintained.

The React front end has a calendar-based roster view and pages to create, list and edit volunteers. An Express API on port 4200 stores volunteers (username and full name) in MongoDB under `/voluser`. Roster generation and sign-up were planned but not built.

## Stack

- React (Create React App), React Router, React Bootstrap, `react-calendar`, Moment
- Node.js, Express, Mongoose
- MongoDB

## Develop

```sh
# needs a MongoDB server; the connection string is in server/database/db.js
yarn install
yarn start                  # React dev server
npx nodemon server/server   # API on port 4200
```

## License

MIT
