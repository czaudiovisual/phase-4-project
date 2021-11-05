import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from 'react-bootstrap'

function NaviBar() {
    return (
        <div className="nav-links">
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/claims">Claims Manager</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/claims">Claims</Nav.Link>
                        <Nav.Link href="/claims/new">Add Claim</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NaviBar;