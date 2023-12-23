import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { error } from "notifications/notiflixInit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const notifyError = (message) => {
  error(message);
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("users/signup", credentials);

      setAuthHeader(data.token);
      return data;
    } catch (error) {
      console.log(error);
      notifyError(
        "Your password must include at least 7 symbols and one uppercase letter"
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("users/login", credentials);

      setAuthHeader(data.token);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const { data } = await axios.post("users/logout");
    clearAuthHeader();
    return data;
  } catch ({ message }) {
    return thunkApi.rejectWithValue(message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;

  if (!token) return thunkApi.rejectWithValue("No token");

  setAuthHeader(token);

  try {
    const { data } = await axios.get("users/current");
    return data;
  } catch ({ message }) {
    return thunkApi.rejectWithValue(message);
  }
});
