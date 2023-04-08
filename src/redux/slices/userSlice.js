import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

export const getMyInfo = createAsyncThunk("getMyInfo", async () => {
  const res = await axiosClient.get("/user/getMyInfo", {
    withCredentials: true,
  });
  return res.data;
});
const userSlice = createSlice({
  name: "myProfile",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getMyInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(getMyInfo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMyInfo.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
