import { combineReducers } from "redux";

import userReducer from "./user_redux";
// import chatRoom from "./chatRoom_reducer";

const rootReducer = combineReducers({
  userReducer,
  //   chatRoom,
});

export default rootReducer;
