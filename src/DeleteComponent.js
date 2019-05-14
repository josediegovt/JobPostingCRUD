import React from 'react';
import {Link} from 'react-router-dom';

class DeleteComponent extends React.Component{
    constructor(props){
        super(props);
    }
    clearField(){
        document.getElementById("todelete").value = "";

    }
    handleDelete(){
        const idNum = document.getElementById("todelete").value
        this.props.thedel(idNum);
        this.clearField()
        alert("Job Posting with id number " + idNum + " has been deleted")
    }
    render(){
        return(
            <div>
                <input className = "todelin" type = "text" id = "todelete" placeholder = "ID of Job Posting to delete"/>
                <Link to = "/index"> <input onClick = {this.handleDelete.bind(this)} type = "button" value = "Delete" className = "createbutton" /> </Link>
            </div>
        )
    }
}

export default DeleteComponent;