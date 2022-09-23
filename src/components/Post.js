import React from "react";
import { MdDelete } from "react-icons/md";
import "../styles/post.scss";
const Post = ({ title, description }) => {
  return (
    <div className="post">
      <div>
        <h3>{title}</h3>
        <p>
          {description.length < 80
            ? description
            : `${description.substring(0, 80)}...`}
        </p>
      </div>
      <MdDelete onClick={() => console.log("Delete")} size={24} />
    </div>
  );
};

export default Post;
