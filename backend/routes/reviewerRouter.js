//express to connect to MongoDB
//jwt for user authentication
const router = require('express').Router();
const jwt = require('jsonwebtoken');

//import reviewer schema
const Reviewer = require('../models/reviewerModel');

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

  const Active = req.body.Active;
  const AnalysisOfAlgorithms = req.body.AnalysisOfAlgorithms;
  const Applications = req.body.Applications;
  const Architecture = req.body.Architecture;
  const ArtificialIntelligence = req.body.ArtificialIntelligence;
  const ComputerEngineering = req.body.ComputerEngineering;
  const Curriculum = req.body.Curriculum;
  const DataStructures = req.body.DataStructures;
  const Databases = req.body.Databases;
  const DistanceLearning = req.body.DistanceLearning;
  const DistributedSystems = req.body.DistributedSystems;
  const EthicalSocietalIssues = req.body.EthicalSocietalIssues;
  const FirstYearComputing = req.body.FirstYearComputing;
  const GenderIssues = req.body.GenderIssues;
  const GrantWriting = req.body.GrantWriting;
  const GraphicsImageProcessing = req.body.GraphicsImageProcessing;
  const HumanComputerInteraction = req.body.HumanComputerInteraction;
  const LaboratoryEnvironments = req.body.LaboratoryEnvironments;
  const Literacy = req.body.Literacy;
  const MathematicsInComputing = req.body.MathematicsInComputing;
  const Multimedia = req.body.Multimedia;
  const NetworkingDataCommunications = req.body.NetworkingDataCommunications;
  const NonMajorCourses = req.body.NonMajorCourses;
  const ObjectOrientedIssues = req.body.ObjectOrientedIssues;
  const OperatingSystems = req.body.OperatingSystems;
  const ParallelProcessing = req.body.ParallelProcessing;
  const Pedagogy = req.body.Pedagogy;
  const ProgrammingLanguages = req.body.ProgrammingLanguages;
  const Research = req.body.Research;
  const Security = req.body.Security;
  const SoftwareEngineering = req.body.SoftwareEngineering
  const SystemsAnalysisAndDesign = req.body.SystemsAnalysisAndDesign;
  const UsingTechnologyInTheClassroom = req.body.UsingTechnologyInTheClassroom;
  const WebAndInternetProgramming = req.body.WebAndInternetProgramming;
  const Other = req.body.Other;
  const OtherDescription = req.body.OtherDescription;
  const ReviewsAcknowledged = req.body.ReviewsAcknowledged;

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
    errorMessage: 'Please enter the same password twice.',
  });

const existingReviewer = await Reviewer.findOne({ EmailAddress });

if (existingReviewer)
  return res.status(400).json({
    errorMessage: 'An account with this email already exists.',
  });

  const newReviewer = new Reviewer({
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
    Password,

    AnalysisOfAlgorithms, Applications,Architecture, ArtificialIntelligence, ComputerEngineering,
    Curriculum, DataStructures, Databases, DistanceLearning, DistributedSystems, EthicalSocietalIssues,
    FirstYearComputing, GenderIssues, GrantWriting, GraphicsImageProcessing, HumanComputerInteraction,
    LaboratoryEnvironments, Literacy, MathematicsInComputing, Multimedia, NetworkingDataCommunications, 
    NonMajorCourses, ObjectOrientedIssues, OperatingSystems, ParallelProcessing, Pedagogy, 
    ProgrammingLanguages,Research, Security, SoftwareEngineering, SystemsAnalysisAndDesign,
    UsingTechnologyInTheClassroom, WebAndInternetProgramming, Other, OtherDescription,
    
    ReviewsAcknowledged
  });

  const savedReviewer = await newReviewer.save()

  const token = jwt.sign(
    {
      author: savedReviewer._id,
    },
    process.env.jwtSecret
  );
  console.log(token);

  res
      .cookie('token', token, {
        httpOnly: true,
      })
      .send();

});

router.route('/login').post(async(req, res) => {
  const EmailAddress = req.body.EmailAddress;
  const Password = req.body.Password;

    if (!EmailAddress || !Password)
    return res
      .status(400)
      .json({ errorMessage: 'Please enter all required fields.' });

    const existingReviewer = Reviewer.findOne({EmailAddress});
    if (!existingReviewer)
      return res.status(401).json({ errorMessage: 'Wrong email or password.' });

    if (!Password.localeCompare(existingReviewer.Password))
      return res.status(401).json({ errorMessage: 'Wrong email or password.' });

    //signing the jwt token with secret code (in .env file)
    const token = jwt.sign(
      {
        reviewer: existingReviewer._id,
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