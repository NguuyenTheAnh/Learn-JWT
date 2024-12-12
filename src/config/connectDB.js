const { Sequelize, fn } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('db-backend-jwt', 'TheAnh', '100804', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres'
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default testConnection;