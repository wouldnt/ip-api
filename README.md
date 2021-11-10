# Express  Template Boillerplate RestfullApi
<!--[![Node.js CI](https://github.com/firmanJS/express-template/actions/workflows/node.js.yml/badge.svg)](https://github.com/firmanJS/express-template/actions/workflows/node.js.yml)-->
[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Node.JS-1f425f.svg)](https://nodejs.org)
[![made-with-expressjs](https://img.shields.io/badge/Made%20with-Express.JS-1f425f.svg)](https://expressjs.com/)
<!--[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/firmanJS/express-template/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/firmanjs/express-template.svg)](https://github.com/firmanJS/express-template/releases)
[![Github all releases](https://img.shields.io/github/downloads/firmanjs/express-template/total.svg)](https://github.com/firmanJS/express-template/releases)
[![GitHub issues](https://img.shields.io/github/issues/firmanjs/express-template.svg)](https://github.com/firmanJS/express-template/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/firmanjs/express-template.svg)](https://github.com/firmanJS/express-template/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
-->

## Core Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Express** - [http://expressjs.com/](http://expressjs.com/)
- **nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
- **pm2** - [https://www.npmjs.com/package/pm2](https://www.npmjs.com/package/pm2)

## Feature
1. error handling
1. database structure folder
1. testing with jest
1. coverage use jest
1. validiation, use express-valdator and joi
1. pagination example
1. custom message api response
1. eslint airbnb base

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
# install package
npm install or yarn install

#  running app
npm run dev or yarn dev

# running unit tetsing
npm run test or yarn test
```

## Documentation API 
using swagger check in folder static

## Project Structure
```
.
├── .github/            * all workflows github actions
├── caprover/           * for deployment in caprover
├── coverage/           * all output coverage
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

## Code Style Guides
* Guideline:
  * Use camelCase for variable name, naming function, load module or other functions
  * Use UpperCase for Constant Variable
  * Use PascalCase for class name, models, api, route, load module model
  * Use snake_case for file name as variable
  * Function name use Verb
  * Variable name use Noun
