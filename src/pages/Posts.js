import React, { Fragment, useEffect, useState } from "react";
import Default from "../components/Deafault";
import PostCard from "../components/Posts/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, getUsers } from "../store/post/post.action";
import PostModal from "../components/Posts/PostModal";
import _ from "underscore";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const users = useSelector((state) => state.postReducer.users);

  const [showFavorites, setShowFavorites] = useState(false);
  const [fetchedPosts, setFetchedPosts] = useState(posts);

  const favoriteData = fetchedPosts.filter((post) => post.isFavorite);

  const filteredData = showFavorites ? favoriteData : fetchedPosts;

  const handleSort = (e) => {
    const sortValue = e.target.value;
    let sortedPosts = [...fetchedPosts];

    if (sortValue == "title") {
      sortedPosts = _.sortBy(sortedPosts, "title");
    } else if (sortValue == "body") {
      sortedPosts = _.sortBy(sortedPosts, "body");
    }
    setFetchedPosts(sortedPosts);
  };

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    setFetchedPosts(posts);
  }, [posts]);

  return (
    <Default>
      <div className="sticky d-flex justify-content-between align-items-center">
        <p className="mb-0 fw-bold flex-1">
          Favorite Posts : <span>{favoriteData.length}</span>
        </p>
        <div className="ms-auto me-2 d-inherit align-items-center">
          <p className="mb-0 text-nowrap me-2">Sort by : </p>
          <select
            defaultValue={""}
            className="form-select"
            onChange={handleSort}
          >
            <option value={""} disabled>
              Select
            </option>
            <option value={"title"}>Title</option>
            <option value={"body"}>Body</option>
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowFavorites(!showFavorites)}
        >
          {showFavorites ? "Show All" : "Show Favorites"}
        </button>
      </div>
      <div style={{ height: "80px" }}></div>
      {filteredData.length <= 0 ? (
        <div className="text-center pt-3">No data found!</div>
      ) : (
        <>
          {filteredData.map((post, i) => {
            return (
              <Fragment key={i}>
                <PostCard
                  post={post}
                  users={users}
                  databstoggle="modal"
                  databstarget={`#${i}`}
                />
                <PostModal id={i} post={post} users={users} />
              </Fragment>
            );
          })}
        </>
      )}
    </Default>
  );
};

export default Posts;
