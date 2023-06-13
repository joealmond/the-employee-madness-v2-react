import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ToolTable from "../Components/ToolTable/ToolTable";
import Search from "../Components/Search/Search";
import CreateTool from "../Components/CreateTool/CreateTool";

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
  const [tools, setTools] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')

  const handleDelete = (id) => {
    deleteEmployee(id);

    setTools((employees) => {
      return employees.filter((employee) => employee._id !== id);
    });
  };

  useEffect(() => {
    fetchTools().then((employees) => {
      setLoading(false);
      if (searchQuery) {
        setTools(filterSearch(searchQuery, employees));
      } else {
        setTools(employees);
      }
    });
  }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <CreateTool/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ToolTable tools={tools} onDelete={handleDelete} />
    </>
  );
};

export default ToolList;
