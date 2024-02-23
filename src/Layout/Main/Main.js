import React from 'react';
import Header from '../../Components/Pages/Shared/Header/Header';
import Footer from '../../Components/Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../../Components/Pages/Shared/LeftSideNav/LeftSideNav';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../../Components/Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;