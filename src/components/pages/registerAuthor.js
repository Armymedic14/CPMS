import React from 'react';
import axios from 'axios';
import '../../App.css';

class RegisterAuthor extends React.Component {
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
            cPassword: ''
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
        
    //submit author object to database
    async onSubmit(e) {
        e.preventDefault();

        const author = {
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
            cPassword: this.state.cPassword
          }

        console.log(author);

        await axios.post('http://localhost:5000/author', author, {withCredentials: true});

        //route user to home after registration
        window.location = '/';
    }

    render() {
        return ( 
            <div className="registerA">
                <div className="content">
                    <form onSubmit={this.onSubmit}>
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

                        <button type="submit" className="btnRegister">Register</button>
                    </form>
                </div>
        </div>
        )
    }
}
export default RegisterAuthor;
