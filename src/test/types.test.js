import {
  typesLogin,
  typesMonitoring,
  typesMonitors,
  typesRegister,
} from "../redux/types/types";

describe("Verificamos si los tipos de datos son correctos", () => {
  test("Validamos los tipos de typesRegister", () => {
    expect(typesRegister).toEqual({
      REGISTER: "REGISTER",
    });
  });

  test("Validamos los tipos de typesLogin", () => {
    expect(typesLogin).toEqual({
      LOGIN: "LOGIN",
      LOGOUT: "LOGOUT",
    });
  });

  test("Validamos los tipos de typesMonitors", () => {
    expect(typesMonitors).toEqual({
      LIST_MONITORS: "LIST OF MONITORS",
      ADD_MONITOR: "ADD MONITOR",
      DELETE_MONITOR: "DELETE MONITOR",
      UPDATE_MONITOR: "UPDATE MONITOR",
      SEARCH_MONITORS: "SEARCH MONITORS",
    });
  });

  test("Validamos los tipos de typesMonitoring", () => {
    expect(typesMonitoring).toEqual({
      LIST_MONITORING: "LIST OF MONITORING",
      ADD_MONITORING: "ADD MONITORING",
      DELETE_MONITORING: "DELETE MONITORING",
      UPDATE_MONITORING: "UPDATE MONITORING",
      SEARCH_MONITORING: "SEARCH MONITORING",
    });
  });
});
