import React, { useState } from 'react';
import "./App.css"
import Confirm from './components/Confirm';
import Success from './components/Success';
import UserDetail from './components/UserDetail';
import UserPersonalDetail from './components/UserPersonalDetail';
function App() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({ firstName: '', lastName: '', email: '', occupation: '', city: '', bio: '' });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target: { name, value } }) => {
    validation({ [name]: value });
    setValues(prevState => ({ ...prevState, [name]: value }));
  }

  const validation = (fieldValue = values) => {
    let temp = { ...errors };
    if ('firstName' in fieldValue) {
      temp.firstName = fieldValue.firstName.length < 3 ? "Minimum 3 characters required!" : "";
    }
    if ('lastName' in fieldValue) {
      temp.lastName = fieldValue.lastName.length < 3 ? "Minimum 3 characters required!" : "";
    }
    if ('email' in fieldValue) {
      temp.email = (/$^|.+@.+..+/).test(fieldValue.email) ? "" : "Email is invalid!";
    }
    if ('occupation' in fieldValue) {
      temp.occupation = fieldValue.occupation.length <= 0 ? "This field is required!" : "";
    }
    if ('city' in fieldValue) {
      temp.city = fieldValue.city.length <= 0 ? "This field is required!" : "";
    }
    if ('bio' in fieldValue) {
      temp.bio = fieldValue.bio.length <= 0 ? "This field is required!" : "";
    }
    setErrors({
      ...temp
    });
    return Object.values(temp).every(x => x === "");
  }

  const nextStep = () => {
    let allowedField = [];
    if (step === 0) {
      allowedField = ['firstName', 'lastName', 'email'];
    } else if (step === 1) {
      allowedField = ['occupation', 'city', 'bio'];
    }
    let newValues = Object.keys(values)
      .filter(key => allowedField.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});
    console.log(newValues);
    let isValid = validation(newValues);
    if (isValid) {
      setStep(prevStep => (prevStep + 1));
    }
  }

  const backStep = () => {
    setStep(prevStep => (prevStep - 1));
    setErrors({});
  }

  switch (step) {
    case 0:
      return <UserDetail handleChange={handleChange} nextStep={nextStep} errors={errors} values={values} />
    case 1:
      return <UserPersonalDetail handleChange={handleChange} nextStep={nextStep} backStep={backStep} values={values} errors={errors} />
    case 2:
      return <Confirm nextStep={nextStep} backStep={backStep} values={values} />
    case 3:
      return <Success />;
    default:
      break;
  }
}

export default App;
