import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function Success() {
  return (
    <MuiThemeProvider>
        <React.Fragment>
            <h1>Thank you from submission</h1>
            <p>You will get email with further instructions</p>
        </React.Fragment>
    </MuiThemeProvider>
  )
}

export default Success;
