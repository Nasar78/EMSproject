import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import AddEmp from './AddEmp'
import EditEmp from './EditEmp'
import Employees_Screen from './Employees_Screen'
import LogEmp from './LogEmp'
import RegEmp from './RegEmp'

function Navi() {
    return (
        <div>

<Container fluid>
  <Row>
    <Col>
    <BrowserRouter>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className='mx-4'  as={Link} to='/'>EMS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link  as={Link} to='/employees'>Employees</Nav.Link>
                    <Nav.Link  as={Link} to='/addemployees'>Add Employees</Nav.Link>
                    
                </Nav>
            </Navbar>
                    <Route path='/employees'   component={Employees_Screen}></Route>
                    <Route path="/addemployees" component={AddEmp}></Route>
                    <Route path="/edit" component={EditEmp}></Route>
            </BrowserRouter>

    </Col>
  </Row>
</Container>

           
            {/* <LogEmp/> */}
            {/* <RegEmp/> */}
            {/* <AddEmp /> */}
            {/* <EditEmp /> */}
        </div>

    )
}

export default Navi
