import React from 'react';
import Jobs from './Jobs';

class JobsBundle extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "jobsbundle">
                <Jobs whenc = {this.props.wc} infoNeeded = {this.props.theInfo}/>
            </div>
            
        )
    }
}

export default JobsBundle;