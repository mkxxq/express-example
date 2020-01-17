## Worklog Service API

This repository builds all the APIs mainly used for the worklog service. It builds on:

- nodejs
- express
- node-config
- sequelize

### How to run this repo on locally?

#### Prepare your environment

We should install the required dependencies before you run this repo.

1. install `nodejs`
2. install `yarn`
3. install `mysql`

If you done all these local dependencies installed, then we can run the code through:


1. install repo `dependencies` and repo `devDependencies`: `yarn install`
2. update your `development` database config by updating `config/development.yml`
3. generate .env file: `cp .env.iml .env` and edit your environment value in .env file
4. create the database and run the migration through: `yarn sequelize db:migrate`
5. run this repo: `yarn dev .env`

### Other

The code will be match the eslint requirement, and we will use the `prettier` and `eslint` to make sure you commit the code with the same format.
So it will automatically format your code when versionize your code through `git commit`, or if you are using the VSCode, it will automatically format
the code when you save it.


### references

1. [sequelize-v3-usage](https://sequelize.org/v3/)
2. [sequelize-api-reference](https://sequelize.org/master/index.html)
3. [express-validator](https://express-validator.github.io/docs/check-api.html)
4. [express](https://expressjs.com/)