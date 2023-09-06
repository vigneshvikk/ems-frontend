import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Home() {
  //api call
const [employees,setEmployees]=useState([])
  const fetchEmployee=async ()=>{
    const result=await axios.get('http://localhost:8081/getEmployees')
    setEmployees(result.data.message);
  }
console.log(employees);
  useEffect(()=>{
    fetchEmployee()
  },[])


  //api delete
  const deleteEmployee=async (id)=>{

    const result= await axios.delete('http://localhost:8081/deleteemployee/'+id)
    alert(result.data.message)
    fetchEmployee()
  }

  





  return (
    <div>

    <Container className='mb-5 mt-5 p-5  animate__animated animate__fadeInLeft backg'>
    <Row>
    <Col lg={6} md={6}  className='py-3'> 
    <h1 className='head1'>Employee Management App</h1>
    <hr />
    <p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consectetur amet, placeat cumque fugiat doloremque quam eligendi autem unde, veritatis exercitationem voluptatem illo quo iste similique quos? Provident, sequi reiciendis natus recusandae nisi ipsa inventore dolores, quasi eaque veniam ut nulla facere velit ex! Eligendi ipsum sapiente totam molestiae laboriosam blanditiis maxime est veniam. Provident deleniti ipsum necessitatibus officia repudiandae vel, totam facere itaque est at ducimus perspiciatis doloribus quia voluptatum ex beatae magni rerum cupiditate iste consequuntur nihil. Reiciendis explicabo voluptatum soluta laborum quod velit dignissimos ad cumque voluptas sint aut consectetur, pariatur alias illo. Harum dolorum inventore reiciendis sunt officiis vitae adipisci ex? Ullam soluta eveniet assumenda ipsam consequuntur commodi velit quos, ratione iste ex nesciunt ipsum laboriosam amet expedita veritatis, omnis doloremque nobis porro repellat quae autem vel. Illo dolorem sed commodi qui optio quae ad assumenda voluptatibus? Aliquam numquam placeat nesciunt expedita consectetur tempora distinctio voluptatem.</p>
    </Col>
    <Col lg={6} md={6} className='py-3'>
    <img src="/Happy-Workforce.jpg" className='w-100 h-100 empimg' alt="" />
    </Col>
    </Row>
 </Container>


 <Container className='d-flex justify-content-center con p-3' >
 <hr/>
 <div><h2 className=' head1'>Employee List</h2></div> 
<Link to={'/add'}>
  <div><button className='btn text-center'> <a href="" className='p-5' title='Add Employees'><i class="fa-solid fa-users fs-1"></i></a></button></div>
  
</Link><hr/>
</Container>





<Container className='pb-4'>
<Row>
   <Col lg={12} sm={12}>
       <Table striped bordered hover variant="dark" className='mb-5 mt-5  text-center'>
           <thead>
             <tr className='text-warning'>
               <th>#</th>
               <th>Id</th>
               <th>Full Name</th>
               <th>Destination</th>
               <th>Salary</th>
               <th>Experience</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody >
           {
            employees?.map((employee,index)=>(
              <tr >
              <td>{index}</td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.salary}</td>
              <td>{employee.experience}</td>
              <td>
     
              <ButtonGroup aria-label="Basic example">
   
               <Link to={`edit/${employee.id}`}> <Button variant="secondary"><a href="" className='link text-light' title='Edit'>  <i class="fa-solid fa-user-pen">  </i></a></Button></Link>
     
             <Link to={`view/${employee.id}`}><Button variant="secondary"><a href="" className='link ms-2 text-primary' title='View'>  <i class="fa-solid fa-eye">  </i></a></Button></Link >
<Link >
                <Button onClick={()=>deleteEmployee(employee.id)} variant="secondary"><a href="" className='link ms-2 text-danger' title='Delete'>  <i class="fa-solid fa-user-xmark">  </i></a></Button>
  
</Link>            </ButtonGroup>
              </td>
            </tr>
            ))
           }
            
      
            
            
            
           </tbody>
          </Table>
   </Col>
</Row>
</Container>
 
    
    </div>
  )
}

export default Home