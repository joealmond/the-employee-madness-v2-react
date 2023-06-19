import { Link } from "react-router-dom";
import "./EmployeeTable.css";
import { useState } from "react";

const EmployeeTable = ({ employees, onDelete }) => {
  const [isDisplayingConfirm, setIsDisplayingConfirm] = useState(false);
  const [employeeId, setEmployeeId] = useState(null);

  const onDeleteClick = (employeeId) => {
    setIsDisplayingConfirm(!isDisplayingConfirm)
    setEmployeeId(employeeId)
  };

  return (
    <>
    {isDisplayingConfirm && <dialog open>
        <p>Are you sure?</p>
          <button onClick={()=>{onDelete(employeeId); setIsDisplayingConfirm(false)}} >Yes</button>
          <button onClick={()=>setIsDisplayingConfirm(false)} >No</button>
      </dialog>}
      
      <div className="EmployeeTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Des.Salary</th>
              <th>Salary Diff.</th>
              <th>Started</th>
              <th>Fav. Color</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.level}</td>
                <td>{employee.position}</td>
                <td>{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(employee.salary)}</td>
                <td>{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(employee.desiredSalary)}</td>
                <td>{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(employee.desiredSalary-employee.salary)}</td>
                <td>{new Date(employee.started).toLocaleDateString('hu-HU')}</td>
                <td style={{color: `${employee.favColor}`}}>{employee.favColor}</td>
                <td>
                  <Link to={`/update/${employee._id}`}>
                    <button type="button">Update</button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => onDeleteClick(employee._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeTable;
