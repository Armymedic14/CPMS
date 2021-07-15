import React from 'react';
import axios from 'axios';
import '../../App.css';

class RegisterReviewer extends React.Component {
  constructor(props) {
    super(props);
    
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeMiddleInitial = this.onChangeMiddleInitial.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeAffiliation = this.onChangeAffiliation.bind(this);
      this.onChangeDepartment = this.onChangeDepartment.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangeCity = this.onChangeCity.bind(this);
      this.onChangeState = this.onChangeState.bind(this);
      this.onChangeZipCode = this.onChangeZipCode.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangecPassword = this.onChangecPassword.bind(this);
      
      this.onChangeOtherDescription = this.onChangeOtherDescription.bind(this);
      this.onChangeReviewsAcknowledged = this.onChangeReviewsAcknowledged.bind(this);

      this.onSubmit = this.onSubmit.bind(this);
  
      //set initial state
      this.state = {
        FirstName: '',
        MiddleInitial: '',
        LastName: '',
        Affiliation: '',
        Department: '',
        Address: '',
        City: '',
        State: '',
        ZipCode: '',
        PhoneNumber: '',
        EmailAddress: '',
        Password: '',
        cPassword: '',

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
        ReviewsAcknowledged: false
      }
    }

    //onChange methods
    onChangeFirstName(e) {this.setState({FirstName: e.target.value})}
    onChangeMiddleInitial(e) {this.setState({MiddleInitial: e.target.value})}
    onChangeLastName(e) {this.setState({LastName: e.target.value})}
    onChangeAffiliation(e) {this.setState({Affiliation: e.target.value})}
    onChangeDepartment(e) {this.setState({Department: e.target.value})}
    onChangeAddress(e) {this.setState({Address: e.target.value})}
    onChangeCity(e) {this.setState({City: e.target.value})}
    onChangeState(e) {this.setState({State: e.target.value})}
    onChangeZipCode(e) {this.setState({ZipCode: e.target.value})}
    onChangePhoneNumber(e) {this.setState({PhoneNumber: e.target.value})}
    onChangeEmailAddress(e) {this.setState({EmailAddress: e.target.value})}
    onChangePassword(e) {this.setState({Password: e.target.value})}
    onChangecPassword(e) {this.setState({cPassword: e.target.value})}

    onChangeOtherDescription(e) {this.setState({OtherDescription: e.target.value})}
    onChangeReviewsAcknowledged(e) {this.setState({ReviewsAcknowledged: e.target.value})}

    //onChange method for checkboxes
    onCheckboxChange = (e) => {
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
        
    //submit reviewer object to database
    async onSubmit(e) {
        e.preventDefault();

        const reviewer = {
            FirstName: this.state.FirstName,
            MiddleInitial: this.state.MiddleInitial,
            LastName: this.state.LastName,
            Affiliation: this.state.Affiliation,
            Department: this.state.Department,
            Address: this.state.Address,
            City: this.state.City,
            State: this.state.State,
            ZipCode: this.state.ZipCode,
            PhoneNumber: this.state.PhoneNumber,
            EmailAddress: this.state.EmailAddress,
            Password: this.state.Password,
            cPassword: this.state.cPassword,

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
            ReviewsAcknowledged: this.state.ReviewsAcknowledged
          }

        console.log(reviewer);

        axios.post('http://localhost:5000/reviewer', reviewer, {withCredentials: true});

        //route to home after registration
        window.location = '/';
    }
    
    render() {
        return ( 
            <div className="registerR">Register as a reviewer
                <form onSubmit={this.onSubmit}>
                  <div className="content">
                    <div className="form-group">
                      <label htmlFor="FirstName">First Name</label>
                      <input type="text" name="FirstName"
                        className="form-control"
                        value={this.state.FirstName}
                        onChange={this.onChangeFirstName}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="MiddleInitial">Middle Initial</label>
                      <input type="text" name="MiddleInitial"
                        className="form-control"
                        value={this.state.MiddleInitial}
                        onChange={this.onChangeMiddleInitial}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="LastName">Last Name</label>
                      <input type="text" name="LastName"
                        className="form-control"
                        value={this.state.LastName}
                        onChange={this.onChangeLastName}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="Affiliation">Affiliation</label>
                      <input type="text" name="Affiliation"
                        className="form-control"
                        value={this.state.Affiliation}
                        onChange={this.onChangeAffiliation}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="Department">Department</label>
                      <input type="text" name="Department"
                        className="form-control"
                        value={this.state.Department}
                        onChange={this.onChangeDepartment}
          
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="Address">Address</label>
                      <input type="text" name="Address"
                        className="form-control"
                        value={this.state.Address}
                        onChange={this.onChangeAddress}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="City">City</label>
                      <input type="text" name="City"
                        className="form-control"
                        value={this.state.City}
                        onChange={this.onChangeCity}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="State">State</label>
                      <input type="text" name="State"
                        className="form-control"
                        value={this.state.State}
                        onChange={this.onChangeState}
                      />
                    </div>

                    <div className="form-group">
                        <label htmlFor="ZipCode">Zip Code</label>
                        <input type="text" name="ZipCode"
                            className="form-control"
                            value={this.state.ZipCode}
                            onChange={this.onChangeZipCode}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="PhoneNumber">Phone Number</label>
                        <input type="text" name="PhoneNumber"
                            className="form-control"
                            value={this.state.PhoneNumber}
                            onChange={this.onChangePhoneNumber}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="EmailAddress">Email</label>
                        <input type="email" name="EmailAddress"
                            className="form-control"
                            value={this.state.EmailAddress}
                            onChange={this.onChangeEmailAddress}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="text" name="Password"
                            className="form-control"
                            value={this.state.Password}
                            onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                            <label htmlFor="cPassword">Confirm Password</label>
                            <input type="text" name="cPassword"
                                value={this.state.cPassword}
                                onChange={this.onChangecPassword}
                            />
                    </div>
                  </div>
                  <div className="form-checkbox-group">
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
                    <button type="submit" className="btnRegister">Register</button>
                  </div>

                </form>
          </div>
        )
    }
}
export default RegisterReviewer;