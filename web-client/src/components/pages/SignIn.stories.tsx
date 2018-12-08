import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import SignIn, { LoginSuccess, LoginError } from './SignIn';

storiesOf('SignIn', module).add('default', () => {
  const value = select(
    'Sign in result',
    { Success: 'success', 'Unknown user': 'user fail', 'Wrong password': 'password fail' },
    'success',
  );
  let result: LoginSuccess | LoginError;
  if (value == 'success') {
    result = { success: true, userInfo: 'abc' };
  } else if (value == 'user fail') {
    result = { success: false, userError: 'Unknown user' };
  } else if (value == 'password fail') {
    result = { success: false, passwordError: 'Wrong password' };
  }
  return <SignIn onLogin={() => Promise.resolve(result)} />;
});
