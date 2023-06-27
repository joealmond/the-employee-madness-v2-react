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
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const filteredEmployees = filter
    ? employees.filter((employee) =>
        employee.name.toLowerCase().includes(filter)
      )
    : employees;

  const alikeEmployees = employees.filter(
    (employee) =>
      employee?.level === selectedEmployee?.level &&
      employee?.position === selectedEmployee?.position
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
      {selectedEmployee ? (
        <EmployeeTable
          employees={alikeEmployees}
          onDelete={handleDelete}
          setSelectedEmployee={setSelectedEmployee}
          selectedEmployee={selectedEmployee}
        />
      ) : (
        <EmployeeTable
          employees={filteredEmployees}
          onDelete={handleDelete}
          setSelectedEmployee={setSelectedEmployee}
          selectedEmployee={selectedEmployee}
        />
      )}
    </>
  );
};

export default EmployeeListFiltered;
