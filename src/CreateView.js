import React from 'react';
import CreateForm from "./CreateForm";

class CreateView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = "createview">
                <CreateForm toup = {this.props.tocreate} />
            </div>
        )
    }
}

export default CreateView;