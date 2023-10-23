import { Link } from "react-router-dom";
import Button from "./Button";
import React from "react";
import "./BlogItem.css";

const BlogItem = (props) => {
  return (
    <div className="item">
      <img src={props.teaser.img_url} alt={props.teaser.title} />
      <h2>{props.teaser.title}</h2>
      <Link to={`/details/${props.teaser.id}`}>
        <Button text="Read more" />
      </Link>
    </div>
  );
};

export default BlogItem;
