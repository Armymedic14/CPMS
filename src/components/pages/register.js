import React from 'react';
import { Link } from 'react-router-dom';

//styling
import '../../App.css';

export default function Register() {
  return (
    //routes to author and reviewer registration
      <div className='register'>Register
        <div>
          <Link to='registerAuthor'>
            <button className='btn'>As an Author</button>
          </Link>
        </div>
        <div>
          <Link to='registerReviewer'>
            <button className='btn'>As a Reviewer</button>
          </Link>
          </div>
      </div>
  )
}