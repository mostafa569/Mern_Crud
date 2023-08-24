import React, { useState } from 'react'
 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function CreateUser() {
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[age,setAge]=useState()
  const navigate=useNavigate()
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleNameChange2 = (e) => {
    setEmail(e.target.value);
  }
  const handleNameChange3 = (e) => {
    setAge(e.target.value);
  }
  const Submit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/createUser',{name,email,age})
     
    .then(result => {console.log(result)
      navigate('/')
  })

    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Name' className='from-control'  value={name} onChange={handleNameChange}/>
          
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Email</label>
            <input type='email' placeholder='Enter Name' className='from-control' value={email} onChange={handleNameChange2}/>
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Age</label>
            <input type='text' placeholder='Enter Name' className='from-control' value={age} onChange={handleNameChange3}/>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
   
      </div>
     
      </div>
  )
}