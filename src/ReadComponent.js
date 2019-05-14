import React from 'react';
import ReadBoxes from './ReadBoxes';
import Data from './Data.js';

const ReadComponent = (props) => {
    return(
        <div className = "readcomp">
            <div className = "RCr1"> 
                <ReadBoxes title = "IDENTIFICATION" info = {props.idnum} ></ReadBoxes>
                <ReadBoxes title = "TITLE" info = {props.title}></ReadBoxes>
                <ReadBoxes title = "CITY" info = {props.city}></ReadBoxes>
                <ReadBoxes title = "EMPLOYER" info = {props.emp}> </ReadBoxes>
            </div>
            <div className = "RCr2">
                <div className = "reqsbox">
                    <h3 className = "readtitles"> REQUIREMENTS </h3>
                    <p>
                        {props.reqs.join().replace(";", "\n")}
                    </p>
                </div>
                <div className = "tasksbox">
                    <h3 className = "readtitles" > TASKS </h3>
                    <p>
                        {props.task}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReadComponent;