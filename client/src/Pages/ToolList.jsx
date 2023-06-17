import { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import ToolTable from "../Components/ToolTable/ToolTable";
import Search from "../Components/Search/Search";
import CreateTool from "../Components/CreateTool/CreateTool";

const filterSearch = (query, tools) => {
  if (query) {
    return tools.filter((tool)=>tool.name.toLowerCase().includes(query))
  } 
  return tools
}
const fetchTools = () => {
  return fetch("/api/tools").then((res) => res.json());
};

const deleteTool = (id) => {
  return fetch(`/api/tools/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
};

const ToolList = () => {
  const [loading, setLoading] = useState(true);
  const [tools, setTools] = useState(null);
  const [searchQuery, setSearchQuery] = useState('')

  const handleDelete = (id) => {
    deleteTool(id);

    setTools((tools) => {
      return tools.filter((tool) => tool._id !== id);
    });
  };

  useEffect(() => {
    fetchTools().then((tools) => {
      setLoading(false);
        setTools(tools);
    });
  }, [tools]);

  // SOLUTION filtering and fetching:
  // useEffect(() => {
  //   fetchTools().then((tools) => {
  //     setLoading(false);
  //     if (searchQuery) {
  //       setTools(filterSearch(searchQuery, tools));
  //     } else {
  //       setTools(tools);
  //     }
  //   });
  // }, [searchQuery]);

  if (loading) {
    return <Loading />;
  }

  const filteredTools = tools && filterSearch(searchQuery, tools)

  return (
    <>
      <CreateTool/>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ToolTable tools={filteredTools} onDelete={handleDelete} />
    </>
  );
};

export default ToolList;
