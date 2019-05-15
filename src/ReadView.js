import React from 'react';
import ReadComponent from './ReadComponent';

const ReadView = (props) => {
    return(
        <div className = "readview">
            <ReadComponent idnum = {props.displayed[props.index]["_id"]} 
                        title = {props.displayed[props.index]["title"]} 
                        city = {props.displayed[props.index]["city"]} 
                        emp = {props.displayed[props.index]["employer"]} 
                        reqs = {props.displayed[props.index]["requirements"]} 
                        task = {props.displayed[props.index]["tasks"]}
            />
        </div>
    )
}

export default ReadView;