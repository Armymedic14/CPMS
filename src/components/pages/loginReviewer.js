import React, {useState} from 'react';
import axios from 'axios';

import '../../App.css';

export default function LoginReviewer() {
    const [EmailAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');

    async function login(e) {
        e.preventDefault();

        const loginData = {
            EmailAddress,
            Password
        };
        await axios.post('http://localhost:5000/reviewer/login', loginData);
    }

    return ( 
        <div className='login1'> Login
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