import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css"

function NavBar () {
    return (
        <Navbar fixed="top">
            <Container>
                <Navbar.Brand href="#">Survie Francais</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#course">Course</Nav.Link>
                    <Nav.Link href="#quiz">Quiz</Nav.Link>
                    <Nav.Link href="#register">Register</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
 
    );
}

export default NavBar;
