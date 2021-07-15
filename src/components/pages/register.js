import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Register() {
  return (
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