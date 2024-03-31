import React from 'react'
import {useForm} from 'react-hook-form'; 
export const Register = () => {
   const {register, handleSubmit, formState:{errors}, reset}=  useForm();
   
   const submitMyForm = (data)=>{
    // axios.post(URL, data); // Data send to the server
    console.log('Form Submit Call ', data);
   }
  return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit(submitMyForm)}>
            <input  {...register('userid',{required:true})} type="text" placeholder='Type Userid Here'/>
            {errors.userid && errors.userid.type=='required' && <span>Userid can't be Blank</span>}
            <br />
            <input  {...register('password',{required:true, minLength:8, maxLength:20})} type="password" placeholder='Type Password Here' />
            { errors.password?.type=='required' && <span>Password can't be Blank</span>}
            {/* {errors.password && errors.password.type=='required' && <span>Password can't be Blank</span>} */}
            {errors.password && errors.password.type=='minLength' && <span>Password can't be Less than 8 Char</span>}
            {errors.password && errors.password.type=='maxLength' && <span>Password can't be Greater than 20 Char</span>}
            <br />
            <input  {...register('name', {required:true, minLength:3, pattern:/^[a-zA-Z]+$/
            , validate:{
                checkName : (value)=>value.length>=10
            }})} type="text" placeholder='Type Name Here' />
            {errors.name && errors.name.type=='required' && <span>Name can't be Blank</span>}
            {errors.name && errors.name.type=='minLength' && <span>Name can't be Less than 3 Char</span>}
           {errors.name?.type=='pattern' && <span>Only Alphabet allowed in name</span>}
           {errors.name?.type=='checkName' && <span>Invalid Name...</span>}
            <br />
             <button type='submit'>Register</button>
             <button onClick={()=>reset({
                'name':'',
                'password':'',
                'userid':''
             })}>Reset</button>
        </form>
    </div>
  )
}
