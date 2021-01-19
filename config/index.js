const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT : process.env.PORT || 8080,
    DATABASE_HOST : process.env.DATABASE_URI,
    TABLE : {
        ESSAY : "essay",
        TECH : "tech",
        PORTFOLIO : "portfolio"
    },
};

module.exports = config;