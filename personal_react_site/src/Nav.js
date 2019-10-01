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
                <li>Ron Swanson</li>
                </Link>
                <Link to="/quote3">
                <li>Star Wars</li>
                </Link>

            </ul>
        </nav>
    )
}
export default Nav