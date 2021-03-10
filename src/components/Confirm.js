import React from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, List, ListItem, RaisedButton } from 'material-ui';
function Confirm({nextStep, backStep, values}) {
    const styles = {
        button:{
          margin: '10px',
        }
    }
  return (
    <MuiThemProvider>
      <React.Fragment>
        <AppBar style={{marginBottom: '10px'}} title="Confirmation" />
        <List>
          <ListItem primaryText="First Name" secondaryText={values.firstName} />
          <ListItem primaryText="Last Name" secondaryText={values.lastName} />
          <ListItem primaryText="Email" secondaryText={values.email} />
          <ListItem primaryText="Occupation" secondaryText={values.occupation} />
          <ListItem primaryText="City" secondaryText={values.city} />
          <ListItem primaryText="Bio" secondaryText={values.bio} />
        </List>
        <RaisedButton label="Continue" onClick={nextStep} primary={true} style={styles.button}/>
        <RaisedButton label="Back" onClick={backStep} primary={false} style={styles.button}/>
      </React.Fragment>
    </MuiThemProvider>
  );
}

export default Confirm;