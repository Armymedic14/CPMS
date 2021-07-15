//express to connect to MongoDB
const router = require('express').Router();
const auth = require('../middleware/auth');

//import paper schema
const Paper = require('../models/paperModel');

router.route('/').post(auth, async(req, res) => {
  const AuthorID = req.body.AuthorID;
  const Active = req.body.Active;
  const FilenameOriginal = req.body.FilenameOriginal;
  const Filename = req.body.Filename;
  const Title= req.body.Title;
  const Certification= req.body.Certification;
  const NotesToReviewers= req.body.NotesToReviewers;

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

  const newPaper = new Paper({
    AuthorID,
    Active,
    FilenameOriginal,
    Filename,
    Title,
    Certification,
    NotesToReviewers,

    AnalysisOfAlgorithms, Applications,Architecture, ArtificialIntelligence, ComputerEngineering,
    Curriculum, DataStructures, Databases, DistanceLearning, DistributedSystems, EthicalSocietalIssues,
    FirstYearComputing, GenderIssues, GrantWriting, GraphicsImageProcessing, HumanComputerInteraction,
    LaboratoryEnvironments, Literacy, MathematicsInComputing, Multimedia, NetworkingDataCommunications, 
    NonMajorCourses, ObjectOrientedIssues, OperatingSystems, ParallelProcessing, Pedagogy, 
    ProgrammingLanguages,Research, Security, SoftwareEngineering, SystemsAnalysisAndDesign,
    UsingTechnologyInTheClassroom, WebAndInternetProgramming, Other, OtherDescription

  });

  const savedPaper = await newPaper.save()
  res.json(savedPaper);
});

router.route('/').get(auth, async(req, res) => {
  try{
    const papers = await Paper.find();
    res.json(papers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router; 