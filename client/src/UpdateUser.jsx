import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateUser() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3001/getUser/' + id)
      .then(result => {
        console.log(result)
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(result.data.age)
      })
      .catch(err => console.log(err))
  }, [id])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const update = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3001/updateUser/' + id, { name, email, age })
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Enter Name' className='form-control' value={name} onChange={handleNameChange} />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter Email' className='form-control' value={email} onChange={handleEmailChange} />
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input type='text' id='age' placeholder='Enter Age' className='form-control' value={age} onChange={handleAgeChange} />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}