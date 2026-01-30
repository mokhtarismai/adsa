import React from 'react';
import styles from './ExploreHero.module.css';

export default function ExploreHero() {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.gridOverlay}></div>
      
      <div className={`${styles.circle} position-absolute top-50 end-50 translate-middle`}></div>
      <div className={`${styles.circle} position-absolute top-50 start-25 translate-middle`}></div>

      <div className="container position-relative text-center">
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>
            <span className={styles.dot}></span> 
            <i className="fa-regular fa-newspaper"></i>
            <span className={styles.badgeText}>مدونتنا</span>
           
          </div>
        </div>

        <h1 className={styles.mainTitle}>
          استكشف <span className={styles.highlight}>مقالاتنا</span>
        </h1>

        <p className={styles.subTitle}>
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
        </p>
      </div>
    </section>
  );
}