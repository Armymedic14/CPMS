//mongoose is a schema tool for MongoDB
const mongoose = require('mongoose');

//as seen in given database schema
const reviewerSchema = new mongoose.Schema({
    FirstName: {type: String, trim: true, required: false}, 
    MiddleInitial: {type: String, trim: true, maxlength: 1, required: false},
    LastName: {type: String, trim: true, required: false},
    Affiliation: {type: String, trim: true, required: false},
    Department: {type: String, trim: true, required: false},
    Address: {type: String, trim: true, required: false},
    City: {type: String, trim: true, required: false},
    State: {type: String, trim: true, maxlength: 2, required: false},
    ZipCode: {type: String, trim: true, maxlength: 5,required: false},
    PhoneNumber: {type: String, trim: true, required: false},
    EmailAddress: {type: String, trim: true, required: true},
    Password: {type: String, maxlength: 5, required: true}, 
    Active: {type: Boolean, default: false, equired: false}, 

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
    ReviewsAcknowledged: {type: Boolean, default: false, required: false}
});

const Reviewer = mongoose.model('reviewer', reviewerSchema);
module.exports = Reviewer;