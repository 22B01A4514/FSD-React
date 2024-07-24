import React, { useState } from 'react';

function Printing() {
    const [review, setReview] = useState("");
    const [reviewToDisplay, setDisplay] = useState("");

    const inputValueChange = (event) => {
        console.log(event.target.value);
        setReview(event.target.value);
    }

    const addReview = () => {
        console.log("Review Submitted");
        setDisplay(review);
    }

    return (
        <div>
            <input onChange={inputValueChange} type='text' placeholder='Give your review'></input>
            <button onClick={addReview}>Submit</button>
            <p>{reviewToDisplay}</p>
        </div>
    );
}

export default Printing;
