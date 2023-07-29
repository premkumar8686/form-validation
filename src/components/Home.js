import React, { useState } from 'react'
import Menu from './includes/Menu'
import RegistrationForm from './RegistrationForm'
import EmployeesTable from './EmployeesTable';

export default function Home() {

  const [employees, setEmployees] = useState([]);



  const addEmployee = ( employeeData ) => {
    setEmployees([...employees, employeeData]);
  }

  return (
    <>
    <Menu />
     <div className='mt-5'>
        {/* Row Section Start */}
        <div className='row'>
           {/* Col 1 Section Start */}
           <div className='col-md-5'>
             <RegistrationForm addFunction={addEmployee} />
           </div>
           {/* Col 1 Section End */}
           {/* Col 2 Section Start */}
           <div className='col-md-7'>
             <EmployeesTable employeesData={employees} />
           </div>
           {/* Col 2 Section End */}
        </div>
        {/* Row Section End */}
     </div>
    </>
  )
}
