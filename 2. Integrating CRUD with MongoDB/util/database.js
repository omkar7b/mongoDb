const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
//'mongodb+srv://omkar:jXvkxlSd2KGey5Gt@cluster0.txlcigh.mongodb.net/shop?retryWrites=true&w=majority'
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://omkarbende777:rb76LP6NVF1In3oX@cluster1.bi7gilh.mongodb.net/?retryWrites=true&w=majority')
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

// kUugqkPc7QfXSJ3O

