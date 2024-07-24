import React,{useRef,useState,useEffect} from 'react';
function Login()
{
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [loginMessage,setMessage] = useState('');
    const formSubmit=(event)=>{
        event.preventDefault();
        // console.log("form Submitted");
        // console.log(firstRef.current.value);
        // console.log(secondRef.current.value);
        // firstRef.current.value="";
        // secondRef.current.value="";

    if(firstRef.current.value!='' && secondRef.current.value!='' ){
            if(firstRef.current.value === secondRef.current.value){
                setMessage("Correct");
            }
            else {
                setMessage("Incorrect");
            }
    }
}
useEffect(()=>{
    firstRef.current.focus();
})
    return (<div style={{margin:"auto",marginTop:20,borderRadius:10,backgroundColor:"#BCF1F8",border:"2px solid gray",width:450,padding:10,display:"flex",flexDirection:"column",padding:30}}>
        <h1 style={{color:"white",textShadow:"1px 1px 8px #2E236C"}}>Login</h1>
        <p>Provide your credentials</p><br/>
        <form onSubmit={formSubmit} style={{fontSize:25,display:"flex",flexDirection : "column",justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontSize:20,fontFamily:'cursive'}}>Enter Username : &nbsp;</label><br/>
                <input style={{fontSize:18,fontFamily:'cursive',}}type="text" placeholder="Enter Username" ref={firstRef}></input>
            </div><br/><br/>
            <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontFamily:"cursive",fontSize:20}}>Enter Password : &nbsp;</label><br/>
                <input style={{fontSize:18,fontFamily:"revert"}}type="password" placeholder='Enter Password' ref={secondRef}></input>
            </div><br/><br/>
            <button style={{fontFamily:"cursive",backgroundColor:"black",color:"white",padding:2,borderRadius:10,fontSize:20,width:100,float:"right"}}type="submit">Login</button>
            <p>{loginMessage}</p>
        </form>

    </div>
    )
}
export default Login;