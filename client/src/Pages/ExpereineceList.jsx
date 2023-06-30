import React, { useEffect, useState } from 'react'
import ExperienceTable from '../Components/ExperienceTable/ExperienceTable'
import { createRoutesFromChildren, useParams } from 'react-router-dom';

const fetchEmployees = (query) => {
    return fetch(`/api/employees/experience/${query}`).then((res) => res.json());
  };

const ExpereineceList = () => {
      const { yearsOfExperience } = useParams();
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees(yearsOfExperience).then((employeesData)=>{
            setEmployees(employeesData)
        })
    },[yearsOfExperience]);

    console.log(yearsOfExperience)

  return (
    <ExperienceTable employees={employees} />
  )
}

export default ExpereineceList