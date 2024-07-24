import Eight from "./Components.js";
import Printing from "./printingInput.js";
import Rev from "./reviews.js";
function Details(){
    return (
        <div style={{padding:10,border:"2px solid gray",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
            <div> <h1 style={{fontFamily:"sans-serif"}}>Item Name</h1></div>
            <div style={{display:"flex",flexFlow:"row wrap"}}>
                <div>
                <img width={300} height={300} src="burger1.jpg"></img>
                </div>
                <div>
                    <h2>Item Name</h2>
                    <p>Hamburger is a dish consisting of fillings - usually a patty of ground meat,typically beef-placed inside a sliced bun or bread roll.</p>
                    <Eight/>
                </div>
            </div>
            <hr/>
            <div>
                <h2>Product Specifications</h2>
                <p style={{fontFamily:"verdana"}}>Slices of raw onion,lettuce,bacon,mayonnaise,and other ingredients add flavor.</p>
            </div>
            <hr/>
               <h2>Your Review</h2>
                <Printing/>
            <hr/>
                <h2>Reviews</h2>
                <Rev/>
        </div>
    )
}
export default Details;