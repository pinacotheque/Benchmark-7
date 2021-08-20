import {Form, Button, Nav, Navbar, Container} from 'react-bootstrap'
import "./Navbar.css"
import { ChangeEvent, FormEvent, useState } from 'react'

const NavBar = () => {

    return(
        

        <Navbar bg="light" expand="lg" className="ml-5 ">
            <Navbar.Brand href="#home">Nice Weather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Forecast</Nav.Link>
                <Nav.Link href="#link">Historical</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      
    )
}
export default NavBar