import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Blog.css";

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?category=business&apiKey=7fda3120fce24df287c65c1867725e19"
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          console.error("No articles found in response:", data);
          setArticles([]); // Fallback to empty array
        }
      })      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Financial Insights & Tips | Blog | Rudronil Financial Pvt Ltd
        </title>
        <meta
          name="description"
          content="Stay updated with the latest financial news, loan tips, investment strategies, and expert insights to manage your wealth better."
        />
      </Helmet>
      <div style={{ padding: "20px" }} className="blog-main">
        <h1>Latest Business News</h1>
    
        {articles.length === 0 && <p>Loading...</p>}
        <div className="blog">
          {articles.map((article, index) => (
            <div key={index} className="blog-item">
              <p style={{ textAlign: "right" }}>{article.publishedAt}</p>
              <img
                src={article.urlToImage}
                alt={article.title}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />

              <h3>{article.title}</h3>

              <p>{article.description}</p>
              <div className="read-more">
                <a
                  className="article-btn"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read full article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
