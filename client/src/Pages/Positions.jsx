import React, { useEffect, useState } from "react";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const getPositions = async () => {
      const res = await fetch("/api/positions");
      const positionsData = await res.json();
      setPositions(positionsData);
    };
    getPositions();
  }, []);

  return (
    <div>
      <h2>Availible positions:</h2>
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Salary:</th>
          </tr>
        </thead>
        <tbody>
          {positions &&
            positions.map((position, index) => {
              return (
                <tr key={index}>
                  <td >{position.name}</td>
                  <td >{new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(position.salary)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Positions;
