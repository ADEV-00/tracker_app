import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const ress = await trackerAPI.post("/signup", { email, password });
      console.log(ress.data);
    } catch (err) {
      console.log(err.ress.data);
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);
