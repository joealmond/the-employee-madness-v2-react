import { Link } from "react-router-dom";
import "./DivisionTable.css";

const DivisionTable = ({ divisions, onDelete }) => (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Boss</th>
          <th>Budget</th>
          <th>Country</th>
          <th>City</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {divisions.map((division) => (
          <tr key={division._id}>
            <td>{division.name}</td>
            <td>{division.boss.name}</td>
            <td>{division.budget}</td>
            <td>{division.location.country}</td>
            <td>{division.location.city}</td>
            <td>
              <Link to={`/divisions/update/${division._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(division._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DivisionTable;
