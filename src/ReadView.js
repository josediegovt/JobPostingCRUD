import React from 'react';
import ReadComponent from './ReadComponent';

class ReadView extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "readview text-light">
                <ReadComponent idnum = {this.props.displayed[this.props.index]["_id"]} 
                            title = {this.props.displayed[this.props.index]["title"]} 
                            city = {this.props.displayed[this.props.index]["city"]} 
                            emp = {this.props.displayed[this.props.index]["employer"]} 
                            reqs = {this.props.displayed[this.props.index]["requirements"]} 
                            task = {this.props.displayed[this.props.index]["tasks"]}
                />
            </div>
        )
    }
}

export default ReadView;