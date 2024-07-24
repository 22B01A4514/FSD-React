function Cart({path,name,description}){
    return <div style={{padding:50,backgroundColor:"white",margin:7,borderRadius:10,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <center>
                <img src={path} width={100} height={100} style={{borderRadius:200}}></img>
                <h1 >{name} <span style={{fontWeight:"normal ",fontSize:15}}>.2nd</span></h1>
                <p>{description}</p>
        </center>
                  
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img src='girl-1.jpg' width={30} height={30} style={{borderRadius:200}}></img>
                    <h4><pre> 23 Connections</pre></h4>
                </div>
                <hr/>
        <center><button style={{color:"blue",backgroundColor:"white",borderColor:"white",border:"none"}}><strong>Connect</strong></button></center>
    </div>
}
export default Cart;
