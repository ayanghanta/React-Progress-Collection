import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

const initialState = {
  userName: "",
  locationStatus: "idle",
  address: "",
  position: {},
  error: "",
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  const prositionObj = await getPosition();
  const { latitude: lat, longgitude: lng } = prositionObj.coords;

  const addressObj = await getAddress(lat, lng);

  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  return { position: { lat, lng }, address };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.locationStatus = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.locationStatus = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.locationStatus = "error";
        state.error = `Can't get your current location`;
      });
  },
});

export const { createUser } = userSlice.actions;

export default userSlice.reducer;
