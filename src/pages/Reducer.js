import React, { useReducer } from "react";

function reducer(state = "", action) {
  switch (action.type) {
    case "ON_CHANGE":
      return action.payload;
    default:
      return state;
  }
}

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, "");

  const handelChange = (e) => {
    dispatch({ type: "ON_CHANGE", payload: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          onChange={handelChange}
          value={state}
          type="text"
          placeholder="usernames"
        />
      </form>
    </div>
  );
};

export default Reducer;
