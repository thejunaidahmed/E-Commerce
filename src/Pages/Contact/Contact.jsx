import React from 'react'
import './Contact.css'
import {useForm} from 'react-hook-form'

function Contact() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    alert("Submitted Successfully ✔✔")
    reset()
  }

  return (
    <div className='contact'>
      <form onSubmit={handleSubmit(onSubmit)} action="https://formsubmit.co/junaidahmedyt8@gmail.com" method="POST">
        
        <input {...register("name", {
          required: true
        })} type='text' placeholder='Enter Your Name' />
        {errors.name && errors.name.type === 'required' ? <span style={{ color: 'red', fontWeight: 'bold' }}>Name is Required</span> : null}

        <input {...register("password", {
          minLength: 8,
          required: true
        })} type='password' placeholder='Enter Your Password' />
        {errors.password && errors.password.type === "required" ? <span style={{ color: 'red', fontWeight: 'bold' }}>Password is Required</span> : null}
        {errors.password && errors.password.type === "minLength" ? <span style={{color: 'red', fontWeight: 'bold' }}>Password should be atleast 8 Characters</span> : null}
        
        <input {...register("email", {
          required: true
        })} type='email' placeholder='Enter Your Email' />
        {errors.email ? <span style={{color: 'red', fontWeight: 'bold' }}>Email is Required</span> : null}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact