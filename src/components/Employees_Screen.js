import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import EditEmp from './EditEmp'

const Employees_Screen = (props) => {
  const [products, setproducts] = useState([])


  useEffect(() => {
    fetchProducts()
}, [])


const fetchProducts = () => {
  axios.get('http://192.168.43.113:8080/viewEmployeeData')
      .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.data.error) {
              console.log('Error', res.data.message);
          } else {
              setproducts(res.data)
          }
      }).catch(err => {
          console.log(err);
      })
}

const deleteProduct = async (productsEmpID) => {
  console.log('ID', productsEmpID);
  try {
      const res = await axios.delete(`http://192.168.43.113:8080/deleteEmployee/${productsEmpID}`)
      if (res.data.error) {
          alert(res.data.message)
      } else {
          console.log(res.data.message);
          // 1. Loop the products and delete in front end only
          const productsCopy = [...products]
          const filteredProducts = productsCopy.filter((product) => {
              return product.empID !== productsEmpID
          })
          setproducts(filteredProducts)

          // 2. Making API call and fetch the data
          // fetchProducts()
      }
  } catch (err) {
      alert(err.message)
  }
}







  const navigateTOEdit=()=>{
    props.history.push('/edit')
  }
    

   
    
    return (
        <div className='my-5'>

<Container>
  <Row>
    <Col>

    <Table  bordered  variant="dark">
 
  <tbody>
  <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Salary</th>
      <th>Edit</th>
      <th>Delete</th>
      
    </tr>
    {products.map((emp)=>{
      return(
      <tr>
      <td>{emp.empName}</td>
      <td>{emp.empAge}</td>
      <td>{emp.empJob}</td>
      <td>{emp.empSalary}</td>
      <td> <Button variant="warning" onClick={()=>{
        navigateTOEdit()
      }}>Edit</Button>{' '}</td>
      <td> <Button variant="primary" onClick={()=>{
        deleteProduct(emp.empID)
      }}>Delete</Button>{' '}</td>
     
    </tr>
    
    )
   

    })}



    {/* <tr>
      <td>test</td>
      <td>20</td>
      <td>qwtrty</td>
      <td>12345</td>
      <td> <Button variant="warning" onClick={()=>{
        navigateTOEdit()
      }}>Edit</Button>{' '}</td>
      <td> <Button variant="primary">Delete</Button>{' '}</td>
    </tr>
    */}
  </tbody>
</Table>
    
    </Col>
  </Row>
  
</Container>

        </div>
    )
}

export default Employees_Screen
