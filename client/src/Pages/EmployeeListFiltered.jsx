import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";

const fetchEmployees = () => {
  return fetch("/api/employees").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const EmployeeListFiltered = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const [filter, setFilter] = useState("");

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

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <label>
        Employee Name:
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <EmployeeTable employees={filteredEmployees} onDelete={handleDelete} />
    </>
  );
};

export default EmployeeListFiltered;
