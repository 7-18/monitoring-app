import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { typesLogin, typesRegister } from "../types/types";

const actionRegisterUserSync = (name, email, password) => {
  return {
    type: typesRegister.REGISTER,
    payload: {
      name,
      email,
      password,
    },
  };
};

export const actionRegisterUserAsync = (name, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        dispatch(actionRegisterUserSync(name, email, password));
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

const actionLogoutUserSync = () => {
  return {
    type: typesLogin.LOGOUT,
  };
};

export const actionLogoutUserAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(({ user }) => {
        dispatch(actionLogoutUserSync());
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
        dispatch(actionRegisterUserSync(user.displayName, user.email));
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
        dispatch(actionRegisterUserSync(user.displayName, user.email));
      })
      .catch((error) => {
        console.warn("Coordinador no autorizado", error);
      });
  };
};
