import { chatHistoryType, PromptRunType } from "@/app/schema/types";
import { PromptRun } from "@/gemini/prompt";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  user: { name: "Riddler" },
  data: [] as chatHistoryType[],
  input: "",
  loading: false
};

export const handleSubmitPhrase = createAsyncThunk(
  "riddler/handlePharseSubmit",
  async ({ chatHistory, phrase }: PromptRunType) => {
    // console.log("Phrase submitted: ", phrase, chatHistory);
    const ans = await PromptRun({ chatHistory, phrase });
    return ans;
  }
);

// Create a slice
const yourSlice = createSlice({
  name: "riddler",
  initialState,
  reducers: {
    // Define your actions here
    setInput: (state, action) => {
      state.input = action.payload;
      state.data = [
        ...state.data,
        { role: "user", parts: [{ text: action.payload }] }
      ];
      state.loading = true;
    },
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
    }
  },

  extraReducers: (builder) => {
    // Add extra reducers here
    builder.addCase(handleSubmitPhrase.fulfilled, (state, action) => {
      // console.log("fulfilled", action.payload);
      state.data = [
        ...state.data,
        { role: "model", parts: [{ text: action.payload }] }
      ];
      state.input = "";
      state.loading = false;
    });
  }
});

// Export the actions and reducer
export const { setInput, addData } = yourSlice.actions;
export const riddlerReducer = yourSlice.reducer;
export const riddlerData = (state: any) => state.riddler;
