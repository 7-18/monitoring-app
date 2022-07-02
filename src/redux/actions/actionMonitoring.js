import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { typesMonitoring } from "../types/types";

const addMonitoringSync = (monitoring) => {
  return {
    type: typesMonitoring.ADD_MONITORING,
    payload: monitoring,
  };
};

export const addMonitoringAsync = (monitoring) => {
  return async (dispatch) => {
    addDoc(collection(db, "monitoring"), monitoring)
      .then((doc) => {
        dispatch(addMonitoringSync(monitoring));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
