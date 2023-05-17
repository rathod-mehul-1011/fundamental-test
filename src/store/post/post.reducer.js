import { GET_COMMENTS, GET_POSTS, GET_USERS, TOGGLE_FAVORITE } from "./post.action";

const inialValue = {
  posts: [],
  users: {},
  comments: [],
};

export const PostReducer = (state = inialValue, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.value };

    case GET_USERS:
      return { ...state, users: action.value };

    case TOGGLE_FAVORITE:
      const clonePosts = [...state.posts];

      let postIndex = clonePosts.findIndex((post) => post.id == action.value);

      if (postIndex !== -1) {
        clonePosts[postIndex].isFavorite = !clonePosts[postIndex].isFavorite;
      }

      return {
        ...state,
        posts: clonePosts,
      };

    case GET_COMMENTS:
      return { ...state, comments: action.value };

    default:
      return state;
  }
};
