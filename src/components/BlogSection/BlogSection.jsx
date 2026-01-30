import React, { useState, useEffect } from "react";
import styles from "./BlogSection.module.css";
import Card from "../Card/Card";
import data from "../../data/posts.json";

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("جميع المقالات");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const categories = [
    "جميع المقالات",
    ...new Set(data.posts.map((post) => post.category)),
  ];

  const filteredPosts =
    activeTab === "جميع المقالات"
      ? data.posts
      : data.posts.filter((post) => post.category === activeTab);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <section className={styles.blogWrapper}>
      <div className="container">

        <div className={styles.topBar}>
          <div className={styles.searchBox}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="ابحث في المقالات..." />
          </div>

          <div className={styles.tabsContainer}>
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`${styles.tabBtn} ${
                  activeTab === cat ? styles.active : ""
                }`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.resultsInfo}>
          <span className={styles.countBadge}>
            عرض <span className="text-white fw-bolder">{filteredPosts.length}</span> مقالات
          </span>
        </div>

        <div className="row gy-5 mt-2">
          {currentPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <Card post={post} />
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageArrow}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`${styles.pageNumber} ${
                  currentPage === i + 1 ? styles.activePage : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className={styles.pageArrow}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
