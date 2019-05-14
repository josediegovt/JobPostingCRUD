import React from 'react';

const ReadBoxes = (props) => {
        return(
            <div className = "readbox">
                <h3 className = "readtitles"> {props.title} </h3>
                <p>
                    {props.info}
                </p>
            </div>
        )
}

export default ReadBoxes;