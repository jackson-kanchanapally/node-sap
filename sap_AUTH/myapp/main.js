const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const xsenv = require('@sap/xsenv');
const JWTStrategy = require('@sap/xssec').JWTStrategy;

const users = require('./users.json');
const app = express();

const services = xsenv.getServices({ uaa: 'nodeuaa' });

passport.use(new JWTStrategy(services.uaa));

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

app.get('/users', function (req, res) {
  var isAuthorized = req.authInfo.checkScope('$XSAPPNAME.Display');
  if (isAuthorized) {
    res.status(200).json(users);
  } else {
    res.status(403).send('Forbidden');
  }
});

app.post('/users', function (req, res) {
  const isAuthorized = req.authInfo.checkScope('$XSAPPNAME.Update');
  if (!isAuthorized) {
    res.status(403).json('Forbidden');
    return;
  }

  var newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  res.status(201).json(newUser);
});
// app.use(express.json())
// app.get('/users',(req,res)=>{
//   res.status(200).json(users);
// })
// app.post("/users",(req,res)=>{
//   const name=req.body
//   name.id=users.length
//   users.push(name)
//   res.status(200).json(users)

// })
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});
