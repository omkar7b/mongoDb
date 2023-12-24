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


// app.use((req, res, next) => {
//   User.findById('6584a664f27e41775028b486')
//     .then(user => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://omkarbende777:rb76LP6NVF1In3oX@cluster1.bi7gilh.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  console.log('connected')
  app.listen(3000);
})
.catch(err => {
  console.log(err);
})




