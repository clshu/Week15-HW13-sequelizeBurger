# Week15-HW13-sequelizeBurger

This homework works the same as homework 14. But it requires the use of Sequelize as ORM. So following steps are taken to make it work.

- Reomved code having references to mysql.js. Reomoved customized orm.js.

- sequelize init --force to create directories.

- sequelize model:create to create model Burger and its attributes. Added defaultValue and no null to attributes. Tweaked TIMESTAMP type.

- Modified route handlers by calling sequelize.findAll()/create()/update().

- Added sequelize.sync() to server.js.

- Created jawsdb on Heroku. Added JAWSDB_URL info to production/test section of config/config.json.

- Updated package.json, README.md
