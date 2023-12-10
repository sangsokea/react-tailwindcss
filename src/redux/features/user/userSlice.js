import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../library/baseUrl";

const initialState = {
  user: {},
  status: "idle",
  error: null,
  authToken: {}
};

export const fetchCreateUser = createAsyncThunk(
  "user/fetchCreateUser",
  async ({ name, email, password }) => {
    let body = JSON.stringify({
      name,
      email,
      password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480",
    });

    const response = await fetch(BASE_URL + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const data = await response.json();

    return data;
  }
);

export const fetchLogin = createAsyncThunk(
    "user/fetchLogin",
    async ({email, password }) => {
      let body = JSON.stringify({
        email,
        password,
      });
      const response = await fetch(BASE_URL + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await response.json();
      return data;
    }
  );

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCreateUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    //   login
    .addCase(fetchLogin.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.authToken = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      ;
  },
});

export default userSlice.reducer;

// custom selector

export const selectAvatar = (state) => state?.user?.user?.avatar || "";
