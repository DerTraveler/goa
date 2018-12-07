import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, HandlerFunction } from '@storybook/addon-actions';

import SignIn from './SignIn';

const promisify = (action: HandlerFunction) => (...args: any[]) => Promise.resolve(action(...args));

storiesOf('SignIn', module).add('default', () => <SignIn onLogin={promisify(action('login'))} />);
