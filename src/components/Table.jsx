import React from 'react'
import "./Forms"
const Table = ({handleData}) => {

    const [employdata, setemployData] = React.useState([])

    React.useEffect(() => {
        getData()
      }, [])

      
    const getData = () =>{
        fetch("https://github.com/masai-school/api-mocker/wiki/Authentication-API")
        .then((res) => (res = res.json()))
        .then((res) => setemployData(res))
    }
    console.log(employdata)
  return (
    <table >

       <thead>
           <th>Employ</th>
           <th>Age</th>
           <th>Address</th>
           <th>Department</th>
           <th>Salary</th>
           <th>Marriage Status</th>
       </thead>
       <tbody>
           
           {
               employdata.map((item, index) =>(
                   <tr>
                   <td key={index}>{item.employ}</td>
                    <td >{item.age}</td>
                    <td >{item.address}</td>
                    <td >{item.department}</td>
                    <td >{item.salary}</td>
                    <td >{item.ismarried === true ? "Married" : "Not Married"}</td>
                   </tr>
               ))
           }
       </tbody>
    </table>
    
  )
}

export default Table
