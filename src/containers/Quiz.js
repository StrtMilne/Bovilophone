import React, {useState} from "react";
import "../static/style.css"
import PopUp from "../components/PopUp";
import useSound from "use-sound";
import moo from "../assets/mucca1.wav"

const Quiz = function () {

    const [answer, setAnswer] = useState("")
    const [PlayMoo] = useSound(moo);

    const handleSelectTwo = () => {
        setAnswer("Two");
    }

    const handleSelectThree = () => {
        setAnswer("Three");
    }

    const handleSelectFour = () => {
        setAnswer("Four");
    }

    const handleSelectFive = () => {
        setAnswer("Five");
        PlayMoo();
    }

    const resetAnswer = () => {
        setAnswer("");
    }

    return(
        <div className="quiz">
            <h2 className="question">How many meats are there?</h2>
            <form>
                <input type="radio" name="answer" onClick={handleSelectTwo}/>
                <label for="Two">Two</label>
                {answer === "Two" ? <p>Sorry, that's not quite right! Remember, unlike salmon (leaping river pork) or venison (forest beef), chicken is a meat in its own right. Better luck next time!</p> : null}
                <input type="radio" name="answer" onClick={handleSelectThree}/>
                <label for="Three">Three</label>
                {answer === "Three" ? <p>Close! Why not have a delicious calming drink of fizzy beef wine and try again?</p> : null}
                <input type="radio" name="answer" onClick={handleSelectFour}/>
                <label for="Four">Four</label>
                {answer === "Four" ? <p className="correct">Correct! Beef, Chicken, Pork and Lamb are the four kinds of meat.</p> : null}
                <input type="radio" name="answer" onClick={handleSelectFive}/>
                <label for="Five">Five</label>
                {answer === "Five" ? <p>!!  Warning  !!</p> : null}
            </form>
            {answer==="Five" ? 
            <div className="popup"><PopUp resetAnswer={resetAnswer}/></div>: 
            null}
        </div>
    )
};

export default Quiz;