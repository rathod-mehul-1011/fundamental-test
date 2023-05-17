import React from "react";

import "./App.css";
import Items from "./pages/Items";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { PostReducer } from "./store/post/post.reducer";
import thunk from "redux-thunk";

const App = () => {
  const rootReducers = combineReducers({
    postReducer: PostReducer,
  });

  const store = createStore(rootReducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
