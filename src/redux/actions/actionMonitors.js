import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
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
    type: typesMonitors.LIST_MONITORS,
    payload: monitors,
  };
};

export const getMonitorsAsync = () => {
  return async (dispatch) => {
    const collectionMonitors = collection(db, "monitors");
    const q = query(collectionMonitors, orderBy("name", "asc"));
    const orderMonitors = await getDocs(q);
    const monitors = [];
    orderMonitors.forEach((monitor) => {
      monitors.push({
        ...monitor.data(),
      });
    });
    dispatch(getMonitorSync(monitors));
  };
};

// const searchMonitorSync = (monitor) => {
//   return {
//     type: typesMonitors.SEARCH_MONITORS,
//     payload: monitor,
//   };
// };

// export const searchMonitorAsync = (monitor) => {
//   return async (dispatch) => {
//     const collectionMonitors = collection(db, "monitors");
//     const q = query(
//       collectionMonitors,
//       where("name", ">=", monitor),
//       where("name", "<=", monitor + "~")
//     );
//     const data = await getDocs(q);
//     const monitors = [];
//     data.forEach((monitor) => {
//       monitors.push({
//         ...monitor.data(),
//       });
//     });
//     dispatch(searchMonitorSync(monitors));
//   };
// };

export const editMonitorSync = (monitor) => {
  return {
    type: typesMonitors.UPDATE_MONITOR,
    payload: monitor,
  };
};

export const editMonitorAsync = (monitor) => {
  return async (dispatch) => {
    const collectionMonitors = collection(db, "monitors");
    const q = query(collectionMonitors, where("email", "==", monitor.email));
    const data = await getDocs(q);
    let id = "";
    data.forEach(async (monitor) => {
      id = monitor.id;
    });
    const docRef = doc(db, "monitors", id);
    await updateDoc(docRef, monitor)
      .then(() => {
        dispatch(editMonitorSync(monitor));
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(getMonitorsAsync());
  };
};

const deleteMonitorSync = (monitor) => {
  return {
    type: typesMonitors.DELETE_MONITOR,
    payload: monitor,
  };
};

export const deleteMonitorAsync = (monitor) => {
  return async (dispatch) => {
    const collectionMonitors = collection(db, "monitors");
    const q = query(collectionMonitors, where("email", "==", monitor));
    const data = await getDocs(q);
    data.forEach((monitor) => {
      deleteDoc(doc(db, "monitors", monitor.id));
    });
    dispatch(deleteMonitorSync(monitor));
    dispatch(getMonitorsAsync());
  };
};
