const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  User.findById('6587ea4849c0cf964f90addd')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://omkarbende777:1n1Va4EzuzuY8pY9@cluster1.bi7gilh.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  console.log('connected')
  User.findOne().then(user => {
    if(!user){
      const user = new User({
        name: 'omkarbende777',
        email: 'omkarbende777@gmail.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
  })
  app.listen(3000);
})
.catch(err => {
  console.log(err);
})





