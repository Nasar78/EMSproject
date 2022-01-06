import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import LogEmp from './LogEmp'
import Navi from './Navi'
import RegEmp from './RegEmp'

const ParentComponent = () => {
    return (
        <div>
            
            <Container fluid>
  <Row>
    <Col>
    <BrowserRouter>
           
                
            <Route path='/' exact  component={LogEmp}></Route>
            <Route path="/Regestieremployee" component={RegEmp}></Route>
            <Route path="/navbar" component={Navi}></Route>
            </BrowserRouter>

    </Col>
  </Row>
</Container>

        </div>
    )
}

export default ParentComponent
