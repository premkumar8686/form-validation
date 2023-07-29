import React, { useEffect, useRef, useState } from "react";

export default function RegistrationForm(props) {

  

  const [error, setError] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const formRef = useRef(null);
  const name = useRef();
  const surName = useRef();
  const eMail = useRef();
  const telugu = useRef();
  const english = useRef();
  const hindi = useRef();
  const female = useRef();
  const male = useRef();

  const validation = () => {


    const error = {};
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!name.current.value) {
      error.name = "Name Required!";
    }
    if (!surName.current.value) {
      error.surName = "Sur Name Required!";
    }
    if (!eMail.current.value) {
      error.eMail = "Email Required!";
    } else if ( !re.test(eMail.current.value) )
    {
      error.eMail = "Email Not in correct format!";
    }
    
    if (
      !telugu.current.checked &&
      !english.current.checked &&
      !hindi.current.checked
    ) {
      error.language = "Language Required!";
    }
    if (!female.current.checked && !male.current.checked) {
      error.gender = "Gender Required!";
    }
    return error;


    
  };

  const languageArray = [];
  

  const formSubmit = (e) => {

    e.preventDefault();
    setError(validation());
    setIsFormSubmit(true);

    // if(telugu.current.checked)
    // languageArray.push( telugu.current.value );

    // if(english.current.checked)
    // languageArray.push( english.current.value );

    // if(hindi.current.checked)
    // languageArray.push( hindi.current.value );

    // Why telugu.current.checked not working here but it is working finalFormSubmit?

  };

  

  const finalFormSubmit = () => {

    const genderData = female.current.checked ? female.current.value : male.current.value;

    if(telugu.current.checked)
    languageArray.push( telugu.current.value );

    if(english.current.checked)
    languageArray.push( english.current.value );

    if(hindi.current.checked)
    languageArray.push( hindi.current.value );

     const addEmployeeObject = {
      name: name.current.value,
      surName: surName.current.value,
      eMail: eMail.current.value,
      language: languageArray,
      gender: genderData
     }
     props.addFunction(addEmployeeObject);

     formRef.current.reset();

  }

  useEffect(()=>{
   if( Object.keys(error).length === 0 && isFormSubmit )
   {
     finalFormSubmit();
   }
  },[error]);

  return (
    <>
      <form onSubmit={formSubmit} ref={formRef} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" id="name" ref={name} />
          <div id="nameHelp" className="form-text text-danger">
            {error?.name}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">
            Surname
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            ref={surName}
          />
          <div id="nameHelp" className="form-text text-danger">
            {error?.surName}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="mail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="mail"
            ref={eMail}
          />
          <div id="nameHelp" className="form-text text-danger">
            {error?.eMail}
          </div>
        </div>

        <label className="form-label">
          <b> Languages:</b>
        </label>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="telugu"
            value='telugu'
            ref={telugu}
          />
          <label className="form-check-label" htmlFor="telugu">
            Telugu
          </label>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="english"
            value='english'
            ref={english}
          />
          <label className="form-check-label" htmlFor="english">
            English
          </label>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="hindi"
            value='hindi'
            ref={hindi}
          />
          <label className="form-check-label" htmlFor="hindi">
            Hindi
          </label>
          <div id="languageHelp" className="form-text text-danger">
            {error?.language}
          </div>
        </div>

        <label className="form-label">
          <b> Gender:</b>
        </label>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="female"
            value='female'
            ref={female}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Female
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="male"
            value='male'
            ref={male}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
          <div id="languageHelp" className="form-text text-danger">
            {error?.gender}
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </>
  );
}
