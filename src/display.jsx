import React from 'react'
import './display.css';

function Display({
  Data
}) {
  return (
    <div id='main'>

      <div className="card">
        <div className="img"></div>
        <div className="des">
          <div className="pname"><h1>Product Name</h1></div>
          <div className="desptn"><p>lorem ipsum</p></div>
          <div className="pkdate"><label>Packaged date</label></div>
          <div className="price"><label>Price</label></div>
        </div>
      </div>

      {<div className="card">
        <div className="img"></div>
        <div className="des">
          <div className="pname"><h1>Product Name</h1></div>
          <div className="desptn"><p>lorem ipsum</p></div>
          <div className="pkdate"><label>Packaged date</label></div>
          <div className="price"><label>Price</label></div>
        </div>
      </div>}
        
    </div>
  )
}

export default Display;