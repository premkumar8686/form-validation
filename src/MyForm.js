import React, { useRef } from 'react';

const MyForm = () => {
  // Create a ref to hold a reference to the form element
  const formRef = useRef(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the form element through the ref
    const form = formRef.current;

    // Collect input fields' data from the form
    const formData = new FormData(form);
    const data = {};

    // Convert the FormData object to a regular object
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Now "data" contains all the input fields' values
    console.log(data);

    // Here, you can perform any additional actions like submitting the data to a server.
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Your form input fields here */}
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="password" name="password" />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;