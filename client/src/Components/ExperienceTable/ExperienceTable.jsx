import { Link } from "react-router-dom";
import "./EmployeeTable.css";



const ExperienceTable = ({ employees, onDelete }) => (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th><button onClick={handleSort} >Name</button></th>
          <th>Level</th>
          <th>Years Of Experience</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.level}</td>
            <td>{employee.yearsOfExperience}</td>
            <td>
              <Link to={`/update/${employee._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(employee._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ExperienceTable;
