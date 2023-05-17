import React from "react";
import Like from "../../assets/images/heart.png";
import Dislike from "../../assets/images/love.png";

import './PostCard.css'
import { useDispatch } from "react-redux";
import { getComments, toggleFavorite } from "../../store/post/post.action";

const PostCard = (props) => {
  const { post, users } = props;
  const dispatch = useDispatch()
  
  const toggleHandler = () => {
    dispatch(toggleFavorite(post.id));
  }
  
  
  return (
    <div className="d-flex align-items-center new-item-card">
      <div
        className="item-card"
        data-bs-toggle={props.databstoggle}
        data-bs-target={props.databstarget}
        onClick={() => dispatch(getComments(post.id))}
      >
        <h3 className="post-title">{post.title}</h3>
        <p className="mb-0 post-desc">{post.body}</p>
        <p className="mb-0 text-secondary post-author">Author : {users[post.userId]?.username || '--'}</p>
      </div>
      <div className="item-icon-pos">
        <img
          src={post.isFavorite ? Like : Dislike}
          className="item-icon"
            onClick={toggleHandler}
          alt=""
        />
      </div>
    </div>
  );
};

export default PostCard;
