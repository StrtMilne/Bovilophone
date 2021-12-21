import React, {useEffect, useState} from "react";
import Xylophone from "../components/Xylophone";
import "../static/style.css"

const MainPage = function () {

    const [word, setWord] = useState("rich");

    const changeWord = (passedWord) => {
        setWord(passedWord);
    }

    return(
        <div className="xylo">
            <Xylophone word={word} changeWord={changeWord}/>
        </div>
    )
}

export default MainPage;