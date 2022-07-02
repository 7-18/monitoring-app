import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { typesLogin, typesRegister } from "../types/types";

const registerUserSync = (name, email, password) => {
  return {
    type: typesRegister.REGISTER,
    payload: {
      name,
      email,
      password,
    },
  };
};

export const registerUserAsync = (name, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        dispatch(registerUserSync(name, email, password));
      })
      .catch((error) => {
        console.warn(error, "Coordinador no autorizado");
      });
  };
};

const loginUserSync = (email, password) => ({
  type: typesLogin.LOGIN,
  payload: {
    email,
    password,
  },
});

export const loginUserAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        dispatch(loginUserSync(email, password));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const logoutUserSync = () => {
  return {
    type: typesLogin.LOGOUT,
  };
};

export const logoutUserAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(({ user }) => {
        dispatch(logoutUserSync());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(async ({ user }) => {
        dispatch(registerUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        console.warn("Coordinador no autorizado", error);
      });
  };
};

export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(registerUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        console.warn("Coordinador no autorizado", error);
      });
  };
};
