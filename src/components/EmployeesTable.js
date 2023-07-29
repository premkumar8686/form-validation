import React from 'react';

export default function EmployeesTable(props) {
  return (
    <>
      <table className="employees">
       <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        </thead>
        <tbody>
        {props.employeesData.map((employee, index) => {
           return <tr key={index}>
                    <td>{ employee?.name }</td>
                    <td>{ employee?.surName }</td>
                    <td>{ employee?.eMail }</td>
                    <td>{ employee?.gender }</td>
                 </tr>
        })}
        </tbody>
      </table>
    </>
  );
}
