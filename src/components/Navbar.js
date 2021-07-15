import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick (false);

    return (
        <>
            <nav className = 'navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    CPMS
                    <i class="fas fa-dice-d20"></i>
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li classNasme='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li classNasme='nav-item'>
                        <Link to='/reviewPaper' className='nav-links' onClick={closeMobileMenu}>
                            Review
                        </Link>
                    </li>

                    <li classNasme='nav-item'>
                        <Link to='/submitPaper' className='nav-links' onClick={closeMobileMenu}>
                            Submit
                        </Link>
                    </li>

                    <li classNasme='nav-item'>
                        <Link to='/reports' className='nav-links' onClick={closeMobileMenu}>
                            Reports
                        </Link>
                    </li>

                    <li classNasme='nav-item'>
                        <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                            Register
                        </Link>
                    </li>

                    <li classNasme='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;