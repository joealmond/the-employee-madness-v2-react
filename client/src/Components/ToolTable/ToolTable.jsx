import { Link } from "react-router-dom";
import "./ToolTable.css";

const ToolTable = ({ tools, onDelete }) => (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {tools.map((tool) => (
          <tr key={tool._id}>
            <td>{tool.name}</td>
            <td>{tool.weight}</td>
            <td>
              <Link to={`/update/${tool._id}`}>
                <button type="button">Update</button>
              </Link>
              <button type="button" onClick={() => onDelete(tool._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ToolTable;
