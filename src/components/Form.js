import React, { useState, useRef } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Loader from "./Loader";
const Form = ({ post, setPost, handleFormSubmit, type }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const onChangeImage = (e) => {
    const fileUploaded = e.target.files[0];
    if (!fileUploaded) return;
    setPost({ ...post, coverImage: null });
    setImage(fileUploaded);
  };

  const removeImage = () => {
    setPost({ ...post, coverImage: null });
    setImage(null);
    fileInputRef.current.value = "";
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(image);
    handleFormSubmit(image);
  };
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        name="title"
        placeholder="Title..."
        id="title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      {(image || post.coverImage) && (
        <div className="image-preview">
          <img
            alt="post"
            className="post-image"
            src={post.coverImage ? post.coverImage : URL.createObjectURL(image)}
          />
          <span className="remove-image">
            <i className="fas fa-trash" onClick={() => removeImage()}></i>
          </span>
        </div>
      )}

      <label
        htmlFor="image-upload"
        className="upload btn"
        style={{ marginBottom: "1rem" }}
      >
        Upload Image
        <input
          type="file"
          name="image-upload"
          className="image-upload"
          id="image-upload"
          accept="image/*"
          ref={fileInputRef}
          onChange={onChangeImage}
        />
      </label>
      <SimpleMDE
        options={{
          spellChecker: false,
        }}
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />
      {loading ? (
        <Loader />
      ) : (
        <button
          type="submit"
          className="btn publish-btn"
          disabled={post.title.trim() && post.content.trim() ? false : true}
        >
          {type}
        </button>
      )}
    </form>
  );
};

export default Form;
