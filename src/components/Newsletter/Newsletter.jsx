import React from "react";
import styles from "./Newsletter.module.css";
import data from "../../data/posts.json"; 

export default function Newsletter() {
  const randomPosts = [...data.posts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <section className={styles.wrapper}>
      <div
        className={`${styles.circle} position-absolute top-0 start-50 translate-middle`}
      ></div>
     

      <div className="container">
        <div className={styles.mainCard}>
         
          <div className={styles.iconBox}>
            <i className="fa-regular fa-envelope"></i>
          </div>

          <h2 className={styles.title}>
            اشترك في <span className={styles.textprime1}>نشرتنا الإخبارية</span>
          </h2>
          <p className={styles.description}>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>

          <form className={styles.subForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subBtn}>
              اشترك الآن
            </button>
          </form>

          <div className={styles.footerInfo}>
            <div className={styles.stats}>
              مصور<strong className="text-white">+10,000</strong> انضم لـ
              <div className={styles.avatarGroup}>
                {randomPosts.map((post, index) => (
                  <img
                    key={index}
                    src={post.author.avatar}
                    alt="avatar"
                    className={styles.miniAvatar}
                  />
                ))}
              </div>
            </div>
            <span className={styles.divider}>•</span>
            <span>بدون إزعاج</span>
            <span className={styles.divider}>•</span>
            <span className={styles.unsubscribe}>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}
