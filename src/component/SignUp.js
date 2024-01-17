import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import { ThreeCircles } from 'react-loader-spinner';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [previewImage, setPreviewImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setAvatar(file);

            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };

    const handleSignUp = async () => {
        try {
            setIsLoading(true);
            // Upload the avatar file first
            let avatarUrl = null;

            if (avatar) {
                const avatarFormData = new FormData();
                avatarFormData.append('file', avatar);

                const avatarResponse = await fetch('https://api.escuelajs.co/api/v1/files/upload', {
                    method: 'POST',
                    body: avatarFormData,
                });

                if (avatarResponse.ok) {
                    const avatarData = await avatarResponse.json();
                    avatarUrl = avatarData.location;
                } else {
                    console.error('Failed to upload avatar');
                    toast.error('Failed to upload avatar. Please try again.');
                    return;
                }
            }

            // Register the user with the uploaded avatar URL
            const userData = {
                name,
                email,
                password,
                avatar: avatarUrl,
            };

            const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                toast.success('User registered successfully!');
                setIsLoading(false);
                // Optionally, you can redirect the user to the login page or handle it based on your app flow.
            } else {
                console.error('Failed to register user');
                toast.error('Failed to register user. Please try again.');
            }
        } catch (error) {
            console.error('Error during user registration:', error);
            toast.error('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <Container className="mt-5 mb-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={8} md={6}>
                    <Card>
                        <Card.Header className="bg-success text-white text-center">
                            <h2>Sign Up</h2>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-between">
                            <div className="img-side">
                                <label htmlFor="file-input">
                                    <div className="preview-container">
                                        <img
                                            id="preview-image"
                                            className="img-fluid img-thumbnail"
                                            style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
                                            src={
                                                previewImage ||
                                                'https://img.freepik.com/premium-psd/upload-folder-3d-icon_136651-1164.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais'
                                            }
                                            alt="User Preview"
                                        />

                                        <div className="upload-icon">
                                            <i className="fas fa-upload"></i>
                                        </div>
                                    </div>
                                    <input
                                        className="form-control d-none"
                                        type="file"
                                        name=""
                                        onChange={handleImageChange}
                                        id="file-input"
                                    />
                                </label>
                            </div>

                            <div className="form-side w-50 ms-3">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Form.Group>
                                    <NavLink type="button" className="btn btn-warning me-5" to="/login">
                                        Back to Login
                                    </NavLink>

                                    <Button variant="success" type="button" onClick={handleSignUp}>
                                        {isLoading ? (
                                            <ThreeCircles
                                                visible={true}
                                                height="25"
                                                width="50"
                                                color="#4fa94d"
                                                ariaLabel="three-circles-loading"
                                                wrapperClass=""
                                            />
                                        ) : (
                                            'Sign Up'
                                        )}
                                    </Button>
                                    
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
