import { all, fork } from "redux-saga/effects";
import axios from "axios";
import dotenv from "dotenv";

// import userSaga from "./userSaga";
// import postSaga from "./postSaga";
// import profileSaga from "./profileSage"
// import mypageSaga from "./mypageSaga"
// import applySaga from "./applySaga"
// import reportSaga from "./reportSaga"


dotenv.config();

// 서버와 통신하는 부분 
axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

export default function* rootSaga() {
  yield all([]);
}
