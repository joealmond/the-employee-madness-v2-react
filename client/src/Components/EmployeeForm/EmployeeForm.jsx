import { useEffect, useState } from "react";

const EmployeeForm = ({ onSave, disabled, employee, onCancel }) => {
  const [name, setName] = useState(employee?.name ?? "");
  const [level, setLevel] = useState(employee?.level ?? "");
  const [position, setPosition] = useState(employee?.position ?? "");
  const [companyName, setCompanyName] = useState(employee?.company?.name ?? "");
  const [companies, setCompanies] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      return onSave({
        ...employee,
        name,
        level,
        position,
        company: {
          name: companyName
        }
      });
    }

    return onSave({
      name,
      level,
      position,
      company: {
        name: companyName
      }
    });
  };

  useEffect(()=>{

    const getCompanies = async () => {
      const res = await fetch('/api/company');
      const resData = await res.json();
      setCompanies(resData)
      // console.log(resData);
    }
    getCompanies();

  },[])

  return (
    <form className="EmployeeForm" onSubmit={onSubmit}>
      <div className="control">
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
        />
      </div>

      <div className="control">
        <label htmlFor="company">Company:</label>
        <select name="company"  value={companyName} onChange={(e)=>setCompanyName(e.target.value)}>
          <option value="">--Please choose an option--</option>
          {companies.map(company=>(
            <option key={company._id} value={company.name}>{company.name}</option>
          ))}
        </select>
      </div>

      <div className="control">
        <label htmlFor="level">Level:</label>
        <input
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          name="level"
          id="level"
        />
      </div>

      <div className="control">
        <label htmlFor="position">Position:</label>
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          id="position"
        />
      </div>

      <div className="buttons">
        <button type="submit" disabled={disabled}>
          {employee ? "Update Employee" : "Create Employee"}
        </button>

        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
