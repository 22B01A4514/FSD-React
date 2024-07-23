import React from "react";

class Three extends React.Component {
    name = "ReactJs";
    count = 0;
constructor(){
    super();
    console.log("Constructor is called");
}
componentDidMount(){
    
}
render(){
    return(
        <div>
            <h2>This is a class Component {this.name}</h2>
            <button type="button" class="btn btn-primary">Click here</button>
        </div>
    );
}
}
export default Three;