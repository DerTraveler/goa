import _ from 'lodash';

import Auth from '@aws-amplify/auth';
import { LogInMethod } from '../components/pages/SignIn';

Auth.configure({
  region: process.env.REACT_APP_REGION,
  userPoolId: process.env.REACT_APP_USER_POOL_ID,
  userPoolWebClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID,
});

const data = {
  currentUser: null,
};

export const signIn: LogInMethod = async ({ user, password }) => {
  try {
    data.currentUser = await Auth.signIn(user, password);
    return { success: true };
  } catch (error) {
    if (_.includes(['NotAuthorizedException'], error.code)) {
      return { success: false, passwordError: error.message };
    }
    return { success: false, userError: error.message };
  }
};

export const isSignedIn = async () => {
  if (data.currentUser) {
    return true;
  }

  try {
    data.currentUser = await Auth.currentAuthenticatedUser();
    return true;
  } catch (error) {
    return false;
  }
};
