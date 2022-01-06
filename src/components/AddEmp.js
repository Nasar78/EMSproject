import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import axios from 'axios';

function AddEmployee(props) {
    const initialValues = {
        empName: '',
        empJob: '',
        empSalary: '',
        empAge: ''
    }
    const [formValues, setformValues] = useState(initialValues)
    const [formErrors, setformErrors] = useState({})
    const [isSubmit, setisSubmit] = useState(false)

   /*  const [employee, setemployee] = useState({
        empName: '',
        empJob: '',
        empSalary: '',
        empAge: ''
    }) */

   /*  const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value })
        // console.log(formValues);
    };
 */
    const clearField = () => {
        setformValues({
            empName: '',
            empJob: '',
            empSalary: '',
            empAge: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues));
        setisSubmit(true);
        clearField();

    }

    useEffect(() => {
        // if (Object.keys(formErrors).length === 0 && isSubmit) {
        // }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        if (!values.empName) {
            errors.empName = 'Please enter fullname!!!';
        } else if (!values.empName.match(/^[a-zA-Z]+$/)) {
            errors.empName = 'Name must be in alphabetic character!!!';
        }
        if (!values.empJob) {
            errors.empJob = 'Please enter designation!!!';
        } else if (!values.empJob.match(/^[a-zA-Z]+$/)) {
            errors.empJob = 'Designation must be in alphabetic character!!!';
        }
        if (!values.empSalary) {
            errors.empSalary = 'Please enter salary!!!';
        } else if (values.empSalary < 0) {
            errors.empSalary = 'Enter valid salary!!!';
        }
        if (!values.empAge) {
            errors.empAge = 'Please enter age!!!';
        } else if (values.empAge < 18) {
            errors.empAge = 'Age must be greater than 18!!!';
        } else if (values.empAge > 60) {
            errors.empAge = 'Age must be less than 60!!!';
        }
        return errors;
    }
/* axios part */
    const setformValuesData = (event) => {
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        console.log(formValues);
        const employeeCopy = { ...formValues }
        employeeCopy[event.target.name] = event.target.value
        setformValues(employeeCopy)
    }
    const saveEmpData = async () => {
        try {
            const res = await axios.post('http://192.168.43.113:8080/addEmployee',
            formValues)
            console.log(res);
            if (res.data.error) {
                alert(res.data.message)
            } else {
                // props.history.push('/products')
                alert("successfully added employee")
            }
        } catch (err) {
            alert(err.message)
        }
    }


    return (
        <>
            <div className='container my-5 w-25'>
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div><Alert variant="success">
                    <Alert.Heading>Employee Added Succesfully...!!!</Alert.Heading>
                </Alert></div>
                ) : (
                    <div></div>
                )}
                <Card>
                    <Card.Header className='fs-4 fw-bold'>Add Employee</Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-2" controlId="formBasicempName">
                                <Form.Label>Full Name</Form.Label>
                                {/* <Form.Control type="text" className='bg-light' name='empName' placeholder="Enter fullname..." value={formValues.empName} onChange={handleChange} /> */}
                                <Form.Control type="text" className='bg-light' name='empName' placeholder="Enter fullname..." value={formValues.empName} onChange={(event) => {
                                setformValuesData(event)
                            }} />
                            </Form.Group>
                            <p className='text-danger'>{formErrors.empName}</p>
                            <Form.Group className="mb-2" controlId="formBasicempJob">
                                <Form.Label className=''>Designation</Form.Label>
                                {/* <Form.Control type="text" className='bg-light' name='empJob' placeholder="Enter designation..." value={formValues.empJob} onChange={handleChange} /> */}
                                <Form.Control type="text" className='bg-light' name='empJob' placeholder="Enter designation..." value={formValues.empJob} onChange={(event) => {
                                setformValuesData(event)
                            }} />
                            </Form.Group>
                            <p className='text-danger'>{formErrors.empJob}</p>
                            <Form.Group className="mb-2" controlId="formBasicempJob">
                                <Form.Label>Salary</Form.Label>
                                {/* <Form.Control type="number" className='bg-light' placeholder="Enter salary..." name='empSalary' value={formValues.empSalary} onChange={handleChange} /> */}
                                <Form.Control type="number" className='bg-light' placeholder="Enter salary..." name='empSalary' value={formValues.empSalary} onChange={(event) => {
                                setformValuesData(event)
                            }} />
                            </Form.Group>
                            <p className='text-danger'>{formErrors.empSalary}</p>
                            <Form.Group className="mb-2" controlId="formBasicempJob">
                                <Form.Label>Age</Form.Label>
                                {/* <Form.Control type="number" className='bg-light' placeholder="Enter age..." name='empAge' value={formValues.empAge} onChange={handleChange} /> */}
                                <Form.Control type="number" className='bg-light' placeholder="Enter age..." name='empAge' value={formValues.empAge} onChange={(event) => {
                                setformValuesData(event)
                            }} />
                            </Form.Group>
                            <p className='text-danger'>{formErrors.empAge}</p>
                            <Button className='float-end' variant="primary" type="submit" onClick={saveEmpData}>
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default AddEmployee
