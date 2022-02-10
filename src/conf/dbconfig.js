
module.exports = {
    postgresqldb: {
        local: {
            host: process.env.PG_HOST ||'ec2-52-44-58-234.compute-1.amazonaws.com'||'localhost', 
            //||"pg-dev.esoko.com",
            user: process.env.PG_USER ||'nkhepxunfvlrfd'||'postgres' ,
            //|| "insyt",
            password: process.env.PG_PASSWD || 'b0712888298426e786ee338f220d228ccebd7da4419530a6660e63f36be43897'||'password', 
            //|| "thisdoesnotmatter",
            database: process.env.PG_DBNAME ||'d43l6hb9q4sc1l' ||'postgres' ,
            //|| "insyt_dev" || "insyt_dev" || "insyt",
            port: process.env.PG_PORT || 5432,
            ssl=true,
            //|| 5432,
            connectionTimeoutMillis: process.env.PG_CONNECT_TIMEOUT || 25000,
            idleTimeoutMillis: process.env.PG_IDLE_TIMEOUT || 10000,
            max: process.env.PG_MAX_POOL || 400
        },
        db: {

        }
    }
}

