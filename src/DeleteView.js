import React from 'react';
import DeleteComponent from './DeleteComponent';

class DeleteView extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "delview">
                <DeleteComponent/>
            </div> 
        )
    }
}

export default DeleteView;