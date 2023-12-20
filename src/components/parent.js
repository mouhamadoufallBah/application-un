import React from "react";
import Enfant from "./enfant";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            etat: "Montage"
        };
        console.log(`Parent: La methode constructor💚`,this.state);       

    }

    static getDerivedStateFromProps(props, state){
        console.log("Parent : La methode getDerivedStateFromProps💚", state);
        return state
    }

    backAgain(){
        // alert("je reviens sur le parent")
        console.log("je reviens sur le parent💚")
    }

    render(){
        console.log("Parent: La methode Render💚",this.state);
        return(
            <>
                <Enfant/>
                <button onClick={this.backAgain}>Revenir</button>
            </>
        )
    }

    componentDidMount(){
        
        console.log("Parent: La methode componentDidMount", this.state);
        this.setState({etat: 'Changement de l\'etat'});
    }

    componentWillUnmount(){
        console.log("Parent 5 Parent: La methode componentWillUnmount💚  ", this.state);
    }

   
}

export default Parent;