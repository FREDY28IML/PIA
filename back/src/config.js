require('dotenv')
const fs = require('fs')

const config={
    port: process.env.PORT || 3200,
    mysql:{
        host: process.env.MYSQL_HOST || 'mysql-d791467-uninpahu-b975.f.aivencloud.com',
        port: process.env.MYSQL_PORT || '14468',
        user: process.env.MYSQL_USER || 'avnadmin',
        database: process.env.MYSQL_DB || 'CaregiversCompany',
        ssl: {
            ca: fs.readFileSync('src/certificate/ca-cert.pem')
        },
        connectTimeout: 30000,
    }
}


module.exports=config