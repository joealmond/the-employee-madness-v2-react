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
              <th />
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.level}</td>
                <td>{employee.position}</td>
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
