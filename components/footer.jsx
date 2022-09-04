import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <Navbar bg="dark" variant="dark" className="p-0">
        <Nav className="d-flex align-items-center mr-auto text-center w-100">
          <Nav.Link href="https://www.facebook.com/oana.bleich" target="_blank"><FontAwesomeIcon icon={faFacebook} size="1x"/></Nav.Link>
          <div style={{textAlign: 'center', flex: 1, opacity: 0.6}}>Copyright © 2022 oanabologbleich.com Timișoara</div>
        </Nav>
      </Navbar>
    )
}

export default Footer;