const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT : process.env.PORT || 8080,
    DATABASE_HOST : process.env.DATABASE_URI,
}

module.exports = config;