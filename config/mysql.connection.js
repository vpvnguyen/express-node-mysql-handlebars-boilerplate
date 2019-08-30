const mysql = require('mysql');

// connect to heroku JAWS_DB || connect to localhost mysql
if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // mysql localhost config
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: 'root',
        database: 'db_name'
    });
}
// connect to mysql
connection.connect((err) => {
    if (err) {
        console.error(`MYSQL | error connecting: ${err.stack}`);
        return;
    }
    console.log(`MYSQL | connected as id: ${connection.threadId}`);
});

// export connection for ../models/mysql.model.js
module.exports = connection;