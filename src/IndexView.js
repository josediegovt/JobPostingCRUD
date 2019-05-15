import React from 'react';
import JobsBundle from './JobsBundle';

class IndexView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "indexview">
                <JobsBundle wc = {this.props.whenclick} theInfo = {this.props.index}/>
            </div>
        )
    }
}

export default IndexView;