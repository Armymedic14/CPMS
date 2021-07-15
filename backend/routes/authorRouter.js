//express to connect to MongoDB
//jwt for user authentication
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//import author schema
const Author = require('../models/authorModel');

router.route('/').post(async(req, res) => {
  const FirstName = req.body.FirstName;
  const MiddleInitial = req.body.MiddleInitial;
  const LastName = req.body.LastName;
  const Affiliation = req.body.Affiliation;
  const Department = req.body.Department;
  const Address = req.body.Address;
  const City = req.body.City;
  const State = req.body.State;
  const ZipCode = req.body.ZipCode; 
  const PhoneNumber = req.body.PhoneNumber;
  const EmailAddress = req.body.EmailAddress;
  const Password = req.body.Password;
  const cPassword = req.body.cPassword;

  //validation
  if (!EmailAddress || !Password || !cPassword)
  return res
    .status(400)
    .json({ errorMessage: 'Please enter all required fields.' });

  if (Password.length > 5)
    return res.status(400).json({
      errorMessage: 'The max password length is 5 characters.',
    });

  if (Password !== cPassword)
    return res.status(400).json({
      errorMessage: 'Passwords do not match.',
    });

  const existingAuthor = await Author.findOne({ EmailAddress });

  if (existingAuthor)
    return res.status(400).json({
      errorMessage: 'This email is already associated with an account.',
    });

  //author object
  const newAuthor = new Author({
    FirstName,
    MiddleInitial,
    LastName,
    Affiliation,
    Department,
    Address,
    City,
    State,
    ZipCode,
    PhoneNumber,
    EmailAddress,
    Password
  });

  const savedAuthor = await newAuthor.save(); 

  //sign the jwt token with secret code
  const token = jwt.sign(
    {
      author: savedAuthor._id,
    },
    process.env.jwtSecret
  );
  //display token in terminal
  console.log(token);

  //store cookie in browser
  res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();

});

router.route('/login').post(async(req, res) => {
  const EmailAddress = req.body.EmailAddress;
  const Password = req.body.Password;

  //validation
  if (!EmailAddress || !Password)
  return res
    .status(400)
    .json({ errorMessage: 'Please enter all required fields.' });

  const existingAuthor = Author.findOne({EmailAddress});
  if (!existingAuthor)
    return res.status(401).json({ errorMessage: 'Wrong email or password.' });

  if (!Password.localeCompare(existingAuthor.Password))
    return res.status(401).json({ errorMessage: 'Wrong email or password.' });

  //sign the jwt token with secret code
  const token = jwt.sign(
    {
      author: existingAuthor._id,
    },
    process.env.jwtSecret
  );

  //send the token in a HTTP-only cookie
  res
    .cookie('token', token, {
      httpOnly: true,
    })
    .send();
});

router.route('/logout').get((req, res) => {
  res
    .cookie('token', '', {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

router.route('/loggedIn').get((req, res) => {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.jwtSecret);

    res.send(true);
});

module.exports = router; 