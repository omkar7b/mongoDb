const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User {
  constructor(username, email){
    this.username=username,
    this.email=email;
  }

  save() {
    const db = getDb();
    return db.collection('users').insertOne(this);
    
  }
  static findById(userID) {
    const db = getDb()
    return db
    .collection('users')
    .findOne({_id: new ObjectId(userID)})
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = User;
