import React from 'react';

class Jobs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentelement : ""
        }
    }
    onTheClick(key, event){
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
                        <th> AUTHOR </th> 
                    </tr>
                    {
                        this.props.infoNeeded.map((obs, x) => {
                            return(
                                <tr className = "jobsboxrows"> 
                                    <td onClick = {this.onTheClick.bind(this, x)} id = {x} > {obs["title"]} </td>
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