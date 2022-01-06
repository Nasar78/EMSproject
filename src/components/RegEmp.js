import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

function RegEmp(props) {
    const navigateTOSignin=()=>{
        props.history.push('/')
    }
   
    return (
        <div className='container my-5 w-50'>
            <Card id='card1'>
                <Card.Body>
                    <Card.Title className='regemp fs-3 my-3 text-white'>Register your Acount</Card.Title>
                    <div className='container my-5 w-75'>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-2" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className='bg-light' type="text" placeholder="Enter your full name..." />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicUsername">
                                        <Form.Label className=''>Username</Form.Label>
                                        <Form.Control className='bg-light' type="text" placeholder="Enter your username..." />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control className='bg-light' type="email" placeholder="Enter your email address..." />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className='bg-light' type="password" placeholder="Enter your password..." />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control className='bg-light' type="password" placeholder="Enter your password again..." />
                                    </Form.Group>
                                    <Button className='btn mb-2 w-100' variant="success" type="submit">
                                        Sign up
                                    </Button>
                                </Form>
                                <Card.Text className='text-muted'>
                                    Already have an account? <Card.Link onClick={()=>{
                                        navigateTOSignin()
                                    }}>Sign in</Card.Link>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default RegEmp
