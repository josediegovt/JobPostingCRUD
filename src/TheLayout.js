import React from 'react';
import IndexView from './IndexView'
import CreateView from './CreateView'
import ReadView from './ReadView'
import UpdateView from './UpdateView'
import DeleteView from './DeleteView'
import NavBar from './NavBar'
import Data from './Data'

class TheLayout extends React.Component{
    constructor(props){
        super(props);
        this.data = Data;
        this.state = {
            // This is an  array [{ : }.{ : },{ : }];
            currentdisplay : this.data,
            currentkey : 0 ,
            currenttext : "IndexView"
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
        for(var obj of this.data){
            console.log(obj["_id"]);
            console.log(obj["title"])
            console.log(idnumber)
            if(obj["_id"] === idnumber){
                obj[fieldtochange] = newvalue;
            }
            else{
                continue;
            }
        }
        console.log(this.data)
        this.setState({ currentdisplay : this.data});
    }
    render(){
        return(
            <div> 
                <NavBar />
                <IndexView whenclick = {this.whenClicked.bind(this)} jobinfo = {this.state.currentdisplay}/>
                <ReadView displayed = {this.state.currentdisplay} index = {this.state.currentkey}/>
                <CreateView tocreate = {this.toCreate.bind(this)} />
                <UpdateView toupdate = {this.toUpdate.bind(this)} />
                <DeleteView />
            </div>
        )
    }

}

export default TheLayout;