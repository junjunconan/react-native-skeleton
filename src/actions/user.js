// @flow

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = () => ({
  type: SIGN_IN,
  payload: {
    accessToken: 'abc',
  }
});

export const signOut = () => ({
  type: SIGN_OUT,
});
