import * as actions from "./actiontypes";
const initstate = {
  questions: [],
  authloading: false,
  token: null,
  authtoken: null,
  profile: null,
  profileloading: false,
};

const reducer = (state = initstate, action) => {
  switch (action.type) {
    case actions.ADDQUESTOSTATE:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    case actions.REMOVEQUESTIONS:
      return {
        ...state,
        questions: [],
      };
    case actions.AUTHLOADING:
      return {
        ...state,
        authloading: action.payload,
      };
    case actions.AUTHSUCCESS:
      return {
        ...state,
        token: action.payload.token,
        authtoken: action.payload.authtoken,
      };
    case actions.AUTHLOGOUT:
      return {
        ...state,
        token: null,
        authtoken: null,
      };
    case actions.PROFILELOADINGSUCCESS:
      return {
        ...state,
        profile: action.payload,
        profileloading: false,
      };
    case actions.PROFILELOADING:
      return {
        ...state,
        profileloading: true,
      };
    default:
      return state;
  }
};
export default reducer;
