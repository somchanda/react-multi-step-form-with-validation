import React, { useEffect } from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, TextField } from 'material-ui';
function UserDetail({ handleChange, values, nextStep, errors }) {
  const styles = {
    button: {
      margin: '10px',
    }
  }
  useEffect(()=>{
    // console.log(errors);
  });
  return (
    <MuiThemProvider>
      <React.Fragment>
        <AppBar style={{ marginBottom: '10px' }} title="User Detail" />
        <TextField
          {...(errors.firstName && {errorText: `${errors.firstName}`})}
          floatingLabelText="First Name"
          defaultValue={values.firstName}
          name="firstName"
          onChange={(e) => handleChange(e)}
          hintText="Please enter fisrt name" /><br />
        <TextField 
          {...(errors.lastName && {errorText: `${errors.lastName}`})}
          floatingLabelText="Last Name" 
          defaultValue={values.lastName} 
          name="lastName" 
          onChange={(e) => handleChange(e)} 
          hintText="Please enter last name" /><br />
        <TextField 
          {...(errors.email && {errorText: `${errors.email}`})}
          floatingLabelText="Email" 
          defaultValue={values.email} 
          name="email" 
          onChange={(e) => handleChange(e)} 
          hintText="Please enter email" /><br />
        <RaisedButton 
          label="Continue" 
          onClick={nextStep} 
          primary={true} 
          style={styles.button} />
      </React.Fragment>
    </MuiThemProvider>
  );
}

export default UserDetail;
