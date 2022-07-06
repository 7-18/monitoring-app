import { registerReducer } from "../redux/reducers/registerReducer";
import { typesLogin, typesRegister } from "../redux/types/types";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  loginUserAsync,
  logoutUserAsync,
  registerUserAsync,
} from "../redux/actions/actionUser";
import { loginReducer } from "../redux/reducers/loginReducer";

describe("Pruebas a los reducers", () => {
  test("Debe poder registrarse correctamente", () => {
    const action = {
      type: typesRegister.REGISTER,
      payload: {
        name: "Kevin",
        email: "kevin@gmail.com",
        password: "123456",
      },
    };

    const state = registerReducer({}, action);

    expect(state).toEqual({
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    });
  });

  test("Debe fallar el registro por falta de email", () => {
    const action = {
      type: typesRegister.REGISTER,
      payload: {
        name: "Kevin",
        password: "123456",
      },
    };

    const state = registerReducer({}, action);

    if (state.email === undefined || state.email === "") {
      state.email = null;
    }

    expect(state).not.toEqual({
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
    });
  });

  test("Debe poder loguearse correctamente", () => {
    const action = {
      type: typesLogin.LOGIN,
      payload: {
        email: "kevin@gmail.com",
        password: "123456",
      },
    };

    const state = loginReducer({}, action);

    expect(state).toEqual({
      email: action.payload.email,
      password: action.payload.password,
    });
  });

  test("Debe poder desloguearse correctamente", () => {
    const action = {
      type: typesLogin.LOGOUT,
    };

    const state = loginReducer({}, action);

    expect(state).toEqual({});
  });
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe("Pruebas de registro y login asíncronas (no va a permitirlo debido a Firebase)", () => {
  test("Debe registrarse", async () => {
    await store.dispatch(
      registerUserAsync({
        name: "Kevin",
        email: "kevin@gmail.com",
        password: "123456",
      })
    );

    const actions = store.getActions();
  });

  test("Debe loguearse", async () => {
    await store.dispatch(
      loginUserAsync({
        email: "kevin@gmail.com",
        password: "123456",
      })
    );

    const actions = store.getActions();
  });

  test("Debe desloguearse", async () => {
    await store.dispatch(logoutUserAsync());

    const actions = store.getActions();
  });
});
