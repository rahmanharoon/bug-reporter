import {
  ADD_BUG,
  GET_BUGS,
  BUGS_ERROR,
  DELETE_BUG,
  UPDATE_BUG,
  SET_LOADING,
  SEARCH_BUGS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

export const getBugs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/bugs");
    const data = await res.json();

    dispatch({
      type: GET_BUGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const addBug = (bug) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/bugs", {
      method: "POST",
      body: JSON.stringify(bug),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_BUG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const deleteBug = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/bugs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_BUG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const editBug = (bug) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/bugs/${bug.id}`, {
      method: "PUT",
      body: JSON.stringify(bug),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.json();
    dispatch({
      type: UPDATE_BUG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const searchBugs = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(`/bugs?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_BUGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: BUGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const setCurrentBug = (bug) => {
  return {
    type: SET_CURRENT,
    payload: bug,
  };
};

export const clearCurrentBug = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
