import React from 'react';
import ReadBoxes from './ReadBoxes';

class ReadComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "readcomp">
                <div className = "RCr1"> 
                    <ReadBoxes title = "IDENTIFICATION" info = {this.props.idnum} ></ReadBoxes>
                    <ReadBoxes title = "TITLE" info = {this.props.title}></ReadBoxes>
                    <ReadBoxes title = "CITY" info = {this.props.city}></ReadBoxes>
                    <ReadBoxes title = "EMPLOYER" info = {this.props.emp}> </ReadBoxes>
                </div>
                <div className = "RCr2">
                    <div className = "reqsbox">
                        <h3 className = "readtitles"> REQUIREMENTS </h3>
                        <p>
                            {this.props.reqs}
                        </p>
                    </div>
                    <div className = "tasksbox">
                        <h3 className = "readtitles" > TASKS </h3>
                        <p>
                            {this.props.task}
                        </p>
                    </div>
                </div>
            </div>
        )
}
}

export default ReadComponent;