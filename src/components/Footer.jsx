import React from 'react'
import "./footer.css"
import { Row, Col, Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='main-footer'>
          <Col>
            <p className='address-line-1'><b>Panchvati Eco and Agro Farms</b></p>
            <p className='address-line-2'>Vakadichi Vadi, Karand Village, Near Baravi Dam, <br></br>Badlapur-Murbad Road, Badlapur West, <br></br>Taluka - Ambernath , District - Thane<br></br>Pin Code: 421401<br></br>Phone Number: +91 99302 04444<br></br>Email: panecoagro@gmail.com</p>
          </Col>
          <Col></Col>
          <Col>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15071.2921745389!2d73.323745!3d19.2029298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2de48e344ba5de38!2sPanchvati%20Eco%20and%20Agro%20Farms!5e0!3m2!1sen!2sin!4v1668274513523!5m2!1sen!2sin" height="160"></iframe>
          </Col>
        </Row>
        <hr></hr>
        <p className="cc">Copyright 2022. All Rights Reserved.</p>
      </Container>
    </div>
  )
}

export default Footer
