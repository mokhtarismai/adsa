import React from "react";
import styles from "./Explore.module.css";

const categories = [
  { id: 1, title: "إضاءة", count: "3 مقالة", icon: "fa-gear" },
  { id: 2, title: "بورتريه", count: "3 مقالة", icon: "fa-user" },
  { id: 3, title: "مناظر طبيعية", count: "2 مقالة", icon: "fa-mountain-sun" },
  { id: 4, title: "تقنيات", count: "5 مقالة", icon: "fa-sliders" },
  { id: 5, title: "معدات", count: "3 مقالة", icon: "fa-gear" },
];

export default function Explore() {
  return (
    <section className={styles.sectionWrapper}>
      <div className="container text-center">
        <div className="mb-5">
          <div className={`${styles.pingdots1} mb-3`}>
            <span></span>
            <p className={`${styles.animationdot1} text-white me-2 mb-0`}></p>
            <p className={`${styles.hi1} me-3 mb-0`}>التصنيفات</p>
          </div>
          <h2 className={styles.mainTitle}>استكشف حسب الموضوع</h2>
          <p className={styles.subTitle}>اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="row g-4 row-cols-2 row-cols-lg-4 justify-content-start">
          {categories.map((cat) => (
            <div key={cat.id} className="col">
              <div className={styles.categoryCard}>
                <div className={styles.iconBox}>
                  <i className={`fa-solid ${cat.icon}`}></i>
                </div>
                <h4 className={styles.catTitle}>{cat.title}</h4>
                <p className={styles.catCount}>{cat.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
