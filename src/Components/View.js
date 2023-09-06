import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function View() {
 const [employee,setEmployee]=useState([])

 const params=useParams()


  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8081/get-employees/'+params.id)
    setEmployee(result.data.message)
  }

  console.log(employee,"emp");

  useEffect(()=>{
    fetchEmp()

  },[])
  return (
    <div className='mb-5'>
    <Container className=' mt-5'>

    
<Row>
<Col>
<div className='pb-5'>
  <Card className='text-center container w-50 mb-5' style={{background:'#b3e099' , boxShadow:'2px 3px 5px grey'}}>
        <Card.Body>
        <Card.Img variant="top" src="/public_blue_users.png" />
          <Card.Title><h3 className='text-white'>Employee Name : {employee.name}</h3></Card.Title>
          
        </Card.Body>
        <ListGroup className="list-group-flush p-4">
          <ListGroup.Item>Employee Id : {employee.id}</ListGroup.Item>
          <ListGroup.Item>Designation : {employee.designation}</ListGroup.Item>
          <ListGroup.Item>Salary : {employee.salary}</ListGroup.Item>
          <ListGroup.Item>Experience : {employee.experience}</ListGroup.Item>
        </ListGroup>
      </Card>
  
</div>

 </Col>
</Row>
    </Container>
    
    </div>
  )
}

export default View