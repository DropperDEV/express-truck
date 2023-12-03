import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  cpf: "",
  adress: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    updatedEmail(state, action) {
      state.email = action.payload;
    },
    updatedPhone(state, action) {
      state.phone = action.payload;
    },
    updatedAdress(state, action) {
      state.adress = action.payload;
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
  updatedAdress,
  updatedCPF,
  updatedPassword,
} = userSlice.actions;

export default userSlice.reducer;
