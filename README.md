# Lumu | IP-API
[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Node.JS-1f425f.svg)](https://nodejs.org)
[![made-with-expressjs](https://img.shields.io/badge/Made%20with-Express.JS-1f425f.svg)](https://expressjs.com/)

## Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Express** - [http://expressjs.com/](http://expressjs.com/)
- **nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
- **pm2** - [https://www.npmjs.com/package/pm2](https://www.npmjs.com/package/pm2)

## Feature
1. Error handling
1. Database structure folder
1. Coverage and Testing with Jest
1. Validation using express-validator and JOI
1. Pagination example

## Unit testing
- **Jest** - [https://jestjs.io/](https://jestjs.io/)

## How to run

### Copy environment variables

```sh
cp .env-sample .env
```

### Run manually

* via yarn or npm :

```sh
# Installing packages
npm install, or alternatively, yarn install

# Running the app
npm run dev, or alternatively, yarn dev

# Running Unit tests
npm run test, or alternatively, yarn test
```

## Documentation API 
Documented using Swagger, can be found in static folder

## Project Structure
```
.
├── .github/            * all workflows github actions
├── src/                * all source code in here
  └── api/              * all api file here
  └── config/           * all configuration file here
  |  └── db.js         * configuration database
  └── database/         * all models schema file here
  |   └── models        * all models file
  |   └── migrations    * all migrations file
  |   └── seeders       * all seeders file
  └── middleware/       * all middleware file here, for check before next to api
  └── routes/           * all file route here
  |   └── index.js      * register all route
  └── test/             * all test file here
  |   └── index.js      * test apps
  └── utils/            * all utils file here
```

## Code-styling guidelines
### These might be altered in the future.
* Guidelines:
  * Use camelCase for variable names, naming functions, module loading or other functions
  * Use UpperCase for constants
  * Use PascalCase for class names, models, apis, routes, module loading model
  * Use snake_case for file names when used as variable names
  * Function names should use Verb
  * Variable names should use Noun