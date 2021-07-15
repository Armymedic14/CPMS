import React from 'react';
import { Link } from 'react-router-dom';

//styling
import '../../App.css';

export default function Login() {
    return (
      //routes to author and reviewer logins
        <div className='login'>Login
          <div>
            <Link to='loginAuthor'>
              <button className='btn'>As an Author</button>
            </Link>
          </div>
          <div>
            <Link to='loginReviewer'>
              <button className='btn'>As a Reviewer</button>
            </Link>
            </div>
        </div>
    )
}
