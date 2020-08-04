const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb')
// .env variables
const url = process.env.DB_URL
const db_name = process.env.DB_NAME
const col_name = process.env.COL_NAME
const options = {
    useUnifiedTopology: true
}
//DB CRUD functions


