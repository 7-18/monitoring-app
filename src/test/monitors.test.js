import { monitorsReducer } from "../redux/reducers/monitorsReducer";
import { typesMonitors } from "../redux/types/types";

describe("Pruebas de agregar, editar, enlistar y eliminar monitores", () => {
  test("Debe poder agregar un monitor correctamente", async () => {
    const initialState = {
      monitors: [],
    };

    const action = {
      type: typesMonitors.ADD_MONITOR,
      payload: {
        name: "Kevin",
        email: "kevin@gmail.com",
        academic_program: "Ingeniería de Software",
        semester: "V",
        dni: "123456",
        phone: "123456789",
      },
    };

    const state = monitorsReducer(initialState, action);

    expect(state).toEqual({
      monitors: [...initialState.monitors, action.payload],
    });
  });

  test("Debe poder enlistar los monitores correctamente", async () => {
    const initialState = {
      monitors: [],
    };

    const action = {
      type: typesMonitors.LIST_MONITORS,
      payload: [
        {
          name: "Kevin",
          email: "kevin@gmail.com",
          academic_program: "Ingeniería de Software",
          semester: "V",
          dni: "123456",
          phone: "123456789",
        },
        {
          name: "Brian",
          email: "brian@gmail.com",
          academic_program: "Administración de Empresas",
          semester: "X",
          dni: "654321",
          phone: "987654321",
        },
      ],
    };

    const state = monitorsReducer(initialState, action);

    expect(state).toEqual({
      monitors: [...action.payload],
    });
  });

  test("Debe poder eliminar un monitor correctamente", async () => {
    const initialState = {
      monitors: [
        {
          id: 1,
          name: "Kevin",
          email: "kevin@gmail.com",
          academic_program: "Ingeniería de Software",
          semester: "V",
          dni: "123456",
          phone: "123456789",
        },
        {
          id: 2,
          name: "Brian",
          email: "brian@gmail.com",
          academic_program: "Administración de Empresas",
          semester: "X",
          dni: "654321",
          phone: "987654321",
        },
      ],
    };

    const action = {
      type: typesMonitors.DELETE_MONITOR,
      payload: 1,
    };

    const state = monitorsReducer(initialState, action);

    expect(state).toEqual({
      monitors: state.monitors.filter(
        (monitor) => monitor.id !== action.payload
      ),
    });
  });
});
