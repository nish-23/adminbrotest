const express = require('express');
const AdminBro = require('admin-bro');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');
const { Sequelize } = require('sequelize');

const app = express();
const port = 3000;

const run = async() =>{
  //const sequelize = new Sequelize('postgres://postgres:Nishanth:5432/Testdb')
    const admin = new AdminBro(options);
    const router = buildAdminRouter(admin);

    //console.log(admin.options);
    app.use(admin.options.rootPath,router);
    app.listen(port, () => {
        console.log(`Example app listening at✊ http://localhost:${port}`)
      })
};

module.exports = run;
