import React from 'react';
import IndexView from './IndexView'
import CreateView from './CreateView'
import ReadView from './ReadView'
import UpdateView from './UpdateView'
import DeleteView from './DeleteView'
import createHistory from 'history/createBrowserHistory'
import NavBar from './NavBar'
import Data from './Data'
import {Router, Route} from 'react-router-dom'

export const history = createHistory();

class TheLayout extends React.Component{
    constructor(props){
        super(props);
        this.data = Data;
        this.state = {
            currentdisplay : this.data,
            currentkey : 0 
        };
    }
    whenClicked(Index){
        this.setState({ currentkey : Index});
    }
    toCreate(newObj){
        this.data.push(newObj);
        this.setState({ currentdisplay : this.data});
    }
    toUpdate(idnumber, fieldtochange, newvalue){
        var newkey;
        for(var x in this.data){
            if(this.data[x]["_id"] === idnumber){
                this.data[x][fieldtochange] = newvalue;
                newkey = x;
            }
            else{
                continue;
            }
        }
        console.log(this.data)
        console.log(newkey)
        if(idnumber != ""){
            this.setState({currentdisplay : Data, currentkey : newkey})
        }
    }
    toDelete(idNum){
        for(var x in this.data){
            if(this.data[x]["_id"] == idNum){
                this.data.splice(x,1);
            }
        }
        this.setState({currentdisplay : this.data});
    }
    render(){
        return(
            <div> 
                <Router history = {history}>
                    <NavBar />
                    <Route path="/" exact render={(props) => (<IndexView whenclick = {this.whenClicked.bind(this)} index = {this.state.currentdisplay} {...props}/>)} />
                    <Route path="/index" exact render={(props) => (<IndexView whenclick = {this.whenClicked.bind(this)} index = {this.state.currentdisplay} {...props}/>)} />
                    <Route path="/read" render={(props) => (<ReadView displayed = {this.state.currentdisplay} index = {this.state.currentkey} {...props}/>)} />
                    <Route path="/create" render={(props) => (<CreateView tocreate = {this.toCreate.bind(this)} {...props}/>)} />
                    <Route path="/update" render={(props) => (<UpdateView toupdate = {this.toUpdate.bind(this)} {...props}/>)} />
                    <Route path="/delete" render={(props) => (<DeleteView todelete = {this.toDelete.bind(this)} />)} />
                </Router>
            </div>
        )
    }

}

export default TheLayout;