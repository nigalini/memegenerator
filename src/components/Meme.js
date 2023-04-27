import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const memeRef = useRef(null);

  const generateMeme = () => {
    html2canvas(memeRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div>
      <div ref={memeRef}>
        <img src="./sample.png" alt="meme" />
        <div>{topText}</div>
        <div>{bottomText}</div>
      </div>
      <input
        type="text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <button onClick={generateMeme}>Download Meme</button>
    </div>
  );
}

export default MemeGenerator;
