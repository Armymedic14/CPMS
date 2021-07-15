import React from 'react';
import axios from 'axios';
import '../../App.css';

class ReviewPaper extends React.Component {
    
  constructor(props) {
    super(props);

    this.onChangePaperID = this.onChangePaperID.bind(this);
    this.onChangeReviewerID = this.onChangeReviewerID.bind(this);

    this.onChangeAppropriatenessOfTopic = this.onChangeAppropriatenessOfTopic.bind(this);
    this.onChangeTimelinessOfTopic = this.onChangeTimelinessOfTopic.bind(this);
    this.onChangeSupportiveEvidence = this.onChangeSupportiveEvidence.bind(this);
    this.onChangeTechnicalQuality = this.onChangeTechnicalQuality.bind(this);
    this.onChangeScopeOfCoverage = this.onChangeScopeOfCoverage.bind(this);
    this.onChangeCitationOfPreviousWork = this.onChangeCitationOfPreviousWork.bind(this);
    this.onChangeOriginality = this.onChangeOriginality.bind(this);
    this.onChangeContentComments = this.onChangeContentComments.bind(this);

    this.onChangeOrganizationOfPaper = this.onChangeOrganizationOfPaper.bind(this);
    this.onChangeClarityOfMainMessage = this.onChangeClarityOfMainMessage.bind(this);
    this.onChangeMechanics = this.onChangeMechanics.bind(this);
    this.onChangeWrittenDocumentComments = this.onChangeWrittenDocumentComments.bind(this);

    this.onChangeSuitabilityForPresentation = this.onChangeSuitabilityForPresentation.bind(this);
    this.onChangePotentialInterestInTopic = this.onChangePotentialInterestInTopic.bind(this);
    this.onChangePotentialForOralPresentationComments = this.onChangePotentialForOralPresentationComments.bind(this);

    this.onChangeOverallRating = this.onChangeOverallRating.bind(this);
    this.onChangeOverallRatingComments = this.onChangeOverallRatingComments.bind(this);
    this.onChangeComfortLevelTopic = this.onChangeComfortLevelTopic.bind(this);
    this.onChangeComfortLevelAcceptability = this.onChangeComfortLevelAcceptability.bind(this);
    this.onChangeComplete = this.onChangeComplete.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      PaperID: '',
      ReviewerID: '',

      AppropriatenessOfTopic: 0,
      TimelinessOfTopic: 0,
      SupportiveEvidence: 0,
      TechnicalQuality: 0,
      ScopeOfCoverage: 0,
      CitationOfPreviousWork: 0,
      Originality: 0,
      ContentComments: '',

      OrganizationOfPaper: 0,
      ClarityOfMainMessage: 0,
      Mechanics: 0,
      WrittenDocumentComments: '',

      SuitabilityForPresentation: 0,
      PotentialInterestInTopic: 0,
      PotentialForOralPresentationComments: '',

      OverallRating: 0,
      OverallRatingComments: '',

      ComfortLevelTopic: 0,
      ComfortLevelAcceptability: 0,
      Complete: false,
    }
  }

    onChangePaperID(e) {this.setState({PaperID: e.target.value})}
    onChangeReviewerID(e) {this.setState({ReviewerID: e.target.value})}

    onChangeAppropriatenessOfTopic(e) {this.setState({AppropriatenessOfTopic: e.target.value})}
    onChangeTimelinessOfTopic(e) {this.setState({TimelinessOfTopic: e.target.value})}
    onChangeSupportiveEvidence(e) {this.setState({SupportiveEvidence: e.target.value})}
    onChangeTechnicalQuality(e) {this.setState({TechnicalQuality: e.target.value})}
    onChangeScopeOfCoverage(e) {this.setState({ScopeOfCoverage: e.target.value})}
    onChangeCitationOfPreviousWork(e) {this.setState({CitationOfPreviousWork: e.target.value})}
    onChangeOriginality(e) {this.setState({Originality: e.target.value})}
    onChangeContentComments(e) {this.setState({ContentComments: e.target.value})}

    onChangeOrganizationOfPaper(e) {this.setState({OrganizationOfPaper: e.target.value})}
    onChangeClarityOfMainMessage(e) {this.setState({ClarityOfMainMessage: e.target.value})}
    onChangeMechanics(e) {this.setState({Mechanics: e.target.value})}
    onChangeWrittenDocumentComments(e) {this.setState({WrittenDocumentComments: e.target.value})}

    onChangeSuitabilityForPresentation(e) {this.setState({SuitabilityForPresentation: e.target.value})}
    onChangePotentialInterestInTopic(e) {this.setState({PotentialInterestInTopic: e.target.value})}
    onChangePotentialForOralPresentationComments(e) {this.setState({PotentialForOralPresentationComments: e.target.value})}

    onChangeOverallRating(e) {this.setState({OverallRating: e.target.value})}
    onChangeOverallRatingComments(e) {this.setState({OverallRatingComments: e.target.value})}
    onChangeComfortLevelTopic(e) {this.setState({ComfortLevelTopic: e.target.value})}
    onChangeComfortLevelAcceptability(e) {this.setState({ComfortLevelAcceptability: e.target.value})}
    onChangeComplete(e) {this.setState({Complete: e.target.value})}

    async onSubmit(e) {
        e.preventDefault();

        const review = {
          AppropriatenessOfTopic: this.state.AppropriatenessOfTopic,
          TimelinessOfTopic: this.state.TimelinessOfTopic,
          SupportiveEvidence: this.state.SupportiveEvidence,
          TechnicalQuality: this.state.TechnicalQuality,
          ScopeOfCoverage: this.state.ScopeOfCoverage,
          CitationOfPreviousWork: this.state.CitationOfPreviousWork,
          Originality: this.state.Originality,
          ContentComments: this.state.ContentComments,
      
          OrganizationOfPaper: this.state.OrganizationOfPaper,
          ClarityOfMainMessage: this.state.ClarityOfMainMessage,
          Mechanics: this.state.Mechanics,
          WrittenDocumentComments: this.state.WrittenDocumentComments,
      
          SuitabilityForPresentation: this.state.SuitabilityForPresentation,
          PotentialInterestInTopic: this.state.PotentialInterestInTopic,
          PotentialForOralPresentationComments: this.state.PotentialForOralPresentationComments,
      
          OverallRating: this.state.OverallRating,
          OverallRatingComments: this.state.OverallRatingComments,
          ComfortLevelTopic: this.state.ComfortLevelTopic,
          ComfortLevelAcceptability: this.state.ComfortLevelAcceptability,
          Complete: this.state.Complete,
          }

        console.log(review);

        axios.post('http://localhost:5000/review', review, {withCredentials: true});

        window.location = '/';
    }

    render() {
      return ( 
          <div className="baseReview">Submit your review
              <form onSubmit={this.onSubmit}>
                <div className="content">
                  <div className="form-group">
                    <label htmlFor="AppropriatenessOfTopic">Appropriateness of Topic</label>
                    <input type="number" name="AppropriatenessOfTopic"
                      className="form-control"
                      value={this.state.AppropriatenessOfTopic}
                      onChange={this.onChangeAppropriatenessOfTopic}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="TimelinessOfTopic">Timeliness of Topic</label>
                    <input type="number" name="TimelinessOfTopic"
                      className="form-control"
                      value={this.state.TimelinessOfTopic}
                      onChange={this.onChangeTimelinessOfTopic}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="SupportiveEvidence">Supportive Evidence</label>
                    <input type="number" name="SupportiveEvidence"
                      className="form-control"
                      value={this.state.SupportiveEvidence}
                      onChange={this.onChangeSupportiveEvidence}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="TechnicalQuality">Technical Quality</label>
                    <input type="number" name="TechnicalQuality"
                      className="form-control"
                      value={this.state.TechnicalQuality}
                      onChange={this.onChangeTechnicalQuality}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ScopeOfCoverage">Scope of Coverage</label>
                    <input type="number" name="ScopeOfCoverage"
                      className="form-control"
                      value={this.state.ScopeOfCoverage}
                      onChange={this.onChangeScopeOfCoverage}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="CitationOfPreviousWork">Citation of Previous Work</label>
                    <input type="number" name="CitationOfPreviousWork"
                      className="form-control"
                      value={this.state.CitationOfPreviousWork}
                      onChange={this.onChangeCitationOfPreviousWork}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Originality">Originality</label>
                    <input type="number" name="Originality"
                      className="form-control"
                      value={this.state.Originality}
                      onChange={this.onChangeOriginality}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ContentComments">Content Comments</label>
                    <input type="text" name="ContentComments"
                      className="form-control"
                      value={this.state.ContentComments}
                      onChange={this.onChangeContentComments}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="OrganizationOfPaper">Organization of Paper</label>
                    <input type="number" name="OrganizationOfPaper"
                      className="form-control"
                      value={this.state.OrganizationOfPaper}
                      onChange={this.onChangeOrganizationOfPaper}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ClarityOfMainMessage">Clarity of Main Message</label>
                    <input type="number" name="ClarityOfMainMessage"
                      className="form-control"
                      value={this.state.ClarityOfMainMessage}
                      onChange={this.onChangeClarityOfMainMessage}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Mechanics">Mechanics</label>
                    <input type="number" name="Mechanics"
                      className="form-control"
                      value={this.state.Mechanics}
                      onChange={this.onChangeMechanics}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="WrittenDocumentComments">Written Document Comments</label>
                    <input type="text" name="WrittenDocumentComments"
                      className="form-control"
                      value={this.state.WrittenDocumentComments}
                      onChange={this.onChangeWrittenDocumentComments}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="SuitabilityForPresentation">Suitability for Presentation</label>
                    <input type="number" name="SuitabilityForPresentation"
                      className="form-control"
                      value={this.state.SuitabilityForPresentation}
                      onChange={this.onChangeSuitabilityForPresentation}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="PotentialInterestInTopic">Potential Interest in Topic</label>
                    <input type="number" name="PotentialInterestInTopic"
                      className="form-control"
                      value={this.state.PotentialInterestInTopic}
                      onChange={this.onChangePotentialInterestInTopic}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="PotentialForOralPresentationComments">Potential for Oral Presentation Comments</label>
                    <input type="text" name="PotentialForOralPresentationComments"
                      className="form-control"
                      value={this.state.PotentialForOralPresentationComments}
                      onChange={this.onChangePotentialForOralPresentationComments}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="OverallRating">Overall Rating</label>
                    <input type="number" name="OverallRating"
                      className="form-control"
                      value={this.state.OverallRating}
                      onChange={this.onChangeOverallRating}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="OverallRatingComments">Overall Rating Comments</label>
                    <input type="text" name="OverallRatingComments"
                      className="form-control"
                      value={this.state.OverallRatingComments}
                      onChange={this.onChangeOverallRatingComments}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ComfortLevelTopic">Comfort Level Topic</label>
                    <input type="number" name="ComfortLevelTopic"
                      className="form-control"
                      value={this.state.ComfortLevelTopic}
                      onChange={this.onChangeComfortLevelTopic}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ComfortLevelAcceptability">Comfort Level Acceptability</label>
                    <input type="number" name="ComfortLevelAcceptability"
                      className="form-control"
                      value={this.state.ComfortLevelAcceptability}
                      onChange={this.onChangeComfortLevelAcceptability}
                    />
                  </div>
                </div>
                <div className="content3">
                  <button type="submit" className="btnRegister">Submit Review</button>
                </div>
              </form>
        </div>
      )
  }
}
export default ReviewPaper;