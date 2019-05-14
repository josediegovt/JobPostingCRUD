import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div className = "navclass">
            <ul>
                <li> <Link className = "linkcolor" to = "/index"> Postings </Link> </li>
                <li> <Link className = "linkcolor" to = "/create"> Create </Link> </li>
                <li> <Link className = "linkcolor" to = "/read"> View </Link> </li>
                <li> <Link className = "linkcolor" to = "/update"> Update </Link> </li>
                <li> <Link className = "linkcolor" to = "/delete"> Delete </Link> </li>
            </ul>
        </div>
    )
}

export default NavBar;