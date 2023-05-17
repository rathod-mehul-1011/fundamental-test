import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_USERS = "GET_USERS";
export const GET_COMMENTS = "GET_COMMENTS";
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const getPosts = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    var posts = response.data.map((post) => ({ ...post, isFavorite: false }));

    try {
      dispatch({
        type: GET_POSTS,
        value: posts,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    var users = {};
    response.data.forEach((user) => {
      users[user.id] = user;
    });

    try {
      dispatch({
        type: GET_USERS,
        value: users,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const toggleFavorite = (post) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: TOGGLE_FAVORITE,
                value: post
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const getComments = (id) => {

  return async (dispatch) => {
    
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    try {
        dispatch({
          type: GET_COMMENTS,
          value: response.data,
        })
    } catch (error) {
      console.log('error', error)
    }
    
  }
  
}