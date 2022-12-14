import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from "react-webcam";
//import ".././App.css";
import { drawHand } from "./Utilities";
// import * as fp from "fingerpose";

//importing custom gesture
// import {one} from "./One.jsx";

//importing emojis
// import {thumbs_up} from "./thumbs_up.png";
// import {victory} from "./victory.png";

function HandPose() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const emojis = {thumbs_up:"thunmbs up", victory:"victory"};

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      if(hand.length > 0){
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 8);
        // console.log(gesture.gestures);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0){
          const confidence = gesture.gestures.map((prediction) => prediction.score);
          const maxConfidence = confidence.indexOf(Math.max.apply(null, confidence));
          setEmoji(gesture.gestures[maxConfidence].name);
          // var emoji = gesture.gestures[maxConfidence].name;
          console.log("index: ", maxConfidence);
          // console.log("confidence: ", confidence);
          console.log(emoji);
        }
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
    return emoji;
  };

  runHandpose();
  // tf.getBackend();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "160px",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "160px",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        {emoji !== null ? <h1 style={{
          zindex: 20,
          position: "absolute",
          left: 360,
          bottom: 500,
          top: 120,
          right: 0,
          testAlign: "center",
          color: "black",
          height: 100,
          width: 100
          }} > {emoji} </h1> : ""}

      </header>
    </div>
  );
}

export default HandPose;