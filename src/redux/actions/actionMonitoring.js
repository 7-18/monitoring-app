import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
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
        id: monitoring.id,
        ...monitoring.data(),
      });
    });
    dispatch(getMonitoringSync(subjects));
  };
};

const deleteMonitoringSync = (monitoring) => {
  return {
    type: typesMonitoring.DELETE_MONITORING,
    payload: monitoring,
  };
};

export const deleteMonitoringAsync = (id) => {
  return async (dispatch) => {
    const collectionMonitoring = collection(db, "monitoring");
    const q = query(collectionMonitoring);
    const data = await getDocs(q);
    data.forEach((monitoring) => {
      if (monitoring.id === id) {
        deleteDoc(doc(db, "monitoring", id));
      }
    });
    dispatch(deleteMonitoringSync(id));
    dispatch(getMonitoringAsync());
  };
};
