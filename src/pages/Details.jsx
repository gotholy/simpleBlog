import React from "react";
import { useParams } from "react-router-dom";
import Data from "../components/Data.json";
import Header from "../components/Header";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const selectedItem = Data.blogData.find(
    (item) => item.id === parseInt(id, 10)
  );
  return (
    <>
      <Header />
      <article className="detail">
        <img src={selectedItem.img_url} alt={selectedItem.title} />
        <div className="titleDate">
          <h2>{selectedItem.title}</h2>
          <h3>{selectedItem.published_date}</h3>
        </div>
        <p>{selectedItem.description}</p>
        <h4>by {selectedItem.author}</h4>
      </article>
    </>
  );
};

export default Details;
<article className="detail">
  <h2></h2>
</article>;
