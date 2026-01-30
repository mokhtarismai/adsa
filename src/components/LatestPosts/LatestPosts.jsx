import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LatestPosts.module.css';
import data from '../../data/posts.json'; 
import Card from '../Card/Card';

export default function LatestPosts() {
  const selectedPosts = data.posts.filter(post =>
    [4, 5, 6].includes(post.id)
  );

  return (
    <section className={styles.sectionContainer}>
      <div className="container">

        <div className="d-flex justify-content-between align-items-end mb-5">
          <div className="text-end">
            <div className={`${styles.pingdots1} mb-3`}>
              <span></span>
              <p className={`${styles.animationdot1} text-white me-2 mb-0`}></p>
              <p className={`${styles.hi1} me-3 mb-0`}>الأحدث</p>
            </div>

            <h2 className={styles.sectionTitle}>أحدث المقالات</h2>
            <p className={styles.sectionSubTitle}>
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <Link to="/blog" className={styles.viewAllBtn}>
            عرض جميع المقالات <i className="fa-solid fa-arrow-left me-2"></i>
          </Link>
        </div>

        <div className="row g-4">
          {selectedPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <Card post={post} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
