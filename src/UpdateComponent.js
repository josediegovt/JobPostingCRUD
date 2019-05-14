import React from 'react';
import {Link} from 'react-router-dom';

class UpdateComponent extends React.Component{
    constructor(props){
        super(props);
    }

    clearFields(){
        document.getElementById("theid").value = "";
        document.getElementById("updateview").value = "";
        document.getElementById("thechange").value = "";
    }

    handleUpdate(event){
        var mod_id = (document.getElementById("updateview").value == "id") ? "_id" : document.getElementById("updateview").value;
        this.props.tocr(document.getElementById("theid").value, mod_id, document.getElementById("thechange").value);
        alert( "The " + document.getElementById("updateview").value + " Field of Job Posting " + document.getElementById("theid").value + " has been updated" );
        this.clearFields();
    }
    render(){
        return(
            <div className = "completeupform">
                <form>
                    <div className = "idnumber">
                        <br />
                        <input type = "text" id = "theid" placeholder = "Job Posting Id"/>
                        <br />
                    </div>
                    <div className = "updateclass">
                        <input className = "fieldtoup" list="updatedl" id = "updateview" placeholder = "Field to Update"/>
                        <datalist id="updatedl">   
                        <option value = "id"/>
                            <option value = "title"/>
                            <option value = "city"/>
                            <option value = "employer"/>
                            <option value = "requirements"/>
                            <option value = "tasks"/>
                        </datalist>
                        <textarea id = "thechange" rows = "5" cols = "50" placeholder = "New Value"/>
                        <br />
                    </div>
                    <Link to = "/read"> <input type = "button" className = "createbutton" onClick = {this.handleUpdate.bind(this)} value = "Update"/> </Link>
                </form>
            </div>
        )
    }
}

export default UpdateComponent;