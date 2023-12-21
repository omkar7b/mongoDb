const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://omkarB:HffErXZvYqyXPkt4@cluster0.txlcigh.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected');
    _db=client.db('test');
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  })
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw 'No database found!'
}

module.exports = {
  mongoConnect: mongoConnect,
  getDb : getDb
};



