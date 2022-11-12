import React from 'react'
import "./home.css"
import c_img1 from "../Media/c_img1.png"
import c_img2 from "../Media/c_img2.png"
import c_img3 from "../Media/c_img3.png"
import farmhouse from "../Media/farmhouse.jpeg"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import {Container} from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div classname="homepage">
      <div className='carousel'>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={c_img1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={c_img2} alt="Second slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={c_img3} alt="Third slide" />
          </Carousel.Item>

        </Carousel>
      </div>

<br></br>
      <Container class="farmhouse">
        <div class="row">
          <div class="col-sm-6">
            <div class="card details-img">
              <div class="card-body">
                <img className="w-100 farmhouse-img" src={farmhouse} alt="House photo" />
              </div>
            </div>
          </div>
          <div class="col-sm-6">

            <div className="card farminfo">
              <div className="card-body farmtext">
                <h5 class="card-title">The Farmhouse</h5>
                <br></br>
                <p class="card-text1">We offer a warm welcome to all the guests that come to this farmhouse which is cocooned amidst greenery, wide-open spaces, and breathtaking woodland situated near Barvi dam.</p>
                <p class="card-text2">Panchvati is a beautiful Kokan style farmhouse, built using Chira stone where you can experience moments of pure bliss and relaxation.</p>
                <p class="card-text3">The natural landscape and the friendliness of the staff make this place an ideal venue for celebrations and holidays.</p>
              </div>
            </div>
          </div>
        </div>
       </Container>
     </div>
  );
}

export default Home
