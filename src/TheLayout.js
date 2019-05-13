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
            if(obj["_id"] === idnumber){
                obj[fieldtochange] = newvalue;
            }
            else{
                continue;
            }
        }
        this.setState({currentdisplay : this.data})
    }
    toDelete(idNum){
        console.log(this.data)
        for(var x in this.data){
            if(this.data[x]["_id"] == idNum){
                this.data.splice(x,1);
            }
        }
        this.setState({currentdisplay : this.data});
        console.log(this.data)
    }
    render(){
        return(
            <div> 
                <NavBar />
                <IndexView whenclick = {this.whenClicked.bind(this)} jobinfo = {this.state.currentdisplay}/>
                <ReadView displayed = {this.state.currentdisplay} index = {this.state.currentkey}/>
                <CreateView tocreate = {this.toCreate.bind(this)} />
                <UpdateView toupdate = {this.toUpdate.bind(this)} />
                <DeleteView todelete = {this.toDelete.bind(this)} />
            </div>
        )
    }

}

export default TheLayout;