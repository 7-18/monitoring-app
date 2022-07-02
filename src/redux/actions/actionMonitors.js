import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
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

export const getMonitorsAsync = () => {
  return async (dispatch) => {
    const collectionMonitors = await getDocs(collection(db, "monitors"));
    const monitors = [];
    collectionMonitors.forEach((monitor) => {
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
