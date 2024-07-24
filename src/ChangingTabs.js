import {useState} from 'react';
import Register from '../../day2project/src/register.js';
import Login from '../../day2project/src/login.js';
import { trusted } from 'mongoose';
// function Tabsfunctionality(){
//     const [currentTab,setCurrentTab] = useState(true);
//     const swit = () =>{
//         setCurrentTab(false);
//     }
//     const swit1 = () =>{
//         setCurrentTab(true);
//     }
//     return (<div>
//         <div>
//             <button onClick={swit1}>Login</button>
//             <button onClick={swit}>Register</button><br/><br/>
//             {
//                 currentTab?
//                 <div>Login Message</div> : <div>Register Message</div>
//             }
//         </div>
//     </div>
//     )
// }
// export default Tabsfunctionality;
function Tabsfunctionality(){
    const [currentTab,setCurrentTab] = useState(true);
    const swit = () =>{
        setCurrentTab(true);
    }
    const swit1 = () =>{
        setCurrentTab(false);
    }
    return (<div>
        <div>
            <button style={{padding:8,marginLeft:500,fontSize:20,fontFamily:'cursive'}}onClick={swit}>Login</button>
            <button style={{padding:8,fontSize:20,fontFamily:'cursive',margin:30}}onClick={swit1}>Register</button><br/><br/>
            {
                currentTab?
                <div> <Login/></div>: <div><Register/></div>
            }
        </div>
    </div>
    )
}
export default Tabsfunctionality;