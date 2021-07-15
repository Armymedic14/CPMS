import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Login() {
    return (
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
