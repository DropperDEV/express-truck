import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  cpf: "",
  address: "", // Corrected the typo in the property name
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: { // Corrected from "reducer" to "reducers"
    updatedEmail(state, action) {
      state.email = action.payload;
    },
    updatedPhone(state, action) {
      state.phone = action.payload;
    },
    updatedAddress(state, action) { // Corrected the typo in the function name
      state.address = action.payload;
    },
    updatedCPF(state, action) {
      state.cpf = action.payload;
    },
    updatedPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const {
  updatedEmail,
  updatedPhone,
  updatedAddress,
  updatedCPF,
  updatedPassword,
} = userSlice.actions;

export default userSlice.reducer;
