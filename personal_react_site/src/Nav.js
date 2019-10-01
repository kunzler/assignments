import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <Link to="/quote1">
                <li>Game of Thrones</li>
                </Link>
                <Link to="/quote2">
                <li>button 2</li>
                </Link>
                <Link to="/quote3">
                <li>button 3</li>
                </Link>

            </ul>
        </nav>
    )
}
export default Nav