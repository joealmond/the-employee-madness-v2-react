import { Link } from "react-router-dom";
import "./EmployeeTable.css";

const GameTable = ({ games, onDelete }) => (
  <div className="EmployeeTable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Max. Players</th>
          <th>ID</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <tr key={game._id}>
            <td>{game.name}</td>
            <td>{game.maxPlayers}</td>
            <td>{game._id}</td>
            <td>
            <Link to={`/games-list/${game._id}`}>
                <button type="button">Details</button>
              </Link>
              <button type="button" onClick={() => onDelete(game._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default GameTable;
