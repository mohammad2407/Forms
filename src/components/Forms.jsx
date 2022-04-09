import React from 'react'
import './Form.css'
// import Table from './Table'
export const Forms = () => {

    const [formData, setFormData] = React.useState({
        name : "",
        email : "",
        password : "",
        username: "",
        mobile : "",
        description : ""
    })
    

    const handleChange = (e) =>{
        const {id,value,checked,type} = e.target
        setFormData({
            ...formData,
            [id] : type === "checkbox" ? checked : type === "number" ? +value : value
        })
    }

    const handleSubmit = (e,getData) =>{
        e.preventDefault()
        fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
            method : "POST",
            body: JSON.stringify(formData),
            headers : {
                "Content-Type" : "application/json"
            }
        }).then((res) => (console.log(res.json())))
    }

    // console.log(formData)
    const{name,email,password,username,mobile,description} = formData

  return (
      <>
      
    <form  value = {formData} onSubmit = {handleSubmit}>

    <h1>Registration Page</h1>    
    <label>Employ Name: </label>
    <input 
        type="text" 
        id='name'
        placeholder='Enter Name'
        onChange={handleChange}
        value = {name}
        />

    <br />
        <label>email</label>       
        <input type="email" placeholder='Age' id='email'  onChange={handleChange} value = {email}/>
    
    <br />

    <label>Employ Address:</label>
        <input 
        type="text" 
        id='password'
        placeholder='Enter Address'
        onChange={handleChange}
        value = {password}
        />

    <br />

    <label >username:</label>
    <input type="text"
        value={username}
        id='username'
    />

    <br />
        <label >Salary</label>
        <input type="number" placeholder='Salary' id='mobile' value = {mobile} onChange = {handleChange} />

    <br />
    
        <label>Description: </label>
        <input type="text" onChange={handleChange} value = {description} id = "description" />
    <br />

        
        <input type="Submit"  />
    
    </form>

    {/* <Table handleData = { () => getData()} /> */}
    </>

    
  )
}
