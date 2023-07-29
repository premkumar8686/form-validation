import React, { useRef } from 'react';

const FormComponent = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect data from form fields, including multi-checkboxes
    const formData = new FormData(formRef.current);
    const data = {};

    // Process checkboxes separately as they may have multiple values
    formData.forEach((value, key) => {
      if (data[key]) {
        if (!Array.isArray(data[key])) {
          data[key] = [data[key]];
        }
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });

    // Do something with the collected data
    console.log(data);

    // Optionally, you can perform an API call or further processing here

    // Reset the form after submission
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="checkbox1">Checkbox 1:</label>
        <input type="checkbox" id="checkbox1" name="checkboxes" value="checkbox1" />
      </div>
      <div>
        <label htmlFor="checkbox2">Checkbox 2:</label>
        <input type="checkbox" id="checkbox2" name="checkboxes" value="checkbox2" />
      </div>
      {/* Add more checkboxes as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
