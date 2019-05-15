import React from 'react';

class CreateForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {id : "Id",
                        title: "Title",
                        city : "City",
                        employer: "Employer",
                        reqs : "Requirements",
                        tasks : "Tasks"
                    }
    }
    clearFields(event){
        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].value = "";
        event.target[4].value = "";
        event.target[5].value = "";
    }
    onsub(event){
        event.preventDefault();
        var idnum = event.target[0].value;
        var title = event.target[1].value;
        var city = event.target[2].value;
        var emp = event.target[3].value;
        var req = event.target[4].value;
        var tasks = event.target[5].value;
        req = req.split("\n");
        tasks = tasks.split("\n");
        var creation = {"_id" : idnum, "title" : title , "city" : city, "employer" : emp, "requirements" : req, "tasks" : tasks};
        this.clearFields(event);
        alert("Job posting with id of " + idnum );
        this.props.toup(creation);
    }
    handleTheChange(event){
        const { target: { id, value } } = event
        this.setState({ [id]: value })
    }

    render(){
        return(
            <div className = "createform">
                <form onSubmit = {this.onsub.bind(this)}>
                    <div className = "CFr1">
                        <br/>
                        <input type = "text" id = "id" className = "inpclass" placeholder = "Job Posting ID" onChange = {this.handleTheChange.bind(this)}/>
                        <br />
                        <br />
                        <input type = "text" placeholder = "Title" id = "title" className = "inpclass" onChange = {this.handleTheChange.bind(this)}/>
                        <br />
                    </div>
                    <div className = "CFr2">
                        <br />
                        <input type = "text" placeholder = "City" id = "city" className = "inpclass" onChange = {this.handleTheChange.bind(this)}/>
                        <br />
                        <br />
                        <input type = "text" placeholder = "Employer" id = "employer" className = "inpclass" onChange = {this.handleTheChange.bind(this)}/>
                        <br/>
                    </div>
                    <br />
                    <div className = "CFr3">
                        <textarea id = "reqs" placeholder = "Requirements" rows = "5" cols = "80" onChange = {this.handleTheChange.bind(this)}/>
                        <br />
                        <br />
                        <textarea id = "tasks" placeholder = "Tasks" rows = "5" cols = "80" onChange = {this.handleTheChange.bind(this)}/>
                        <br />
                    </div>
                    <input type = "submit" value = "Submit" className = "createbutton"/>
                </form>
            </div>
        )
    }
}

export default CreateForm;