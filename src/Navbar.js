import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
const Header = () => {
    return (
        <>
            <ReactBootStrap.Navbar bg="dark" expand={false}>
                <ReactBootStrap.Container fluid>
                    <ReactBootStrap.Navbar.Brand href="/">
                     <HomeIcon/>
                        </ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <ReactBootStrap.Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <ReactBootStrap.Offcanvas.Header closeButton>
                            <ReactBootStrap.Offcanvas.Title id="offcanvasNavbarLabel"></ReactBootStrap.Offcanvas.Title>
                        </ReactBootStrap.Offcanvas.Header>
                        <ReactBootStrap.Offcanvas.Body>
                            <ReactBootStrap.Nav  className="justify-content-end flex-grow-1 pe-3">
                                <ReactBootStrap.Nav.Link href="https://www.linkedin.com/in/shubham-kumar-mahato-3b07691a7/"><LinkedInIcon/></ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="https://www.facebook.com/profile.php?id=100010509456986"><FacebookIcon/></ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="https://www.instagram.com/_guddu___7/"><InstagramIcon/></ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="https://github.com/Shubham-Kumar-Mahato"><GitHubIcon/></ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="/Education">Education</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="/Project">Projects</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="/Hobby">Hobbys</ReactBootStrap.Nav.Link>
                          
                            </ReactBootStrap.Nav>


                        </ReactBootStrap.Offcanvas.Body>
                    </ReactBootStrap.Navbar.Offcanvas>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </>
    )
}

export default Header

