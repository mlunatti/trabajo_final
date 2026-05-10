require('dotenv').config()

module.exports = {
    
    PORT : process.env.PORT || 7000,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME : process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    MAX_FILE_SIZE:20,
    JWT_SECRET :"PEPE"

}
