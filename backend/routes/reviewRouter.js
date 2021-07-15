//express to connect to MongoDB
const router = require('express').Router();
const auth = require('../middleware/auth');

//import review schema
const Review = require('../models/reviewModel');

router.route('/').post(auth, async(req, res) => {
  const PaperID = req.body.PaperID;
  const ReviewerID = req.body.ReviewerID;
  const AppropriatenessOfTopic = req.body.AppropriatenessOfTopic;
  const TimelinessOfTopic = req.body.TimelinessOfTopic;
  const SupportiveEvidence = req.body.SupportiveEvidence;
  const TechnicalQuality = req.body.TechnicalQuality;
  const ScopeOfCoverage = req.body.ScopeOfCoverage;
  const CitationOfPreviousWork = req.body.CitationOfPreviousWork;
  const Originality = req.body.Originality;
  const ContentComments = req.body.ContentComments;
  const OrganizationOfPaper = req.body.OrganizationOfPaper;
  const ClarityOfMainMessage = req.body.ClarityOfMainMessage;
  const Mechanics = req.body.Mechanics;
  const WrittenDocumentComments = req.body.WrittenDocumentComments;
  const SuitabilityForPresentation = req.body.SuitabilityForPresentation;
  const PotentialInterestInTopic = req.body.PotentialInterestInTopic;
  const PotentialForOralPresentationComments = req.body.PotentialForOralPresentationComments;
  const OverallRating = req.body.OverallRating;
  const OverallRatingComments = req.body.OverallRatingComments;
  const ComfortLevelTopic = req.body.ComfortLevelTopic;
  const ComfortLevelAcceptability = req.body.ComfortLevelAcceptability;
  const Complete = req.body.Complete;

  //review object
  const newReview = new Review({
    PaperID,
    ReviewerID,
    AppropriatenessOfTopic,
    TimelinessOfTopic,
    SupportiveEvidence,
    TechnicalQuality,
    ScopeOfCoverage,
    CitationOfPreviousWork,
    Originality,
    ContentComments,
    OrganizationOfPaper,
    ClarityOfMainMessage,
    Mechanics,
    WrittenDocumentComments,
    SuitabilityForPresentation,
    PotentialInterestInTopic,
    PotentialForOralPresentationComments,
    OverallRating,
    OverallRatingComments,
    ComfortLevelTopic,
    ComfortLevelAcceptability,
    Complete
  });

  const savedReview = await newReview.save()
  res.json(savedReview);
});

//route paper through auth for authorization. Will work only for appropriate users.
router.route('/').get(auth, async(req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
});

module.exports = router; 