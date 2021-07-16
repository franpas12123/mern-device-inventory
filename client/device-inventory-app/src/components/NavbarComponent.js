import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from '../assets/react-bootstrap-logo.svg'

export default class NavbarComponent extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Device Inventory
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/create">Add Device</Nav.Link>
                        <Nav.Link href="/devices">List Devices</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )

    }
}