import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PostContext from "../context/PostContext";
import { GetOnePost } from "../hooks/post";
import CommentSection from "./CommentSection";
import PostItem from "./PostItem";
import SkeletonComponent from "./Skeleton";

const PostDetail = () => {
  let { postId } = useParams();
  const [post] = GetOnePost(postId);
  //Test
  // console.log(post);
  if (!post) {
    return <SkeletonComponent />;
  }
  if (!post.title || !post.content) {
    return (
      <div style={{ padding: "1rem", backgroundColor: "var(--light-gray)" }}>
        <h1>Ooops!!! This post is not found.</h1>
        <Link to="/dashboard">
          <span>Go back to Dash Board</span>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PostItem post={post} isDetail={true} />
      <PostContext.Provider value={{ post }}>
        <CommentSection />
      </PostContext.Provider>
    </div>
  );
};

export default PostDetail;
