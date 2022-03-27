import React from 'react'
import './Form.css'
import Table from './Table'
export const Forms = () => {

    const [formData, setFormData] = React.useState({
        employ : "",
        age : "",
        department : "",
        salary: "",
        address : "",
        ismarried : false
    })
    

    const handleChange = (e) =>{
        const {id,value,checked,type} = e.target
        setFormData({
            ...formData,
            [id] : type === "checkbox" ? checked : type === "number" ? +value : value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:3001/employees',{
            method : "POST",
            body: JSON.stringify(formData),
            headers : {
                "Content-Type" : "application/json"
            }
        })
    }

    // console.log(formData)
    const{employ,age,department,salary,address} = formData

  return (
    <form  value = {formData} onSubmit = {handleSubmit}>

    
    <label>Employ Name: </label>
    <input 
        type="text" 
        id='employ'
        placeholder='Enter Name'
        onChange={handleChange}
        value = {employ}
        />

    <br />
        <label>Age:</label>       
        <input type="number" placeholder='Age' id='age'  onChange={handleChange} value = {age}/>
    
    <br />

    <label>Employ Address:</label>
        <input 
        type="text" 
        id='address'
        placeholder='Enter Address'
        onChange={handleChange}
        value = {address}
        />

    <br />

    <label >Department:</label>
    <select name="" id="department" onChange={handleChange} value = {department} >
        <option value="">Select Department</option>
        <option value="it">IT</option>
        <option value="marketing">Marketing</option>
        <option value="finance">Finance</option>
    </select>

    <br />
        <label >Salary</label>
        <input type="number" placeholder='Salary' id='salary' value = {salary} onChange = {handleChange} />

    <br />
    
        <label>Is Married: </label>
        <input type="checkbox" onChange={handleChange} id = "ismarried" />
    <br />
        <input type="Submit"  />
    
    </form>

    
  )
}
