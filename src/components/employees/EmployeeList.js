import { useEffect, useState } from "react"
import "./employees.css"
import { Employee } from "./Employee"


export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(
    () => {
      fetch(`http://localhost:8088/users?isStaff=true`)
        .then(response => response.json())
        .then((employeeArray) => {
          setEmployees(employeeArray)
        })
    },
    []
  )

  return <article className="employees" >
    {
      employees.map(employee => <Employee key={`${employee.id}`}
        id={employee.id} 
        fullName={employee.fullName} 
        email={employee.email}/>)
    }
  </article>

}