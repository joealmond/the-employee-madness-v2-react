import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmployeeByExperienceList = () => {
  const { exp } = useParams();
  const [employees, setEmployees] = useState([]);
  const [sortBy, setSortBy] = useState("asc");

  useEffect(() => {
    const getEmployees = async () => {
      const res = await fetch(`/api/employees/?exp=${exp}`);
      const resData = await res.json();
      console.log(resData);
      setEmployees(resData);
    };
    getEmployees();
  }, [exp]);

  const handleSortByName = () => {
    const newSortBy = sortBy === "asc" ? "desc" : "asc";
    setSortBy(newSortBy)
};

  useEffect(()=>{

    const fetchSortByName = async () => {
        const res = await fetch(`/api/employees/?exp=${exp}&sortBy=${sortBy}`);
        const resData = await res.json();
        setEmployees(resData);
    }
    fetchSortByName();

  },[sortBy, exp])

  return (
    <div>
      <button onClick={handleSortByName}>Sort by name</button>
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

export default EmployeeByExperienceList;
