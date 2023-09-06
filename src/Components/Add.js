import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {v4 as uuid} from "uuid";



function Add() {
const [id,setId]=useState('')
const [name,setName]=useState('')
const [des,setDes]=useState('')
const [sal,setSal]=useState(0)
const [exp,setExp]=useState(0)


useEffect(()=>{
  setId(uuid().slice(0,3))

},[])

let location=useNavigate()

  const addEmployee=async (e)=>{
    e.preventDefault()
    setId(uuid().slice(0,3))

    const body={
      id,
      name,
      designation:des,
      salary:sal,
      experience:exp
    }

    const result=await axios.post('http://localhost:8081/addemployee',body)
    location('/')
    alert(result.data.message)

  }
// console.log(id);
// console.log(name)
// console.log(des)
// console.log(sal)
// console.log(exp);


  return (
    <div>
    <Container className='mt-5 p-4 bg-primary text-white w-75' style={{boxShadow:'5px 4px  7px #2b2b2b',borderRadius:'6px'}}>
    <Row>
  <Col lg={12}>
          <Form>
           <h3 className='text-center'>Here Add Employee Details...!</h3>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name of Employee</Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name of Employee" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Designation of Employee</Form.Label>
              <Form.Control onChange={(e)=>setDes(e.target.value)} type="text" placeholder="Designation of Employee" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Salary of Employee</Form.Label>
              <Form.Control onChange={(e)=>setSal(e.target.value)} type="text" placeholder="Salary of Employee" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Experience of Employee</Form.Label>
              <Form.Control onChange={(e)=>setExp(e.target.value)} type="text" placeholder="Experience of Employee" />
            </Form.Group>

            <div className='text-end'>
              <Button variant="warning" type="submit" onClick={(e)=>addEmployee(e)}>
                Submit
              </Button>
            </div>
          </Form>
  </Col>
    </Row>
    </Container>
    </div>
  )
}

export default Add