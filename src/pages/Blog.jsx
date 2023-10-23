import Header from "../components/Header";
import Data from "../components/Data.json";
import BlogItem from "../components/BlogItem";
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Header />
      <main className="blogMain">
        <article className="articleTeaser">
          {Data.blogData.map((item) => (
            <BlogItem key={item.id} teaser={item} />
          ))}
        </article>
      </main>
    </>
  );
};

export default Blog;
