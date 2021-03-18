import React, { useContext } from "react";
import PostContext from "../context/PostContext";
import "../css/comment.css";
import { createOneComment } from "../libs/comment";
import { createOneNotification } from "../libs/notification";
import CommentList from "./CommentList";
import TextAreaForm from "./TextAreaForm";

const CommentSection = () => {
  const { post } = useContext(PostContext);
  const postId = post.id;
  //Test
  // console.log(postId);

  const handleCommentSubmit = (content) => {
    //test
    // console.log(content);

    createOneComment({ postId, content });

    createOneNotification({
      postId,
      postSlugify: post.slugify,
      receiverId: post.uid,
      type: "comment",
    });
  };
  return (
    <div className="comment-section">
      <h2 style={{ color: "white", marginTop: "2rem" }}>Comments</h2>
      <TextAreaForm handleFormSubmit={handleCommentSubmit} />
      <CommentList />
    </div>
  );
};

export default CommentSection;
