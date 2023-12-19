import React from "react";
import Enfant from "./enfant";

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            etat: "Montage"
        };
        console.log("Etape 1 Parent: La methode constructor");       

    }

    static getDerivedStateFromProps(props, state){
        console.log("Etape 2 Parent: La methode getDerivedStateFromProps", state);
        return state
    }

    render(){
        console.log("Etape 3 Parent: La methode Render");
        return(
            <>
                <Enfant/>
            </>
        )
    }

    // componentDidMount(){
        
    //     console.log("Etape 4 Parent: La methode componentDidMount", this.state);
    //     this.setState({etat: 'Changement de l\'etat'});
    // }

   
}

export default Parent;