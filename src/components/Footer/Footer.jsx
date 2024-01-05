import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"
import footer from '../footer.png'

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  {/* <ion-icon name="bag"></ion-icon> */}
                  <h1 className="logo">
        <img src={footer} alt="Tapmart Logo" />
      </h1>
              </div>
              <p class="tfc">Thanks for visiting to our Website</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>H-149, Sector 62 Rd, Noida, Uttar Pradesh 201301</li>
                <li>Email: hello@tapmo.in</li>
                <li>Phone:+91 9971420130</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
