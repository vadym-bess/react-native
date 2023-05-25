import { auth } from "../../firebase/config.js";

export const authSignUpUser =
  ({ email, password, name }) =>
  async (dispatch, getState) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
      console.log("user-->", user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

export const authSignInUser = () => async (dispatch, getState) => {};

export const authSignOutUser = () => async (dispatch, getState) => {};
