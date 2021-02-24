import React from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, TextField } from 'material-ui';
function UserDetail({ handleChange, state, nextStep }) {
  const styles = {
    button: {
      margin: '10px',
    }
  }
  return (
    <MuiThemProvider>
      <React.Fragment>
        <AppBar style={{ marginBottom: '10px' }} title="User Detail" />
        <TextField
          floatingLabelText="First Name"
          defaultValue={state.firstName}
          name="firstName"
          onChange={(e) => handleChange(e)}
          hintText="Please enter fisrt name" /><br />
        <TextField 
          floatingLabelText="Last Name" 
          defaultValue={state.lastName} 
          name="lastName" 
          onChange={(e) => handleChange(e)} 
          hintText="Please enter last name" /><br />
        <TextField 
          floatingLabelText="Email" 
          defaultValue={state.email} 
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
