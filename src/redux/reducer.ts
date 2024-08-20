import { PromptRun } from "@/gemini/prompt";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface DataItem {
  phrase: string;
  answer: string;
}

// Define the initial state
const initialState = {
  user: { name: "Riddler" },
  data: [] as DataItem[] ,
  input: ""
};

// after this func completed, set input =''.
// export const handleSubmitPhrase = (phrase: string) => {
//   console.log("Phrase submitted: ", phrase);
// };

export const handleSubmitPhrase = createAsyncThunk(
  "riddler/handlePharseSubmit",
  async (phrase: string) => {
    console.log("Phrase submitted: ", phrase);
    const ans = await PromptRun(phrase);
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
      state.data = [...state.data, { phrase: action.payload, answer: "" }];
    },
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
    }
  },

  extraReducers: builder => {
    // Add extra reducers here
    builder.addCase(handleSubmitPhrase.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload);
      state.data[state.data.length - 1] = { phrase: state.input, answer: action.payload};
      state.input = "";
    });
  }
});

// Export the actions and reducer
export const { setInput, addData } = yourSlice.actions;
export const riddlerReducer = yourSlice.reducer;
export const riddlerData = (state:any) => state.riddler;
