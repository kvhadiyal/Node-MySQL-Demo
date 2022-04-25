module.exports = {
  "local": {
    "username": "root",
    "password": "Nidhix@1994",
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306,
    "logging": false,
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeSeederMeta"
  },
  "development": {
    "username": "root",
    "password": "Nidhix@1994",
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 33060,
    "logging": true,
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeSeederMeta"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeSeederMeta"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "seederStorage": "sequelize",
    "seederStorageTableName": "SequelizeSeederMeta"
  }
};