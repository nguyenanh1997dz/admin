import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import customerService from "./customerService";

export const getUsers = createAsyncThunk("customer/get-customers", async () => {
  try {
    const data = await customerService.getUsers();
    return data;
  } catch (error) {
    throw error; // Ném lỗi để xử lý ở lớp cao nhất
  }
});
const initialState = {
  customers: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customers = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default customerSlice.reducer;