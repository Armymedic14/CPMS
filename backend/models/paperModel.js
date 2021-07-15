//mongoose is a schema tool for MongoDB
const mongoose = require('mongoose');

//as seen in given database schema
const paperSchema = new mongoose.Schema({
    AuthorID: {type: String, required: false}, 
    Active: {type: Boolean, default: false, required: false}, 
    FilenameOriginal: {type: String, trim: true, required: false}, 
    Filename: {type: String, trim: true, required: false}, 
    Title: {type: String, trim: true, required: false}, 
    Certification: {type: String, trim: true, maxlength: 3, required: false}, 
    NotesToReviewers: {type: String, trim: true, required: false},  
    
    AnalysisOfAlgorithms: {type: Boolean, default: false, required: false}, 
    Applications: {type: Boolean, default: false, required: false}, 
    Architecture: {type: Boolean, default: false, required: false}, 
    ArtificialIntelligence: {type: Boolean, default: false, required: false}, 
    ComputerEngineering: {type: Boolean, default: false, required: false}, 
    Curriculum: {type: Boolean, default: false, required: false}, 
    DataStructures: {type: Boolean, default: false, required: false}, 
    Databases: {type: Boolean, default: false, required: false}, 
    DistanceLearning: {type: Boolean, default: false, required: false}, 
    DistributedSystems: {type: Boolean, default: false, required: false}, 
    EthicalSocietalIssues: {type: Boolean, default: false, required: false}, 
    FirstYearComputing: {type: Boolean, default: false, required: false}, 
    GenderIssues: {type: Boolean, default: false, required: false}, 
    GrantWriting: {type: Boolean, default: false, required: false}, 
    GraphicsImageProcessing: {type: Boolean, default: false, required: false}, 
    HumanComputerInteraction: {type: Boolean, default: false, required: false}, 
    LaboratoryEnvironments: {type: Boolean, default: false, required: false}, 
    Literacy: {type: Boolean, default: false, required: false}, 
    MathematicsInComputing: {type: Boolean, default: false, required: false}, 
    Multimedia: {type: Boolean, default: false, required: false}, 
    NetworkingDataCommunications: {type: Boolean, default: false, required: false}, 
    NonMajorCourses: {type: Boolean, default: false, required: false}, 
    ObjectOrientedIssues: {type: Boolean, default: false, required: false}, 
    OperatingSystems: {type: Boolean, default: false, required: false}, 
    ParallelProcessing: {type: Boolean, default: false, required: false}, 
    Pedagogy: {type: Boolean, default: false, required: false}, 
    ProgrammingLanguages: {type: Boolean, default: false, required: false}, 
    Research: {type: Boolean, default: false, required: false}, 
    Security: {type: Boolean, default: false, required: false}, 
    SoftwareEngineering: {type: Boolean, default: false, required: false}, 
    SystemsAnalysisAndDesign: {type: Boolean, default: false, required: false}, 
    UsingTechnologyInTheClassroom: {type: Boolean, default: false, required: false}, 
    WebAndInternetProgramming: {type: Boolean, default: false, required: false}, 
    Other: {type: Boolean, default: false, required: false}, 
    OtherDescription: {type: String, trim: true, required: false}, 
});

const Paper = mongoose.model('paper', paperSchema);
module.exports = Paper;