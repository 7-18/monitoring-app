import { typesMonitors } from "../types/types";

const initialState = {
  monitors: [],
};

export const monitorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesMonitors.ADD_MONITOR:
      return {
        monitors: [...state.monitors, action.payload],
      };
    case typesMonitors.LIST_MONITORS:
      return {
        monitors: [...action.payload],
      };
    case typesMonitors.DELETE_MONITOR:
      return {
        monitors: state.monitors.filter(
          (monitor) => monitor.id !== action.payload
        ),
      };
    case typesMonitors.UPDATE_MONITOR:
      return {
        monitors: [...state.monitors],
      };
    case typesMonitors.SEARCH_MONITORS:
      return {
        monitors: action.payload,
      };
    default:
      return state;
  }
};
