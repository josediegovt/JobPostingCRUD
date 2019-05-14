import React from 'react';
import {Link} from 'react-router-dom'

class Jobs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentelement : ""
        }
    }
    onTheClick(key, event, props){
        this.setState({currentelement : key});
        this.props.whenc(key);
    }
    render(){
        return(
            <div className = "jobsbox">
                <table>
                    <tr>
                        <th> TITLE </th>
                        <th> LOCATION </th>
                        <th> EMPLOYER </th> 
                    </tr>
                    {
                        this.props.infoNeeded.map((obs, x) => {
                            return(
                                <tr className = "jobsboxrows"> 
                                    <Link to = "/read" className = "linkcolor"> <td onClick = {this.onTheClick.bind(this, x)} id = {x} > {obs["title"]} </td> </Link>
                                    <td> {obs["city"]} </td> 
                                    <td> {obs["employer"]} </td> 
                                </tr>
                            )
                        })

                    }
                </table>
            </div>
        )
    }


}

export default Jobs;