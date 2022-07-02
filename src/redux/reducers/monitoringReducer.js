import { typesMonitoring } from "../types/types";

const initialState = {
  subjects: [],
};

export const monitoringReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesMonitoring.LIST_MONITORING:
      return {
        subjects: [...action.payload],
      };
    case typesMonitoring.ADD_MONITORING:
      return {
        subjects: [...state.subjects, action.payload],
      };
    default:
      return state;
  }
};
