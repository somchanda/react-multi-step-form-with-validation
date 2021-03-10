import React from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, RaisedButton, TextField } from 'material-ui';
function UserPersonalDetail({handleChange , backStep, nextStep, values, errors}) {
    const styles = {
        button:{
          margin: '10px',
        }
    }
  return (
    <MuiThemProvider>
      <React.Fragment>
        <AppBar style={{marginBottom: '10px'}} title="User Personal Detail" />
        <TextField 
          {...(errors.occupation && {errorText: `${errors.occupation}`})}
          floatingLabelText="Occupation" 
          defaultValue={values.occupation} 
          name="occupation" onChange={e => 
          handleChange(e)} hintText="Please enter occupation" /><br />
        <TextField 
          {...(errors.city && {errorText: `${errors.city}`})}
          floatingLabelText="City" 
          defaultValue={values.city} 
          name="city" onChange={e => 
          handleChange(e)} hintText="Please city" /><br />
        <TextField 
          {...(errors.bio && {errorText: `${errors.bio}`})}
          floatingLabelText="Bio" 
          defaultValue={values.bio} 
          name="bio" onChange={e => 
          handleChange(e)} hintText="Please Bio" /><br />
        <RaisedButton label="Continue" onClick={nextStep} primary={true} style={styles.button}/>
        <RaisedButton label="Back" onClick={backStep} primary={false} style={styles.button}/>
      </React.Fragment>
    </MuiThemProvider>
  );
}

export default UserPersonalDetail;