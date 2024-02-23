import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlinePolicy } from "react-icons/md";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import BandCarousel from '../BandCarousel/BandCarousel';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'



const RightSideNav = () => {

    const navigate = useNavigate()

    const { providerLogIn } = useContext(AuthContext)


    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSighIn = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .then(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSighIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <h3 className='mt-3 mb-2'>Find Us On </h3>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-dark"><FaFacebook className='me-3'></FaFacebook> Facebook</Button>
                <Button className='mb-2' variant="outline-dark"><FaYoutube className='me-3'></FaYoutube> YouTube</Button>
                <Button className='mb-2' variant="outline-dark"><FaTwitter className='me-3'></FaTwitter>Twitter</Button>
                <Button className='mb-2' variant="outline-dark"><FaWhatsapp className='me-3'></FaWhatsapp> What's Up</Button>
                <Button className='mb-2' variant="outline-dark"><FaInstagram className='me-3'></FaInstagram> Instagram</Button>
                <Button className='mb-2' variant="outline-dark"><MdOutlineIndeterminateCheckBox className='me-3' /> Trams & Condition About Our News</Button>
                <Button className='mb-2' variant="outline-dark"><MdOutlinePolicy className='me-3' />Our Private Policy</Button>
            </ButtonGroup>
            <div>
                <BandCarousel></BandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;