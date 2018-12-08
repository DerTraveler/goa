import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import LoginForm from './LoginForm';

storiesOf('LoginForm', module).add('default', () => (
  <LoginForm
    onSubmit={action('login')}
    userError={boolean('User error', false) ? 'User invalid' : ''}
    passwordError={boolean('Password error', false) ? 'Wrong password' : ''}
  />
));
