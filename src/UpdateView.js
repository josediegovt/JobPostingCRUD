import React from 'react';
import UpdateComponent from './UpdateComponent';

class UpdateView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "updateview text-light">
                <UpdateComponent tocr = {this.props.toupdate}/>
            </div>
        )
    }
}

export default UpdateView;