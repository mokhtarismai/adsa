import React from "react";
import posts from "../../data/posts.json";
import "./SelectedArticles.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link } from "react-router-dom";

export default function SelectedArticles() {
  return (
    <section className="SelectedArticles">
      <div className="container">
        <div className="ping-dots1">
          <span></span>
          <p className="animationdot1 text-white me-2 mb-0"></p>
          <p className="hi1 me-3 mb-0">مميز</p>
        </div>

        <h2 className="section-title mb-3">
          مقالات <span className="gradient-text">مختارة</span>
        </h2>

        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between mb-5">
          <p className="detal m-0">محتوى منتقى لبدء رحلة تعلمك</p>
          <Link to="/blog" className="btn2 text-decoration-none">
            عرض الكل <i className="fa-solid fa-angle-left me-2"></i>
          </Link>
        </div>

        {posts.posts
          .filter((post) => post.featured === true)
          .map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              size={["col-md-4", "col-md-8"]}
            />
          ))}
      </div>
    </section>
  );
}
