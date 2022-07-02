import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { monitoringReducer } from "../reducers/monitoringReducer";
import { monitorsReducer } from "../reducers/monitorsReducer";
import { registerReducer } from "../reducers/registerReducer";

const reducers = combineReducers({
  register: registerReducer,
  login: loginReducer,
  monitors: monitorsReducer,
  subjects: monitoringReducer,
});

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
