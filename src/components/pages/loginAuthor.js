import React, {useState} from 'react';
import axios from 'axios';

//styling
import '../../App.css';

//variables needed for login
export default function LoginAuthor() {
    const [EmailAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');

    async function login(e) {
        e.preventDefault();

        const loginData = {
            EmailAddress,
            Password
        };
        //post request to MongoDB for author login
        await axios.post('http://localhost:5000/author/login', loginData);
    }

    return ( 
        //form components: labels, textboxes, button
        <div className='loginA'> Login
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" 
                        onChange={(e) => setEmailAddress(e.target.value)}
                        value={EmailAddress}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={Password}
                    />
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Login</button>
                </div>
            </form>
        </div>
    );
}