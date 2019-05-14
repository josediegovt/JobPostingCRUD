import React from 'react';
import Jobs from './Jobs';

const JobsBundle = (props) => {
    return(
        <div className = "jobsbundle">
            <Jobs whenc = {props.wc} infoNeeded = {props.theInfo}/>
        </div>
        
    )
}

export default JobsBundle;