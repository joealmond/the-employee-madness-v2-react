import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import YearsOfExperieneceTable from "../Components/EmployeeTable/YearsOfExperienceTable";
import { useParams } from "react-router-dom";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const YearsOfExperience = () => {
  const { yearsOfExperience } = useParams();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchEmployees()
      .then((employees) => {
        setLoading(false);
        setEmployees(employees);
      })
  }, []);

  if (loading) {
    return <Loading />;
  }

  console.log(yearsOfExperience)

  const filteredEmployees = yearsOfExperience ? 
  employees.filter(employee => parseInt(employee.yearsOfExperience) >= parseInt(yearsOfExperience))
  : employees 

  return (
  <YearsOfExperieneceTable employees={filteredEmployees} onDelete={handleDelete} />
  );
};

export default YearsOfExperience;
