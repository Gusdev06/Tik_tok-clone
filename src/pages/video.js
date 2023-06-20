import React, { useRef, useState } from "react";
import VideoFooter from "./componentes/footer/VideoFooter"
import VideoSideBar from "./componentes/sidebar/VideoSideBar";

import "./video.scss";

function Video({likes, messages, shares, name, description, music, url}) {
    const videoRef = useRef(null);
    const [play, setPlay] = useState(false); // função que muda o valor de uma variavel, de play para pause

    function handdleStart() {
        if (play) {
        // para dar play no video
        videoRef.current.pause();
        setPlay(false);
        } else {
        // para dar pause no video
        videoRef.current.play();
        setPlay(true);
        }
    }

    return (
        <div className="video">
        <video
            ref={videoRef}
            onClick={handdleStart}
            loop
            src={url}
            className="video__player"
        ></video>
        <VideoSideBar
            likes={likes}
            messages={messages}
            shares={shares}
        />
        <VideoFooter
            name={name}
            description={description}
            music={music}
        />
        </div>
    );
}

export default Video;
