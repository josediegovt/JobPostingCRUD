import React from 'react';
import DeleteComponent from './DeleteComponent';

const DeleteView = (props) => {
    return(
        <div className = "delview">
            <DeleteComponent thedel = {props.todelete}/>
        </div> 
    )
};

export default DeleteView;