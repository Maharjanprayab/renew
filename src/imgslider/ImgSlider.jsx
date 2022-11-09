import React from 'react'
import { useState } from 'react'
import './imgSlider.css'
import image1 from './img/a.png'
import image2 from './img/b.png'
import image3 from './img/c.png'
import test from './img/test.jpg'

function ImgSlider() {

    const [ImgSlide, setImgSlide] = useState([image1, image2, image3 ]);
    const [Index, setIndex] = useState(0)

  return (
    <div>
    {/* {ImgSlide.map((val, i) => { */}
        <div className="imgSlideDiv"><img scr = {require('./img/test.jpg')} /></div>;
    {/* })} */}
    <button>previous</button>
    <button>next</button>
    </div>
  )
}

export default ImgSlider