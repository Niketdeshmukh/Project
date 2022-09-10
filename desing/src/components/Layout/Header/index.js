import React from 'react';
import './header.scss';
import {
    Navbar,
    Container,
    Nav,
    Button,
    Row,
    Col
} from "react-bootstrap";
import Logo from "../../../assets/fanfury-logo.svg";
import { Link } from 'react-router-dom';
import searchIcon from "../../../assets/search_ic.svg";
import Rectangle from "../../../assets/images/Rectangle.png";

const Header = () => {
  return (
    <>
        <Navbar expand="lg  onwebsite_nav">
            <Container fluid>
                <Row className='w-100 justify-content-between'>
                    <Col sm={3} className="col-5">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="logo" className='img-fluid' />
                        </Link>
                    </Col>
                    <Col sm={9} className="col-5 text-end">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                            <Nav.Link className="active" href="/fanclub">Fan Club</Nav.Link>
                                <Nav.Link className="active" href="/">Packages</Nav.Link>
                                <Nav.Link href="/About">About Us</Nav.Link>
                                <Nav.Link className="search-link">
                                    <img src={searchIcon} alt="search_icon" />
                                </Nav.Link>
                                <Nav.Link>
                                    <Button className='btn-header'>Play Now</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>



        

        {/* mobile nav bar  responsive */}

        <Navbar expand="lg onmobile_nav">
            <Container fluid>
                <Row className='w-100 justify-content-between'>
                    
                        <Nav className="rectangle_back">
                            <img src={Rectangle} alt="logo"  />
                        </Nav>
                   
                    <Col sm={3} className="col-5">
                        <Link to="/" className="navbar-brand">
                            <img src={Logo} alt="logo" className='img-fluid' />
                        </Link>
                    </Col>
                    <Col sm={9} className="col-5 text-end">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                            <div className='nav_cover'>
                            <Nav.Link className="active" href="/fanclub">Fan Club</Nav.Link>
                                <Nav.Link className="active" href="/">Packages</Nav.Link>
                                <Nav.Link href="/About">About Us</Nav.Link>
                               
                                <Nav.Link>
                                    <Button className='btn-header'>Play Now</Button>
                                </Nav.Link>
                            </div>
                            </Nav>
                        </Navbar.Collapse>
                         <Nav.Link className="search-link">
                                    <img src={searchIcon} alt="search_icon" />
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </>
  )
}

export default Header;