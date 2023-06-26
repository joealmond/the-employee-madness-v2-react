import React from "react";
import { useLocation } from "react-router-dom";

const Worklog = () => {
  const location = useLocation();
  const { name, worklog } = location.state;
  return (
    <div>
      <h2>Worklog of {name}:</h2>
      <ul>
        {worklog && worklog.map((logItem, i)=>(
        <li key={i} >
            <div>
                <span>Label: </span>
                <span><strong>{logItem.label} </strong></span>
                <span> Hours: </span>
                <span><strong>{logItem.hours}</strong></span>
            </div>
            
        </li>)
        ).reverse()}
        </ul>
    </div>
  );
};

export default Worklog;
