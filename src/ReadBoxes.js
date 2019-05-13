import React from 'react';

class ReadBoxes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className = "readbox">
                <h3 className = "readtitles"> {this.props.title} </h3>
                <p>
                    {this.props.info}
                </p>
            </div>
        )
    }
}

export default ReadBoxes;