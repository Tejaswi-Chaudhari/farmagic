import React from 'react'
import "./home.css"
import c_img1 from "../Media/c_img1.png"
import c_img2 from "../Media/c_img2.png"
import c_img3 from "../Media/c_img3.png"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={c_img1} alt="First slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={c_img2} alt="Second slide"/>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={c_img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}


export default Home
