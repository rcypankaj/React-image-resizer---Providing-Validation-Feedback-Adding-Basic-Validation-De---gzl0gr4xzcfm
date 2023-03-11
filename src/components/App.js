import React, { useState } from "react";
import "../styles/App.css";
import img from "../image.jpeg";

const App = () => {
  const [height, setHeight] = useState(320);
  const [width, setWidth] = useState(320);

  const heightChangeHandler = (event) => {
    setHeight(event.target.value);
    // console.log(event.target.value);
  };

  const widthChangeHandler = (event) => {
    setWidth(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div id="main">
      <div>
        <label htmlFor="height-slider">
          Height-Slider
          <input
            type="range"
            id="height-slider"
            min="100"
            max="800"
            onChange={heightChangeHandler}
          />
        </label>
      </div>
      <div>
        <label htmlFor="width-slider">
          Width-Slider
          <input
            type="range"
            id="width-slider"
            min="100"
            max="800"
            onChange={widthChangeHandler}
          />
        </label>
      </div>
      <div>
        <label htmlFor="resizable-img">
          <img
            src={img}
            alt="image"
            id="resizable-img"
            width={`${width}px`}
            height={`${height}px`}
          />
        </label>
      </div>
    </div>
  );
};

export default App;
