//mongoose is a schema tool for MongoDB
const mongoose = require('mongoose');

//as seen in given database schema
const reviewSchema = new mongoose.Schema({
    PaperID: {type: String, required: false}, 
    ReviewerID: {type: String, required: false}, 

    AppropriatenessOfTopic: {type: Number, required: false}, 
    TimelinessOfTopic: {type: Number, required: false}, 
    SupportiveEvidence: {type: Number, required: false}, 
    TechnicalQuality: {type: Number, required: false}, 
    ScopeOfCoverage: {type: Number, required: false},  
    CitationOfPreviousWork: {type: Number, required: false},  
    Originality: {type: Number, required: false},  
    ContentComments: {type: String, trim: true, required: false}, 

    OrganizationOfPaper: {type: Number, required: false},  
    ClarityOfMainMessage: {type: Number, required: false},  
    Mechanics: {type: Number, required: false},  
    WrittenDocumentComments: {type: String, trim: true, required: false}, 

    SuitabilityForPresentation: {type: Number, required: false},  
    PotentialInterestInTopic: {type: Number, required: false},  
    PotentialForOralPresentationComments: {type: String, trim: true, required: false}, 

    OverallRating: {type: Number, required: false},  
    OverallRatingComments: {type: String, trim: true, required: false}, 
    ComfortLevelTopic: {type: Number, required: false},  
    ComfortLevelAcceptability: {type: Number, required: false},  
    Complete: {type: Boolean, default: false, required: false}
});

const Review = mongoose.model('review', reviewSchema);
module.exports = Review;