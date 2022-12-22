const { Sequelize } = require('sequelize')
const config = require('../../config')

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,
    username: config.db.user,
    password: config.db.pass,
    database: config.db.name,
    port: config.db.port,
    //! Esto se utiliza para produccion, Dara error si no pones esta configuracion.
    //! Todas las plataformas como servicio tiene esa variable de entorno configurada.
    dialectOptions: process.env.NODE_ENV === 'production' 
    ? {
    
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
    
    } : {}
})

module.exports = db
