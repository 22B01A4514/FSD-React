import Cart from "./Cart.js";
function Connections(){
const arr = ['a','b','c','d','e','f','g','h'];
return <div style={{display:"flex",flexFlow:"row wrap"}}>
                <Cart path={'boy-1.jpg'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'girl-1.jpg'} name={'Samantha'} description={'Resource Person'}/>
                <Cart path={'boy-2.png'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'girl-1.jpg'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'girl-2.jpg'} name={'Samantha'} description={'Resource Person'}/>
                <Cart path={'girl-3.jpg'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'boy-2.png'} name={'Scott Ayres'} description={'Resource Person'}/>
                <Cart path={'girl-1.jpg'} name={'Scott Ayres'} description={'Resource Person'}/>
         </div>   
}
export default Connections;