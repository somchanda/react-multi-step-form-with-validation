import React from 'react';
import MuiThemProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, List, ListItem, RaisedButton } from 'material-ui';
function Confirm({nextStep, backStep, state}) {
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
          <ListItem primaryText="First Name" secondaryText={state.firstName} />
          <ListItem primaryText="Last Name" secondaryText={state.lastName} />
          <ListItem primaryText="Email" secondaryText={state.email} />
          <ListItem primaryText="Occupation" secondaryText={state.occupation} />
          <ListItem primaryText="City" secondaryText={state.city} />
          <ListItem primaryText="Bio" secondaryText={state.bio} />
        </List>
        <RaisedButton label="Continue" onClick={nextStep} primary={true} style={styles.button}/>
        <RaisedButton label="Back" onClick={backStep} primary={false} style={styles.button}/>
      </React.Fragment>
    </MuiThemProvider>
  );
}

export default Confirm;