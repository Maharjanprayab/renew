import React, { useState } from 'react';
import FormikForm from './form';
import Display from './display';
import './App.css';
import TestForm from './testForm';
import Slider from './Slider/slider';
import ImgSlider from './imgslider/ImgSlider';

function App() {

  const [Data, setData] = useState([]);
  const [Image, setImage] = useState([]);
  const [Discription, setDiscription] = useState("");
  const [ProductName, setProductName] = useState("");
  const [PkgDate, setPkgDate] = useState("01/01/2020");
  const [Price, setPrice] = useState(0);


  return (
    <section>

      <div id='divide'>

        {/* <div id='form'>

        <FormikForm/>

        </div>

        <div id='display'>
          
        <Display
          Image = {Image}
          setImage = {setImage}
          Discription = {Discription}
          setDiscription = {setDiscription}
          ProductName = {ProductName}
          setProductName = {setProductName}
          PkgDate = {PkgDate}
          setPkgDate = {setPkgDate}
          Price = {Price}
          setPrice = {setPrice}
        />

        </div> */}

        <TestForm />

        <Slider />

        <ImgSlider />

      </div>
      
    </section>
  )
}

export default App;