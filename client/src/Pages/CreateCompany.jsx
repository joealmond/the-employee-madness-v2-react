import React, { useEffect, useState } from "react";

const CreateCompany = () => {
  const [name, setName] = useState("");

  //   useEffect(() => {

  //   }, []);

  const handleAddCompany = (e) => {
    e.preventDefault();

    const addCompany = async () => {
      const res = await fetch("/api/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      const resData = await res.json();
      console.log(resData);
    };
    addCompany();
  };

  return (
    <div>
      <form onSubmit={handleAddCompany}>
        <h3>Add Company:</h3>
        <label>
          Company:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateCompany;
