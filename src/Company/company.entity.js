const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');
//const sequelize = require('sequelize');
//const sequelize = new Sequelize('postgres://postgres:Nishanth:5432/Testdb')
const sequelize = new Sequelize('Testdb', 'postgres', 'Nishanth', {
    host: 'localhost',
    dialect:'postgres'
  });

const check = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
check()
const Company = sequelize.define('Company', {
  companyName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull:true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Company === sequelize.models.Company);
module.exports = {Company};
