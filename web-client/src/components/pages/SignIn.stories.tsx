import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import SignIn from './SignIn';

storiesOf('SignIn', module).add('default', () => {
  const value = select('Sign in result', { Success: 'success', 'Failed login': 'fail' }, 'success');
  let result: Promise<any>;
  if (value == 'success') {
    result = Promise.resolve({ email: 'test' });
  } else {
    result = Promise.reject({ error: 'error' });
  }
  return <SignIn onLogin={() => result} />;
});
