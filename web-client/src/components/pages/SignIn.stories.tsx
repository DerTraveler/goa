import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SignIn from './SignIn';

storiesOf('SignIn', module).add('default', () => <SignIn onLogin={action('login')} />);
