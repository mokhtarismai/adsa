import React from "react";
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ post }) {
  if (!post) return null;

  return (
    <Link to={`/blog/${post.slug}`} className={styles.postCard}>
      <div className={styles.imageWrapper}>
        <img
          src={post.image}
          alt={post.title}
          className={styles.postImg}
        />
        <span className={styles.categoryTag}>{post.category}</span>
      </div>

      <div className={styles.cardContent}>
        <div className={`d-flex gap-3 mb-3 text-white-50 ${styles.fs14}`}>
          <span>
            <i className="fa-regular fa-clock ms-1"></i>
            {post.readTime}
          </span>
          <span>
            <i className="fa-regular fa-calendar ms-1"></i>
            {post.date}
          </span>
        </div>

        <h3 className={styles.postTitle}>{post.title}</h3>
        <p className={styles.postExcerpt}>{post.excerpt}</p>

        <div className="d-flex align-items-center justify-content-between mt-4 pt-3 border-top border-secondary border-opacity-10">
          <div className="d-flex align-items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className={styles.authorAvatar}
            />
            <div className="text-end">
              <p className={`m-0 text-white fw-bold ${styles.fs14}`}>
                {post.author.name}
              </p>
              <p className={`m-0 text-white-50 ${styles.fs12}`}>
                {post.author.role}
              </p>
            </div>
          </div>

          <div className={styles.actionBtn}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}