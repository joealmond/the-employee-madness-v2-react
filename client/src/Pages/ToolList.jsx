import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import EmployeeTable from "../Components/EmployeeTable";
import Search from "../Components/Search/Search";

const filterSearch = (query, tools) => {
  return tools.filter((tool)=>tool.name.toLowerCase().includes(query))
}
const fetchTools = () => {
  return fetch("/api/tools").then((res) => res.json());
};

const deleteEmployee = (id) => {
  return fetch(`/api/employees/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const ToolList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')

  const handleDelete = (id) => {
    deleteEmployee(id);

    setEmployees((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchTools().then((employees) => {
      setLoading(false);
      if (searchQuery) {
        setEmployees(filterSearch(searchQuery, employees));
      } else {
        setEmployees(employees);
      }
    });
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <EmployeeTable employees={employees} onDelete={handleDelete} />
    </>
  );
};

export default ToolList;
