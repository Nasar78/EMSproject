import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

function LogEmp(props) {
const navigateTORegister=()=>{
    props.history.push('/Regestieremployee')
}

const navigateTONavbar=()=>{
    props.history.push('/navbar')
}

    return (
        <div className='container my-5 w-50'>
            <Card className='card1' id='card1'>
                <Card.Body>
                    <Card.Title className='regemp fs-3 my-3 text-white'>Sign in to your account</Card.Title>
                    <div className='container my-5 w-75'>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-2" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control className='bg-light' type="text" placeholder="Enter your full name..." />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Card.Link className='float-end' href="#">Forgot password?</Card.Link>
                                        <Form.Control className='bg-light' type="text" placeholder="Enter password..." />
                                    </Form.Group>
                                    
                                    <Button className='btn mb-2 w-100 mt-3' variant="success" type="submit" onClick={()=>{
                                        navigateTONavbar()
                                    }}>
                                        Sign in
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='container my-5 w-75'>
                        <Card>
                            <Card.Body>
                                <Card.Text className='text-muted'>
                                    New user? <Card.Link  onClick={()=>{
                                        navigateTORegister()
                                    }}>Create an account</Card.Link>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default LogEmp
