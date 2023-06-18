import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const getTools = (id) => fetch(`/api/tools/${id}`).then((res) => res.json());

const ToolDetails = () => {
  const [tools, setTools] = useState();
  const { id } = useParams();

  useEffect(() => {
    getTools(id).then((tools) => {
      setTools(tools);
    });
  }, []);

  return (
    <>
      <h2>Tool details:</h2>
      <p>{tools?.name}</p>
      <p>{tools?.weight}</p>
    </>
  );
};

export default ToolDetails;
