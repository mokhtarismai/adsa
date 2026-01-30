import React from "react";
import { Link } from "react-router-dom";
import posts from "../../data/posts.json";
import hcard from "./ArticleCard.module.css";

export default function ArticleCard({ post, size }) {
  return (
  <Link
  to={"/blog"}
  className={`mb-5 transition-05 rounded-4 overflow-hidden card ${hcard.hcard} `}
  style={{ textDecoration: 'none' }}
>
  <div className="row g-0 flex-row align-items-stretch">
    <div className={`position-relative ${hcard.image} overflow-hidden col-md-6`}>
      <img
        src={post?.image}
        className={`img-fluid transition-05 h-100 w-100 ${hcard.objectcover}`}
        alt={post?.title}
      />
      <p className={`position-absolute top-0 end-0 bg-gradiant-2 fw-bolder ${hcard.fs12} py-1 px-3 m-3 rounded-pill text-white shadow-sm`} style={{background: 'linear-gradient(45deg, #f97316, #fbbf24)'}}>
         مميز <i className="fa-solid fa-star me-1"></i>
      </p>
    </div>

    <div className="col-md-6 bg-dark-card">
      <div className="card-body p-4 p-lg-5 d-flex flex-column justify-content-between h-100 text-end">
        
        <div className="flex-grow-1">
          <div className="d-flex gap-3 align-items-center mb-4 justify-content-start flex-row">
             <p className={`m-0 fw-bold text-prime border-0 py-1 px-3 ${hcard.fs12} rounded-pill`} style={{backgroundColor: '#2b1a12', color: '#f97316'}}>
              {post?.category}
            </p>
            <p className={`m-0 text-white text-opacity-50 d-flex gap-2 align-items-center ${hcard.fs14}`}>
               {post?.readTime} <i className="fa-regular fa-clock"></i>
            </p>
          </div>

          <h2 className={`card-title ${hcard.hovtile} text-white fw-bold mb-3 lh-base h3`}>
            {post?.title}
          </h2>
          
          <p className="card-text text-white text-opacity-50 fs-6 mb-5">
            {post?.excerpt}
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-between w-100 mt-auto pt-3">
          <div className="d-flex align-items-center gap-3 flex-row">
            <div className={`overflow-hidden rounded-circle  ${hcard.avatar}`}>
              <img
                src={post?.author.avatar}
                alt={post?.author.name}
                className={`"w-100 h-100 ${hcard.objectcover}"`}
              />
            </div>
            <div className="info text-end">
              <p className="m-0 text-white fw-bold">{post?.author.name}</p>
              <p className="m-0 text-secondary fs-12">{post?.date}</p>
            </div>
          </div>
          
          <div>
            <p className={`m-0 ${hcard.textprime1} fw-bold ${hcard.fs-14}`}>
              اقرأ المقال <i className="fa-solid fa-arrow-left ms-2"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Link>
  );
}
