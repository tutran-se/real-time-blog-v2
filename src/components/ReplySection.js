import React, { useContext } from "react";
import PostContext from "../context/PostContext";
import { createOneNotification } from "../libs/notification";
import { createOneReply } from "../libs/reply";
import ReplyList from "./ReplyList";
import TextAreaForm from "./TextAreaForm";
const ReplySection = ({
  openReplyForm,
  setOpenReplyForm,
  commentId,
  comment,
}) => {
  const { post } = useContext(PostContext);
  const postId = post.id;
  // console.log(postId);
  const handleReplySubmit = (content) => {
    // Test
    console.log(content);
    createOneReply({ content, postId, commentId });

    // Create notification
    createOneNotification({
      postId,
      postSlugify: post.slugify,
      receiverId: comment.uid,
      type: "reply",
    });

    setOpenReplyForm(false);
  };
  return (
    <div>
      <div className="reply-form">
        {openReplyForm && (
          <TextAreaForm handleFormSubmit={handleReplySubmit} id={commentId} />
        )}
      </div>
      <ReplyList commentId={commentId} comment={comment} />
    </div>
  );
};

export default ReplySection;
