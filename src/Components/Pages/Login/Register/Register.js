import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);


    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/')
                handleUpdateUserProfile(name);
                handleEmailVerification();
                toast.success('Please Verify your email Address')
            })
            .then(error => {
                console.log(error);
                setError(error?.message);
            })
    }

    const handleUpdateUserProfile = (name) => {
        const profile = {
            displayName: name
        }

        return updateUserProfile(profile)
            .then()
            .then(error => console.log(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;