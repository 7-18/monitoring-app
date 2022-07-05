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
        id: monitor.id,
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
    const q = query(collectionMonitors);
    const data = await getDocs(q);
    let id = "";
    data.forEach(async (mon) => {
      if (mon.id === monitor.id) {
        id = mon.id;
        updateDoc(doc(db, "monitors", id), monitor);
      }
    });
    dispatch(editMonitorSync(monitor));
    dispatch(getMonitorsAsync());
  };
};

const deleteMonitorSync = (monitor) => {
  return {
    type: typesMonitors.DELETE_MONITOR,
    payload: monitor,
  };
};

export const deleteMonitorAsync = (id) => {
  return async (dispatch) => {
    const collectionMonitors = collection(db, "monitors");
    const q = query(collectionMonitors, where("id", "==", id));
    const data = await getDocs(q);
    data.forEach((monitor) => {
      deleteDoc(doc(db, "monitors", monitor.id));
    });
    dispatch(deleteMonitorSync(id));
    dispatch(getMonitorsAsync());
  };
};
