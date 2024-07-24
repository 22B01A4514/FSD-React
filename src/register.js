import React,{useRef,useState,useEffect} from 'react';
function Register()
{
    const IdRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const [id,setid] = useState('');
    const [mail,setmail] = useState('');
    const [pass,setpass] = useState('');
    const [branchValue,setBranch] = useState('');
    const [gender,setGender] = useState('');
    const getBranch = (event) =>{
        console.log(branchValue);
        setBranch(event.target.value);
        console.log.apply(branchValue);
    }
    const formSubmit=(event)=>{
        // console.log(IdRef.current.value);
        // console.log(passRef.current.value);
        // console.log(emailRef.current.value);
        event.preventDefault();
        console.log("Data");
        console.log(id);
        console.log(mail);
        console.log(pass);
        console.log(branchValue);
        console.log(gender);
    }
    const getGender = (event)=>{
        console.log(gender);
        setGender(event.target.value);
    }
    const getid = (event) =>{
        setid(event.target.value);
        console.log(event.target.value);
    }
    const getpass = (event) =>{
        setpass(event.target.value);
        console.log(event.target.value);
    }
    const getmail = (event) =>{
        setmail(event.target.value);
        console.log(event.target.value);
    }
    return (<div style={{margin:"auto",marginTop:2,borderRadius:10,backgroundColor:"#BCF1F8",border:"2px solid gray",width:450,display:"flex",flexDirection:"column",padding:12}}>
        <h1 style={{color:"white",textShadow:"1px 1px 8px #2E236C"}}>Register</h1>
        <p>Provide your credentials</p><br/>
        <form onSubmit={formSubmit} style={{fontSize:25,display:"flex",flexDirection : "column",justifyContent:"center"}}>
           
        <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontSize:17,fontFamily:'cursive'}}><strong>CollegeID</strong> &nbsp;</label>
                <input onChange={getid} style={{margin:5,border:"1px solid gray" ,borderRadius:5,fontSize:18,fontFamily:'cursive',}}type="text" placeholder="College ID" ref={IdRef}></input>
            </div><br/>

            <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontSize:17,fontFamily:'cursive'}}><strong>Password</strong> &nbsp;</label>
                <input onChange={getpass} style={{margin:5,border:"1px solid gray" ,borderRadius:5,fontSize:18,fontFamily:'cursive',}}type="password" placeholder="Enter password" ref={passRef}></input>
            </div><br/>

            <div style={{display:"flex",flexDirection : "column"}}>
                <label style={{fontFamily:"cursive",fontSize:17}}><strong>Email</strong>  &nbsp;</label>
                <input onChange={getmail} style={{margin:5,border:"1px solid gray" ,borderRadius:5,fontSize:18,fontFamily:"revert"}}type="email" placeholder='Enter Email' ref={emailRef}></input>
            </div><br/>

            <div>
                <label style={{fontFamily:"cursive",fontSize:17}}><strong>Branch</strong> &nbsp;</label>
                <select style={{margin:5,border:"1px solid gray" ,borderRadius:5,padding:5,fontFamily:"cursive",fontSize:15}} value={branchValue} onChange={getBranch}>
                    <option value="" >Branch</option>
                    <option value="AI">AI</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="MECH">MECH</option>
                </select>
            </div><br/>
            <div>
                <label style={{fontFamily:"cursive",fontSize:17}}><strong>Year</strong> &nbsp;</label>
                <select style={{margin:5,border:"1px solid gray" ,borderRadius:5,padding:5,fontFamily:"cursive",fontSize:15}}>
                    <option value=""  >Choose</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                </select>
            </div><br/>

            <div style={{fontFamily:"cursive",fontSize:17}}>
                <label><strong>Gender</strong></label><br/>
                <input type='radio' name='gender' value="Female" onChange={getGender}></input>
                <label value="Female">female</label>
                <input type='radio' name='gender' value="Male" onChange={getGender}></input>
                <label value ="Male">Male</label>
                <input type='radio' name='gender' value="Other" onChange={getGender}></input>
                <label value="Others">Others</label>
            </div><br/>
            <button onClick={formSubmit}style={{fontFamily:"cursive",backgroundColor:"black",color:"white",padding:2,borderRadius:10,fontSize:20,width:100,float:"right"}}type="submit">Login</button>
        </form>
        <div style={{padding:1}}>
            <p>{id}</p>
            <p>{mail}</p>
            <p>{pass}</p>
            <p>{branchValue}</p>
            <p>{gender}</p>
        </div>
    </div>
    )
}
export default Register;