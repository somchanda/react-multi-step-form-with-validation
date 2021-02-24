import React, {useState} from 'react';
import "./App.css"
import Confirm from './components/Confirm';
import Success from './components/Success';
import UserDetail from './components/UserDetail';
import UserPersonalDetail from './components/UserPersonalDetail';
function App() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState({firstName: '', lastName: '', email: '', occupation: '', city: '', bio: ''});
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const nextStep = () => {
    setStep(prevStep => (prevStep + 1));
  }

  const backStep = () => {
    setStep(prevStep => (prevStep - 1));
  }

  switch(step){
    case 0:
      return <UserDetail handleChange={handleChange} nextStep={nextStep} state={state} />
    case 1:
      return <UserPersonalDetail handleChange={handleChange} nextStep={nextStep} backStep={backStep} state={state} />
    case 2:
      return <Confirm nextStep={nextStep} backStep={backStep} state={state} />
    case 3:
      return <Success />;
    default:
      break;
  }
}

export default App;
