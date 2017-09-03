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

function storeSearchDetail(searchTerm, page) {
  state.record = {
        "searchTerm": searchTerm,
        "page": page,
        "date": new Date()
    }

    getDb().collection(collection)
        .insert(state.record, function(err, data) {
            if (err) throw err
        });
}

function getRecentSearches() {
  var returnObjMap = {};
    return new Promise(function(resolve, reject) {
      
      
      
        getDb().collection(collection)
            .find()
            .sort({date: -1})
            .limit(100)
            .toArray(function(err, doc) {
                if (err) {
                    reject(err);
                }
                if (doc.length > 0) {
                    state.record = doc;
                    resolve(state.record);
                } else {
                    state.record = null;
                    resolve({"Warning": "No Search Results Returned"});
                }
            });

    });
}

var mongodbSeachDatastore = {
    connect: connect,
    storeSearchDetail: storeSearchDetail,
    getRecentSearches: getRecentSearches
};

module.exports = {
    mongodbSeachDatastore: mongodbSeachDatastore
};