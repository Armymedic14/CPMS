import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Reports() {
    return (
        <div className='reports'>Reports
          <div>
                <Link to='reviewsSummaryReport'>
                    <button className='btn'>Reviews Summary Report</button>
                </Link>
            </div>
            <div>
                <Link to='authorsReport'>
                    <button className='btn'>Authors Report</button>
                </Link>
            </div>
            <div>
                <Link to='reviewersReport'>
                    <button className='btn'>Reviewers Report</button>
                </Link>
            </div>
            <div>
                <Link to='reviewersCommentsReport'>
                    <button className='btn'>Reviewers Comments Report</button>
                </Link>
            </div>
        </div>
    )
}