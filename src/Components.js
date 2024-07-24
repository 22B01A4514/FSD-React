import React from "react";
class Eight extends React.Component {
    constructor(){
        super();
        this.state = { number : 1 ,number1 : 50,cost:50};
        console.log("Constructor is called!");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1);
    }
    componentWillUnmount(){
        console.log("Unmounted");
    }
    componentDidUpdate(){
        console.log("Updated!!!");
    }
    funcBtnClick = () =>{
        console.log("Button Clicked");
        console.log(this.count + 1);
        this.setState({number : this.state.number + 1});
        this.setState({number1 : (this.state.number + 1)*this.state.cost});
    }
    funcBtnClick1 = () =>{
        console.log("Button Clicked");
        console.log(this.count + 1);
        if(this.state.number > 1){
        this.setState({number : this.state.number - 1});
        this.setState({number1 : (this.state.number - 1)*this.state.cost});
        }
    }
    render() {
        return (
            <div>
            <h2>Total Cost :- {this.state.number1}$</h2>
            <div style={{display:"flex",flexFlow:"row"}}>
                <button style={{margin:20,padding:17}} className ="btn btn-primary" onClick = {this.funcBtnClick}>+</button>
                <h1>{this.count} {this.state.number}</h1>
                <button style={{margin:20,padding:17}} className="btn btn-primary" onClick = {this.funcBtnClick1}>-</button>
            </div>
            </div>
        );
    }
}
export default Eight;