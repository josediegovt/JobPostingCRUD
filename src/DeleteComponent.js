import React from 'react';

class DeleteComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <input className = "todelin" type = "text" id = "todelete" value = "ID of Job Posting to delete"/>
                <input type = "button" value = "Delete" className = "createbutton" />
            </div>
        )
    }
}

export default DeleteComponent;