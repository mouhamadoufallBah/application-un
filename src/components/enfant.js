import React from "react";

class Enfant extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            etat: "MontageEnfant"
        };
        console.log("Etape 1 Enfant: La methode constructor");

    }

    static getDerivedStateFromProps(props, state) {
        console.log("Etape 2 Enfant: La methode getDerivedStateFromProps", state);
        return state
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Etape 4 Enfant: La methode getSnapshotBeforeUpdate", prevState);
        return prevState
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Etape 5 Enfant: La methode getSnapshotBeforeUpdate", prevState);
        return prevState
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Etape 3 Enfant: La methode shouldComponentUpdate", nextState);
        return nextState
    }



    render() {
        console.log("Etape 4 Parent: La methode Render");
        return (
            <>
                <h1>Enfant</h1>
            </>
        )
    }

    componentDidMount(){

        console.log("Etape X Parent: La methode componentDidMount", this.state);
        this.setState({etat: 'Changement de l\'etat'});
    }






}

export default Enfant;