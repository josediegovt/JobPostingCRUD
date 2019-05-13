import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "navclass">
                <ul>
                    <li> Postings </li>
                    <li> Create </li>
                    <li> View </li>
                    <li> Update </li>
                    <li> Delete </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;