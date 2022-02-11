const rmq = require('rmq-connect');
const config = require('./config/config');
const cluster = require('cluster');
const os = require('os');
const express = require('express');
const version = require('./package.json').version;
const app = express();
const port = config.apiPort;
const messageLimit = 1;
const db = require("./utils/database");
let client = null;



let rmqServer = `${config.rmqUser}:${config.rmqPassword}@${config.rmqHost}`;

let queue = `${config.apiReleaseStage}_user_datafeeder`;
db.init('local')
    app.listen(port, () => {
        console.log("Analytics data feeder consumer initializing completed and running on port: ", port);
    });
    rmq.consumeMessages(rmqServer, queue, consumeMessagesCallback, messageLimit);

function consumeMessagesCallback(err, msg, done) {
    if (err) {
        console.error('Error1: ', err);
        console.info('Retrying in 1000ms');
        setTimeout(() => {
            rmq.consumeMessages(rmqServer, queue, consumeMessagesCallback, messageLimit);
        }, 1000);
    }
    if (typeof msg == 'string') {
        msg = JSON.parse(msg);
    }
    if (!msg) {
        msg = {};
    }

    if (!msg) {
        rmq.connect(`${config.rmqUser}:${config.rmqPassword}@${config.rmqHost}`, `esoko_exchange_${config.apiReleaseStage}`)
            .then(cnx => {
                rmq.publishJSON(cnx, `real_time_${config.apiReleaseStage}`, config.rmqErrorsBindKey, {
                    consumer: queue,
                    payload: msg,
                    reason: `some data needed to send slack notification not provided`,
                    severity: `critical`
                });

                rmq.closeConnection(cnx);
                done();
            }).catch(err => {
                console.log("Error1: ", err);
            });
        return
    }
    

    db.connect().then(connection => {
        return connection;
    }).then(connection => {
        client = connection
        return fetchUser(db, client, msg)
    }).then(response => {
        if (response.length) {
            console.log(`already a user`);
            return
        }
        return creatUser(db, client, msg);
    }).then(inserted => {
        inserted = inserted ? `inserted succesfully ${JSON.stringify(...inserted)}` : "already a user"
        console.log(inserted)
    }).then(() => {
        done()
        db.commitAndRelease(client)
    }).catch(err => {
        console.log(err);
        done()
    })

}







function creatUser(db, connection, msg) {
    return new Promise((resolve, reject) => {
        let sql = "insert into users(email) values ($1) returning id";
        let { email } = msg;
        db.query(connection, sql, [email], (err, response) => {
            if (err) {
                return reject(err);
            }
            return resolve(response.rows)
        })
    })
}


function fetchUser(db, connection, msg) {
    return new Promise((resolve, reject) => {
        let sql = "select * from users where email=$1";
        let { email } = msg
        db.query(connection, sql, [email], (err, response) => {
            if (err) {
                return reject(err);
            }

            return resolve(response.rows);
        })
    })

}










