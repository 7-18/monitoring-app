const initialState = {
  monitors: [],
};

export const monitorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MONITOR:
      return {
        monitors: [...state.monitors, action.payload],
      };
    case types.GET_MONITORS:
      return {
        monitors: [...action.payload],
      };
    case types.DELETE_MONITOR:
      return {
        monitors: state.monitors.filter(
          (monitor) => monitor.id !== action.payload
        ),
      };
    case types.UPDATE_MONITOR:
      return {
        monitors: [...state.monitors],
      };
    default:
      return state;
  }
};
