import React from "react";

const PopUp = function ({resetAnswer}) {

    const handleClose = () => {
        resetAnswer();
    }
    return(
        <div>
            <button className="close" onClick={handleClose}>X</button>
            <h1> !!! THERE ARE ONLY 4 MEATS !!! </h1>
            <h3>A member of the BFU is on their way to your location.</h3>
            <p>Do not attempt to evade. Cooperate and you will not be damaged.</p>
            <h1> !!! THERE ARE ONLY 4 MEATS !!! </h1>
        </div>
    )
};

export default PopUp;