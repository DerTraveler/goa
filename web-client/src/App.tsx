import React from 'react';
import SignIn from './components/pages/SignIn';
import { signIn } from './lib/authentication';

const App = () => <SignIn onLogin={signIn} />;

export default App;
