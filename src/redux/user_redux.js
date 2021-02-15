//액션타입
// USER TYPES
export const SET_USER = "SET_USER";

//액션함수
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

//리듀서
const initialUserState = {
  currentUser: null,
  isLoading: true,
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
