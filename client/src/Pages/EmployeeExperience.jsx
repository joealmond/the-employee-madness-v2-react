import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeExperience = () => {
  const [employees, setEmployees] = useState([]);
  const [sortBy, setSortBy] = useState("asc");
  const { exp } = useParams();

  useEffect(() => {
    const getEmployees = async () => {
      const res = await fetch(`/api/employees/?experience=${exp}`);
      const resData = await res.json();
      setEmployees(resData);
    //   console.log(resData);
    };
    getEmployees();
  }, [exp]);

  const handleSort = () => {
    const newSortBy = sortBy === "asc" ? "desc" : "asc"
    setSortBy(newSortBy)
    // console.log(sortBy)
  }

  useEffect(()=>{
    
    const getSortedEmployees = async() => {
        const res = await fetch(`/api/employees/?experience=${exp}&sort=${sortBy}`);
        const resData = await res.json();
        // console.log(resData)
        setEmployees(resData)
    }
    getSortedEmployees();

  },[exp, sortBy])

  return (
    <div>
        <button onClick={handleSort}>Sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Years Of Experience</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.level}</td>
              <td>{employee.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeExperience;
