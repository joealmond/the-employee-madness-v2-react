import React from "react";

const CreateTool = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        fetch('/api/tools',{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name: e.target.name.value, weight: e.target.weight.value})
        })
          .then(res => {
            console.log("Form submission successful");
          })
          .catch(error => {
            console.error("Form submission error:", error);
          });
      };

  return (
    <form action="/api/tools" method="POST" onSubmit={handleSubmit}>
      <label>
        Name:
        <input name='name' type="text" />
      </label>
      <label>
        Weight:
        <input name='weight' type="number" />
      </label>
      <input type="submit" />
    </form>
  );
};

export default CreateTool;
