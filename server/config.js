const dotenv = require('dotenv').config();


module.exports = {
    appConfig: {
        host: process.env.APP_HOST || 'http://localhost',
        port: process.env.APP_PORT || 8081
    }
}