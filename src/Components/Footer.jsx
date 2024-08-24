import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const Footer = () => {
  return (
    <>
      <footer className='footer d-flex align-items-center'>
        <Container>
          <Row className='align-items-center w-100'>
            <Col sm={6} className='text-center text-sm-start'>
              <img src={logo} alt='logo'/>
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
              <div className='social-icon'>
                <a href='https://www.linkedin.com/in/ankushrehal/'  target='_blank' rel='noopener noreferrer'><img src={navIcon1} alt="social icon 1"/></a>
                <a href='https://www.facebook.com/ankush.rehal.1/' target='_blank' rel='noopener noreferrer'><img src={navIcon2} alt="social icon 2"/></a>
                <a href='https://www.instagram.com/ankush_rehal_18/' target='_blank' rel='noopener noreferrer'><img src={navIcon3} alt="social icon 3"/></a>
              </div>
              
            </Col>
          </Row>
          <center>
              <p>Made with ❤</p>
              </center>
        </Container>

      </footer>
    </>
  );
}

export default Footer;
