import React from 'react';

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
        // Need to verify input still
        var mod_id = (document.getElementById("updateview").value == "id") ? "_id" : document.getElementById("updateview").value;
        this.props.tocr(document.getElementById("theid").value, mod_id, document.getElementById("thechange").value);
        // Implement Outside
        this.clearFields();
    }
    // Two way binding needed for lower inputs
    render(){
        return(
            <div>
                <form>
                    <div className = "idnumber">
                        Identification Number:
                        <br />
                        <input type = "text" id = "theid"/>
                        <br />
                    </div>
                    <div className = "updateclass">
                        <input list="updatedl" id = "updateview" value = "Field to Update"/>
                        <datalist id="updatedl">   
                            <option value = "id"/>
                            <option value = "title"/>
                            <option value = "city"/>
                            <option value = "employer"/>
                            <option value = "requirements"/>
                            <option value = "tasks"/>
                        </datalist>
                        <input type = "text" id = "thechange" value = "New Value"/>
                        <br />
                    </div>
                    <input type = "button" className = "createbutton" onClick = {this.handleUpdate.bind(this)} value = "Update"/>
                </form>
            </div>
        )
    }
}

export default UpdateComponent;