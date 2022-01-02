import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';


const CvMenu = () => {
    return(
        <Container>
        <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-space-between">
            <Container style={{display:'flex', justifyContent:'center'}}>
                <Nav>
                    <Nav.Link href="/Education&Work">Education / Work Experience</Nav.Link>
                    <Nav.Link href="/Projects">Projects</Nav.Link>
                    <Nav.Link href="/Stack">Stack</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link>
                    Email: xxx@gmail.com
                </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Container>
    )
}

export default CvMenu