import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

interface PropsType {
  children: React.ReactNode;
}

const BaseTemplate = ({ children }: PropsType) => (
  <React.Fragment>
    <CssBaseline />
    {children}
  </React.Fragment>
);

export default BaseTemplate;
