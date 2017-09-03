var mongodb = require('mongodb');
var MONGODB_URI = 'mongodb://' + process.env.USER + ':' + process.env.PASS + '@' + process.env.HOST + ':' + process.env.DB_PORT + '/' + process.env.DB;
var collection = process.env.COLLECTION;

var state = {
    db: null,
    record: null
}

function connect() {
    if (state.db)
        return;

    mongodb.MongoClient.connect(MONGODB_URI)
        .then(function(db) {
            state.db = db;
            console.log('Connection established to', MONGODB_URI);
            return;
        })
        .catch(function(err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
            throw err;
        });
}

function close() {
    if (state.db) {
        state.db.close(function(err, result) {
            state.db = null
            state.mode = null
        });
    }
}

function getDb() {
    if (!state.db) {
        connect();
    }
    return state.db;
}

function get() {
    return state.record;
}

function storeSearchDetail(searchTerm) {
  console.log("add");

}

function getRecentSearches() {
  console.log("history");
   return new Promise(function(resolve, reject) {
     //get from database
    resolve( {
        "search": "test",
        "date": "1/1/17"
    });

    });
  
}

var mongodbSeachDatastore = {
    storeSearchDetail: storeSearchDetail,
    getRecentSearches: getRecentSearches
};

module.exports = {
    mongodbSeachDatastore: mongodbSeachDatastore
};