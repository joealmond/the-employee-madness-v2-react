import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const WorklogCreator = () => {
  const [label, setLabel] = useState("");
  const [hours, setHours] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const createWorklog = async (id) => {
    try {
      const res = await fetch(`/api/employees/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          label,
          hours,
        }),
      });

      if (res.ok) {
        console.log("Worklog added!");
        setLabel("");
        setHours("");
        navigate("/");
      } else {
        console.error("Failed to create worklog.");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (label !== "" && hours !== "") createWorklog(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Worklog:</h3>
      <label>
        Label for work:
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </label>
      <label>
        Hours to log:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </label>
      <label>
        <input type="Submit" />
      </label>
    </form>
  );
};

export default WorklogCreator;
