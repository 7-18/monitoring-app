import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { typesMonitors } from "../types/types";

const addMonitorSync = (monitor) => {
  return {
    type: typesMonitors.ADD_MONITOR,
    payload: monitor,
  };
};

export const addMonitorAsync = (monitor) => {
  return async (dispatch) => {
    addDoc(collection(db, "monitors"), monitor)
      .then((doc) => {
        dispatch(addMonitorSync(monitor));
        dispatch(getMonitorsAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getMonitorSync = (monitors) => {
  return {
    type: typesMonitors.GET_MONITORS,
    payload: monitors,
  };
};
