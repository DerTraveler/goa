import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

const BaseTemplate = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    {children}
  </React.Fragment>
);

export default BaseTemplate;
