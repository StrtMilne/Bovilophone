import React from "react";
import useSound from "use-sound";
import beefLow from "../assets/Low/beef_low.wav";
import richLow from "../assets/Low/rich_low.wav";
import sausagesLow from "../assets/Low/sausages_low.wav";
import beefMid from "../assets/Mid/beef_mid.m4a";
import richMid from "../assets/Mid/rich_mid.m4a";
import sausagesMid from "../assets/Mid/sausages_mid.m4a";
import beefHigh from "../assets/High/beef_high.wav";
import richHigh from "../assets/High/rich_high.wav";
import sausagesHigh from "../assets/High/sausages_high.wav";
import "../static/style.css";

const Xylophone = ({word, changeWord}) => {

    const updateWord = () => {
        if (word === "rich"){
            changeWord("beef");
        } else if (word === "beef") {
            changeWord("sausages");
        } else {
            changeWord("rich");
        }
    };

    const [playRichLow] = useSound(richLow);
    const [playBeefLow] = useSound(beefLow);
    const [playSausagesLow] = useSound(sausagesLow);
    const [playRichMid] = useSound(richMid);
    const [playBeefMid] = useSound(beefMid);
    const [playSausagesMid] = useSound(sausagesMid);
    const [playRichHigh] = useSound(richHigh);
    const [playBeefHigh] = useSound(beefHigh);
    const [playSausagesHigh] = useSound(sausagesHigh);
    

    const playLow = function () {
        if (word === "rich"){
            playRichLow();
        } else if (word === "beef") {
            playBeefLow();
        } else {
            playSausagesLow();
        }
    }

    const playMid = function () {
        if (word === "rich"){
            playRichMid();
        } else if (word === "beef") {
            playBeefMid();
        } else {
            playSausagesMid();
        }
    }

    const playHigh = function () {
        if (word === "rich"){
            playRichHigh();
        } else if (word === "beef") {
            playBeefHigh();
        } else {
            playSausagesHigh();
        }
    }

    const handleClickLow = () => {
        playLow();
        updateWord();
    }

    const handleClickMid = () => {
        playMid();
        updateWord();
    }

    const handleClickHigh = () => {
        playHigh();
        updateWord();
    }

    return(
        <>
            <button className="xyloTile" onClick={handleClickLow}></button>
            <button className="xyloTile" onClick={handleClickMid}></button>
            <button className="xyloTile" onClick={handleClickHigh}></button>
        </>
    )
};

export default Xylophone;