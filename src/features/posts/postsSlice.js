import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post", content: "More text" }
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // handles creation of posts (adds to state).
    // createSlice automatically generates the action.
    postAdded(state, action) {
      // state will only will only be the node 'posts' as this is all this slice knows about.
      // action (.payload) will be the post object.)
      // immer library is converting state change into an immutable update.
      state.push(action.payload);
    }
  }
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
