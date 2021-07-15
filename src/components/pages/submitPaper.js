import React from 'react';
import axios from 'axios';
import '../../App.css';

class SubmitPaper extends React.Component {
    
  constructor(props) {
    super(props);
      
      this.onChangeAuthorID = this.onChangeAuthorID.bind(this);
      this.onChangeActive = this.onChangeActive.bind(this);
      this.onChangeFilenameOriginal = this.onChangeFilenameOriginal.bind(this);
      this.onChangeFilename = this.onChangeFilename.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeCertification = this.onChangeCertification.bind(this);
      this.onChangeNotesToReviewers = this.onChangeNotesToReviewers.bind(this);
      
      this.onChangeOtherDescription = this.onChangeOtherDescription.bind(this);

      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {

        AuthorID: '',
        Active: true,
        FilenameOriginal: '',
        Filename: '',
        Title: '',
        Certification: '',
        NotesToReviewers: '',

        AnalysisOfAlgorithms: false, Applications: false, Architecture: false, ArtificialIntelligence: false,
        ComputerEngineering: false, Curriculum: false, DataStructures: false, Databases: false,
        DistanceLearning: false, DistributedSystems: false, EthicalSocietalIssues: false, FirstYearComputing:  false,
        GenderIssues: false, GrantWriting: false, GraphicsImageProcessing: false, HumanComputerInteraction: false,
        LaboratoryEnvironments: false, Literacy: false, MathematicsInComputing: false, Multimedia: false,
        NetworkingDataCommunications: false, NonMajorCourses: false, ObjectOrientedIssues: false, OperatingSystems: false,
        ParallelProcessing: false, Pedagogy: false, ProgrammingLanguages: false, Research: false,
        Security: false, SoftwareEngineering: false, SystemsAnalysisAndDesign: false, UsingTechnologyInTheClassroom: false,
        WebAndInternetProgramming: false,Other: false,

        OtherDescription: '',
      }
    }

    onChangeAuthorID(e) {this.setState({AuthorID: e.target.value})}
    onChangeActive(e) {this.setState({Active: e.target.value})}
    onChangeFilenameOriginal(e) {this.setState({FilenameOriginal: e.target.value})}
    onChangeFilename(e) {this.setState({Filename: e.target.value})}
    onChangeTitle(e) {this.setState({Title: e.target.value})}
    onChangeCertification(e) {this.setState({Certification: e.target.value})}
    onChangeNotesToReviewers(e) {this.setState({NotesToReviewers: e.target.value})}

    onChangeOtherDescription(e) {this.setState({OtherDescription: e.target.value})}

    onCheckboxChange = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
        
    async onSubmit(e) {
        e.preventDefault();

        const paper = {
            AuthorID: this.state.AuthorID,
            Active: this.state.Active,
            FilenameOriginal: this.state.FilenameOriginal,
            Filename: this.state.Filename,
            Title: this.state.Title,
            Certification: this.state.Certification,
            NotesToReviewers: this.state.NotesToReviewers,

            AnalysisOfAlgorithms: this.state.AnalysisOfAlgorithms,
            Applications: this.state.Applications,
            Architecture: this.state.Architecture,
            ArtificialIntelligence: this.state.ArtificialIntelligence,
            ComputerEngineering: this.state.ComputerEngineering,
            Curriculum: this.state.Curriculum,
            DataStructures: this.state.DataStructures,
            Databases: this.state.Databases,
            DistanceLearning: this.state.DistanceLearning,
            DistributedSystems: this.state.DistributedSystems,
            EthicalSocietalIssues: this.state.EthicalSocietalIssues,
            FirstYearComputing:  this.state.FirstYearComputing,
            GenderIssues: this.state.GenderIssues,
            GrantWriting: this.state.GrantWriting,
            GraphicsImageProcessing: this.state.GraphicsImageProcessing,
            HumanComputerInteraction: this.state.HumanComputerInteraction,
            LaboratoryEnvironments: this.state.LaboratoryEnvironments,
            Literacy: this.state.Literacy,
            MathematicsInComputing: this.state.MathematicsInComputing,
            Multimedia: this.state.Multimedia,
            NetworkingDataCommunications: this.state.NetworkingDataCommunications,
            NonMajorCourses: this.state.NonMajorCourses,
            ObjectOrientedIssues: this.state.ObjectOrientedIssues,
            OperatingSystems: this.state.OperatingSystems,
            ParallelProcessing: this.state.ParallelProcessing,
            Pedagogy: this.state.Pedagogy,
            ProgrammingLanguages: this.state.ProgrammingLanguages,
            Research: this.state.Research,
            Security: this.state.Security,
            SoftwareEngineering: this.state.SoftwareEngineering,
            SystemsAnalysisAndDesign: this.state.SystemsAnalysisAndDesign,
            UsingTechnologyInTheClassroom: this.state.UsingTechnologyInTheClassroom,
            WebAndInternetProgramming: this.state.WebAndInternetProgramming,
            Other: this.state.Other,
            OtherDescription:  this.state.OtherDescription,
          }

        console.log(paper);

        axios.post('http://localhost:5000/paper', paper, {withCredentials: true});

        window.location = '/';
    }

    render() {
      return ( 
          <div className="base">Submit your paper
              <form onSubmit={this.onSubmit}>
                <div className="content">
                  <div className="form-group">
                    <label htmlFor="FilenameOriginal">Filename Original</label>
                    <input type="text" name="FilenameOriginal"
                      className="form-control"
                      value={this.state.FilenameOriginal}
                      onChange={this.onChangeFilenameOriginal}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Filename">Filename</label>
                    <input type="text" name="Filename"
                      className="form-control"
                      value={this.state.Filename}
                      onChange={this.onChangeFilename}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Title">Title</label>
                    <input type="text" name="Title"
                      className="form-control"
                      value={this.state.Title}
                      onChange={this.onChangeTitle}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Certification">Certification</label>
                    <input type="text" name="Certification"
                      className="form-control"
                      value={this.state.Certification}
                      onChange={this.onChangeCertification}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="NotesToReviewers">Notes to Reviewers</label>
                    <input type="text" name="NotesToReviewers"
                      className="form-control"
                      value={this.state.NotesToReviewers}
                      onChange={this.onChangeNotesToReviewers}
                    />
                  </div>
                </div>

                <div className="content2">
                  <div>
                    <input type="checkbox" name="AnalysisOfAlgorithms"  
                      onChange={this.onCheckboxChange}
                      checked={this.state.AnalysisOfAlgorithms}
                    />Analysis of Algorithms&nbsp;&nbsp;

                    <input type="checkbox" name="Applications"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Applications}
                    />Applications&nbsp;&nbsp;

                    <input type="checkbox" name="Architecture"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Architecture}
                    />Architecture&nbsp;&nbsp;

                    <input type="checkbox" name="ArtificialIntelligence"
                      onChange={this.onCheckboxChange}
                      checked={this.state.ArtificialIntelligence}
                    />Artificial Intelligence&nbsp;&nbsp;

                    <input type="checkbox" name="ComputerEngineering"
                      onChange={this.onCheckboxChange}
                      checked={this.state.ComputerEngineering}
                    />Computer Engineering&nbsp;&nbsp;

                    <input type="checkbox" name="Curriculum"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Curriculum}
                    />Curriculum&nbsp;&nbsp;
                  </div>

                  <div>
                    <input type="checkbox" name="DataStructures"
                      onChange={this.onCheckboxChange}
                      checked={this.state.DataStructures}
                    />Data Structures&nbsp;&nbsp;

                    <input type="checkbox" name="Databases"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Databases}
                    />Databases&nbsp;&nbsp;

                    <input type="checkbox" name="DistanceLearning"
                      onChange={this.onCheckboxChange}
                      checked={this.state.DistanceLearning}
                    />Distance Learning&nbsp;&nbsp;

                    <input type="checkbox" name="DistributedSystems"
                      onChange={this.onCheckboxChange}
                      checked={this.state.DistributedSystems}
                    />Distributed Systems&nbsp;&nbsp;

                    <input type="checkbox" name="EthicalSocietalIssues"
                      onChange={this.onCheckboxChange}
                      checked={this.state.EthicalSocietalIssues}
                    />Ethical Societal Issues&nbsp;&nbsp;

                    <input type="checkbox" name="FirstYearComputing"
                      onChange={this.onCheckboxChange}
                      checked={this.state.FirstYearComputing}
                    />First Year Computing&nbsp;&nbsp;
                  </div>

                  <div>
                    <input type="checkbox" name="GenderIssues"
                      onChange={this.onCheckboxChange}
                      checked={this.state.GenderIssues}
                    />Gender Issues&nbsp;&nbsp;

                    <input type="checkbox" name="GrantWriting"
                      onChange={this.onCheckboxChange}
                      checked={this.state.GrantWriting}
                    />Grant Writing&nbsp;&nbsp;

                    <input type="checkbox" name="GraphicsImageProcessing"
                      onChange={this.onCheckboxChange}
                      checked={this.state.GraphicsImageProcessing}
                    />Graphics Image Processing&nbsp;&nbsp;

                    <input type="checkbox" name="HumanComputerInteraction"
                      onChange={this.onCheckboxChange}
                      checked={this.state.HumanComputerInteraction}
                    />Human Computer Interaction&nbsp;&nbsp;

                    <input type="checkbox" name="LaboratoryEnvironments"
                      onChange={this.onCheckboxChange}
                      checked={this.state.LaboratoryEnvironments}
                    />Laboratory Environments&nbsp;&nbsp;
                  </div>
                  
                  <div>
                    <input type="checkbox" name="Literacy"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Literacy}
                    />Literacy&nbsp;&nbsp;

                    <input type="checkbox" name="MathematicsInComputing"
                      onChange={this.onCheckboxChange}
                      checked={this.state.MathematicsInComputing}
                    />Mathematics in Computing&nbsp;&nbsp;

                    <input type="checkbox" name="Multimedia"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Multimedia}
                    />Multimedia&nbsp;&nbsp;

                    <input type="checkbox" name="NetworkingDataCommunications"
                      onChange={this.onCheckboxChange}
                      checked={this.state.NetworkingDataCommunications}
                    />Networking/Data Communications&nbsp;&nbsp;

                    <input type="checkbox" name="NonMajorCourses"
                      onChange={this.onCheckboxChange}
                      checked={this.state.NonMajorCourses}
                    />Non Major Courses&nbsp;&nbsp;
                  </div>
                  <div>
                    <input type="checkbox" name="ObjectOrientedIssues"
                      onChange={this.onCheckboxChange}
                      checked={this.state.ObjectOrientedIssues}
                    />Object Oriented Issues&nbsp;&nbsp;

                    <input type="checkbox" name="OperatingSystems"
                      onChange={this.onCheckboxChange}
                      checked={this.state.OperatingSystems}
                    />Operating Systems&nbsp;&nbsp;

                    <input type="checkbox" name="ParallelProcessing"
                      onChange={this.onCheckboxChange}
                      checked={this.state.ParallelProcessing}
                    />Parallel Processing&nbsp;&nbsp;

                    <input type="checkbox" name="Pedagogy"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Pedagogy}
                    />Pedagogy&nbsp;&nbsp;

                    <input type="checkbox" name="ProgrammingLanguages"
                      onChange={this.onCheckboxChange}
                      checked={this.state.ProgrammingLanguages}
                    />Programming Languages&nbsp;&nbsp;

                    <input type="checkbox" name="Research"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Research}
                    />Research&nbsp;&nbsp;

                    <input type="checkbox" name="Security"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Security}
                    />Security&nbsp;&nbsp;
                  </div>

                  <div>
                    <input type="checkbox" name="SoftwareEngineering"
                      onChange={this.onCheckboxChange}
                      checked={this.state.SoftwareEngineering}
                    />Software Engineering&nbsp;&nbsp;

                    <input type="checkbox" name="SystemsAnalysisAndDesign"
                      onChange={this.onCheckboxChange}
                      checked={this.state.SystemsAnalysisAndDesign}
                    />Systems Analysis and Design&nbsp;&nbsp;

                    <input type="checkbox" name="UsingTechnologyInTheClassroom"
                      onChange={this.onCheckboxChange}
                      checked={this.state.UsingTechnologyInTheClassroom}
                    />Using Technology in the Classroom&nbsp;&nbsp;
                    
                    <input type="checkbox" name="WebAndInternetProgramming"
                      onChange={this.onCheckboxChange}
                      checked={this.state.WebAndInternetProgramming}
                    />Web and Internet Programming&nbsp;&nbsp;
                  </div>
                  <div>
                    <input type="checkbox" name="Other"
                      onChange={this.onCheckboxChange}
                      checked={this.state.Other}
                    />Other&nbsp;&nbsp;

                    <input type="text" name="OtherDescription"
                      onChange={this.onCheckboxChange}
                      checked={this.state.OtherDescription}
                    />Other Description&nbsp;&nbsp;
                  </div>
                </div>

                <div className="content3">
                  <button type="submit" className="btnRegister">Submit Paper</button>
                </div>
              </form>
        </div>
      )
  }
}
export default SubmitPaper;