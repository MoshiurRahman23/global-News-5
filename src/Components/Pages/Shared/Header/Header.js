import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, Logout } = useContext(AuthContext);

    const handleLogOut = () => {
        Logout()
            .then()
            .then(error => console.error(error))
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary mb-3">
                <Container>
                    <Navbar.Brand><Link to='/'>Global News</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='me-3'>{user?.displayName}</span>
                                            <Button onClick={handleLogOut} variant="outline-secondary">Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>
                                                <Button className='me-3' variant="outline-secondary">Log In</Button>
                                            </Link>
                                            <Link to='/register'><Button variant="outline-secondary">Register</Button></Link>
                                        </>
                                }
                            </>
                            <Link to='/profile'>
                                {
                                    user?.photoURL ?
                                        <Image className='me-3' style={{ height: '30px' }} src={user?.photoURL} roundedCircle />
                                        :
                                        <FaUser></FaUser>
                                }

                            </Link>

                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;