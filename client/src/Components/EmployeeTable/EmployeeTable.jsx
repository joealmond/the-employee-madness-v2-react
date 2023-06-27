import { Link, useLocation } from "react-router-dom";
import "./EmployeeTable.css";

const EmployeeTable = ({
  employees,
  onDelete,
  selectedEmployee,
  setSelectedEmployee,
}) => {
  const location = useLocation();

  return (
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
              <button type="button" onClick={() => onDelete(employee._id)}>
                Delete
              </button>
              <Link to={`/responsibilities/${employee._id}`}>
                <button type="button">Responsibilities</button>
              </Link>
              {location.pathname === '/filtered' && <button
                type="button"
                onClick={() => {
                  setSelectedEmployee(
                    selectedEmployee === employee ? null : employee
                  );
                }}
              >
                alike
              </button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)};

export default EmployeeTable;
