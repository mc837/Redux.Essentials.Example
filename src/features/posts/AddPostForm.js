import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

export const AddPostForm = () => {
  // use dispatch has to be defined inside function.
  const dispatch = useDispatch();
  // use state - hook allows local state to be used inside a component.
  // use state creates a state variable.
  // only inital value is passed to useState(<initial>).
  // title (key) is becomes a state variable.
  const [title, setTitle] = useState("");
  // use state returns to values the current state and an update function.
  // [current value, update value]
  // this delare these as variables.
  const [content, setContent] = useState("");

  // set local state values from event.
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          // values from local state (useState).
          title,
          content
        })
      );

      // reset local state values.
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};
