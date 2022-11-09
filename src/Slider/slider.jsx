import React from "react";
import { useState } from "react";
import "./slider.css";

function Slider() {
  const [Slide, useSlide] = useState([
    {
      name: "Prayab",
    },
    {
      name: "Maharjan",
    },
    {
      name: "Newar",
    },
  ]);
  const [Index, setIndex] = useState(0);

  const NEXT = () => {
    if(Index===Slide.length-1){
setIndex(0)
    }else{
        setIndex((prev) => {
         return  prev + 1;
        });
    }
  };

  const PREV = () => {
    if(Index===0){
        setIndex(Slide.length-1)
    }else{
        setIndex((prev) => {
            return prev - 1;
        });
    }
  }
// useEffect(() => {
//  const interval=  setInterval(() => {
//     NEXT();
//   }, 2000);

//   return () => {
//     clearInterval(interval)
//   }
// }, [Index])

  return (
    <div>
      {Slide.map((val, i) => {
        if (i === Index) {
          return <div className="slideDiv">{val.name}</div>;
        }
      })}
      <button onClick={() => PREV()}>previous</button>
      <button onClick={() => NEXT()}>next</button>
    </div>
  );
}

export default Slider;
