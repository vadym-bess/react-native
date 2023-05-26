import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config.js";

export const authSignUpUser = (email, password) => {
  const authInstance = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
};

// export const authSignUpUser =
//   ({ email, password, name }) =>
//   async (dispatch, getState) => {
//     try {
//       const user = await auth
//         .auth()
//         .createUserWithEmailAndPassword(email, password);
//       console.log("user-->", user);
//     } catch (error) {
//       const errorCode = error.code;
//       console.log(errorCode);
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     }
//   };

// export const authSignInUser = () => async (dispatch, getState) => {};

// export const authSignOutUser = () => async (dispatch, getState) => {};
