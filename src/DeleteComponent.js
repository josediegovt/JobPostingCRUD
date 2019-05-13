import React from 'react';

class DeleteComponent extends React.Component{
    constructor(props){
        super(props);
    }
    handleDelete(){
        var idNum = document.getElementById("todelete").value
        console.log(idNum)
        this.props.thedel(idNum);
    }
    render(){
        return(
            <div>
                <input className = "todelin" type = "text" id = "todelete" placeholder = "ID of Job Posting to delete"/>
                <input onClick = {this.handleDelete.bind(this)} type = "button" value = "Delete" className = "createbutton" />
            </div>
        )
    }
}

export default DeleteComponent;