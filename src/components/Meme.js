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
      <div ref={memeRef} style={{width:400}}>
        <img src="./sample.png" style={{width:400}} alt="meme" />
        <div style={{marginTop:-300,marginLeft:100,position:"absolute"}}>{topText}</div>
        <div style={{marginTop:-60,marginLeft:100,position:"absolute"}}>{bottomText}</div>
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
