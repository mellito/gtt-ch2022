import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCharacter from "../../infrastructure/api";

export const initialState = { loading: false, CharacterData: [] };

export const allCharacters = createAsyncThunk(
  "home/allCharacters",
  async (data, { rejectWithValue }) => {
    try {
      const reponse = await getCharacter();
      return reponse;
    } catch (error) {
      return rejectWithValue;
    }
  },
);

const Home = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [allCharacters.pending]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = true;
    },
    [allCharacters.rejected]: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
    },
    [allCharacters.fulfilled]: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.loading = false;
      // eslint-disable-next-line no-param-reassign
      state.CharacterData = payload.results;
    },
  },
});

export default Home.reducer;
