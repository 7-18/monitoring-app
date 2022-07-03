import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
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
        dispatch(getMonitoringAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const getMonitoringSync = (monitoring) => {
  return {
    type: typesMonitoring.LIST_MONITORING,
    payload: monitoring,
  };
};

export const getMonitoringAsync = () => {
  return async (dispatch) => {
    const collectionMonitoring = collection(db, "monitoring");
    const q = query(collectionMonitoring, orderBy("subject", "asc"));
    const orderMonitoring = await getDocs(q);
    const subjects = [];
    orderMonitoring.forEach((monitoring) => {
      subjects.push({
        ...monitoring.data(),
      });
    });
    dispatch(getMonitoringSync(subjects));
  };
};
