import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

  // const [id,setId]=useState('')
const [name,setName]=useState('')
const [des,setDes]=useState('')
const [sal,setSal]=useState(0)
const [exp,setExp]=useState(0)



const [employee,setEmployee]=useState([])
const params=useParams()


  
  const fetchEmp=async ()=>{
    const result=await axios.get('http://localhost:8081/get-employees/'+params.id)

    setName(result.data.message.name);
    setDes(result.data.message.designation);
    setSal(result.data.message.salary);
    setExp(result.data.message.experience);

    

  }
let location=useNavigate()
  const editEmployee=async (e)=>{
    e.preventDefault()
    const body={
      id:params.id,
      name,
      designation:des,
      salary:sal,
      experience:exp

    }
    const result=await axios.post('http://localhost:8081/editemployee',body)
    alert(result.data.message)
    location('/')
  }








  useEffect(()=>{
    fetchEmp()
  },[])

  // console.log(employee);



  return (
  
    
    <div>
    <Container className='mt-5 p-4 bg-primary text-white w-75' style={{boxShadow:'5px 4px  7px #2b2b2b',borderRadius:'6px'}}>
    <Row>
  <Col lg={12}>
          <Form>
           <h3 className='text-center'>Here Edit Employee Details...!</h3>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name of Employee</Form.Label>
              <Form.Control onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Full Name of Employee" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Designation of Employee</Form.Label>
              <Form.Control onChange={(e)=>setDes(e.target.value)} value={des} type="text" placeholder="Designation of Employee" />
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Salary of Employee</Form.Label>
              <Form.Control onChange={(e)=>setSal(e.target.value)} value={sal}  type="text" placeholder="Salary of Employee" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Experience of Employee</Form.Label>
              <Form.Control onChange={(e)=>setExp(e.target.value)} value={exp} type="text" placeholder="Experience of Employee" />
            </Form.Group>

            <div className='text-end'>
              <Button variant="warning" type="submit"  onClick={(e)=>editEmployee(e)}>
                Update
              </Button>
            </div>
          </Form>
  </Col>
    </Row>
    </Container>
    </div>
    
    
  )
}

export default Edit