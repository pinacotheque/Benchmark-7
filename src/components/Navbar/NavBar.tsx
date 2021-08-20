import {Form, Button, Nav,  NavDropdown,  FormControl, Navbar} from 'react-bootstrap'

import { ChangeEvent, FormEvent, useState } from 'react'

const NavBar = () => {

    return(
        <Navbar bg="light" expand="lg" className="pl-5 pr-5 mb-5">
            <Navbar.Brand href="#home">MusicDiscovery</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Lists</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar