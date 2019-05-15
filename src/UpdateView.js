import React from 'react';
import UpdateComponent from './UpdateComponent';

const UpdateView = (props) => {
    return(
        <div className = "updateview">
            <UpdateComponent tocr = {props.toupdate}/>
        </div>
    )
}

export default UpdateView;