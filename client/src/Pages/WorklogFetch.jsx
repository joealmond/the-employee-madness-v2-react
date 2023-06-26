import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WorklogFetch = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const getEmployee = async () => {
      const res = await fetch(`/api/employees/${id}`);
      const data = await res.json();
      setEmployee(data);
    };

    getEmployee();
  }, [id]);

  const { name, worklog } = employee ?? { name: null, worklog: null };

  return (
    <div>
      <h2>Worklog of {name}:</h2>
      <ul>
        {worklog &&
          worklog
            .map((logItem, i) => (
              <li key={i}>
                <div>
                  <span>Label: </span>
                  <span>
                    <strong>{logItem.label} </strong>
                  </span>
                  <span> Hours: </span>
                  <span>
                    <strong>{logItem.hours}</strong>
                  </span>
                </div>
              </li>
            ))
            .reverse()}
      </ul>
    </div>
  );
};

export default WorklogFetch;
