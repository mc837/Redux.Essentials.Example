import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    // creats a posts node inside state
    posts: postsReducer
  }
});
