import React, { useState } from "react";

const AddressForm = ({ onSave, employee }) => {
  const [country, setCountry] = useState(employee?.address?.country ?? "");
  const [city, setCity] = useState(employee?.address?.city ?? "");
  const [street, setStreet] = useState(employee?.address?.street ?? "");
  const [zipCode, setZipCode] = useState(employee?.address?.zipCode ?? "");


  const onSubmit = (e) => {
    e.preventDefault();
    return onSave({
      ...employee,
      address: { ...employee.address, country, city, street, zipCode },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h3>Name:</h3>
        <h3>{employee?.name}</h3>
      </div>
      <div>
        <h4>Address:</h4>
      </div>
      <div>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Street:
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Zip code:
          <input
            type="number"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>
      </div>
      <button>Update</button>
    </form>
  );
};

export default AddressForm;
