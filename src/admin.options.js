const AdminBro = require('admin-bro');
const { Company } = require('./Company/company.entity');
const AdminBroSequelize = require('@admin-bro/sequelize');

AdminBro.registerAdapter(AdminBroSequelize);
const options = {
resources:[Company],
};
module.exports = options;
