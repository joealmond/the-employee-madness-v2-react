import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import YearsOfExperieneceTable from "../Components/EmployeeTable/YearsOfExperienceTable";
import { useParams } from "react-router-dom";

const fetchEmployees = (sort = '') => {
  return fetch(`/api/employees/${sort}`).then((res) => res.json());
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
  const [isSorted, setIsSorted] = useState('');

  const handleSort = () => {
    if (isSorted !== 'asc') {
    fetchEmployees('asc').then((employees) => {
      setLoading(false);
      setEmployees(employees);
    });
    setIsSorted('asc')
  } else if (isSorted !== 'desc') {
    fetchEmployees('desc').then((employees) => {
      setLoading(false);
      setEmployees(employees);
    });
    setIsSorted('desc')
  }
  }

  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchEmployees().then((employees) => {
      setLoading(false);
      setEmployees(employees);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const filteredEmployees = yearsOfExperience
    ? employees.filter(
        (employee) =>
          parseInt(employee.yearsOfExperience) >= parseInt(yearsOfExperience)
      )
    : employees;

  return (
    <YearsOfExperieneceTable
      employees={filteredEmployees}
      onDelete={handleDelete}
      onSort={handleSort}
    />
  );
};

export default YearsOfExperience;
