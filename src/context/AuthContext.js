import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import tracker from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "signout":
      return { token: null, errorMessage: "" };
    case "restoreToken":
      return { ...state, userToken: action.token };
    default:
      return state;
  }
};

const getToken = (dispatch) => async () => {
  let userToken;
  try {
    userToken = await AsyncStorage.getItem("token");
  } catch (err) {
    console.log(errorMessage);
  }

  dispatch({ type: "restoreToken", token: userToken });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const ress = await trackerAPI.post("/signup", { email, password });
    await AsyncStorage.setItem("token", ress.data.token);
    dispatch({ type: "signup", payload: ress.data.token });
    console.log(ress.data.token);
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup",
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const ress = await trackerAPI.post("/signin", { email, password });
    await AsyncStorage.setItem("token", ress.data.token);
    dispatch({ type: "signin", payload: ress.data.token });
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with singin",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, getToken, signout },
  { token: null, errorMessage: "" }
);
