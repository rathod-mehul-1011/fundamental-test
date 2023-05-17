import React from "react";
import { useSelector } from "react-redux";

const PostModal = (props) => {
  const { post, users } = props;

  const comments = useSelector((state) => state.postReducer.comments);
  console.log("comments", comments);

  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {post.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body ms-20px">
            <p className="mb-0">{post.body}</p>
            <p className="mb-0 mt-2 fw-bold">
              Author : <span>{users[post.userId]?.username || "--"}</span>
            </p>
            <hr />
            <p className="fw-bold">Comments</p>
            <div className="comment-card">
            {comments.map((comment) => {
              return (
                <div className="item-card">
                  <h3 className="post-title">{comment.name}</h3>
                  <p className="mb-0 post-desc">{comment.body}</p>
                  <p className="mb-0 text-secondary post-author">
                    {comment.email}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
