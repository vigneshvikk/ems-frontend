import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div >

    

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">

         <Link to={''} className='link'> <i class="fa-sharp fs-3 fa-solid fa-address-book " id='icons'></i> </Link>
          
          <strong className='p-2 fs-5 logo'>Employee Desk </strong></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header