import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

function MemeGenerator() {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const memeRef = useRef(null);
  const [count,setCount]=useState(3155);

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
        <img src={`/pictures/HPIM${count}.JPG`} style={{width:400}} alt="meme" />
        <div style={{marginTop:-300,marginLeft:100,position:"absolute",color:"#fff",fontWeight:"bold",textShadow:"2px 2px 2px 2px #0000",fontSize:40}}>{topText}</div>
        <div style={{marginTop:-60,marginLeft:100,position:"absolute",color:"#fff",fontWeight:"bold",textShadow:"2px 2px 2px 2px #0000",fontSize:40}}>{bottomText}</div>
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
      <button onClick={()=>setCount(count+1)}>Next Image</button>
      
      <button onClick={generateMeme}>Download Meme</button>
    </div>
  );
}

export default MemeGenerator;
