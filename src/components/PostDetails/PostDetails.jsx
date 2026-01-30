import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../data/posts.json";
import styles from "./PostDetails.module.css";

export default function PostDetails() {
  const { slug } = useParams();
  const post = data.posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post)
    return <div className="text-white text-center py-5">المقال غير موجود</div>;
  const renderContent = (content) => {
    const blocks = content.split("\n\n");

    return blocks.map((block, index) => {
      if (block.startsWith("## ")) {
        return (
          <h3 key={index} className={styles.sectionHeading}>
            <i className="fa-solid fa-camera"></i>
            {block.replace("## ", "")}
          </h3>
        );
      }

      return <p key={index}>{block}</p>;
    });
  };

  return (
    <div className={styles.postPage}>
      {/* Hero Section */}
      <section
        className={styles.heroSection}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.15), #0a0a0a), url(${post.image})`,
        }}
      >
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link to="/Home" className={styles.breadcrumbLink}>
              <i className="fa-solid fa-house"></i>
            </Link>

            <i className="fa-solid fa-chevron-left"></i>

            <Link to="/blog" className={styles.breadcrumbLink}>
              <span>المدونة</span>
            </Link>

            <i className="fa-solid fa-chevron-left"></i>

            <span className={styles.activeStep}>{post.category}</span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.metaTop}>
              <span className={styles.categoryBadge}>{post.category}</span>
              <span>
                <i className="fa-regular fa-calendar ms-1"></i> {post.date}
              </span>
              <span>
                <i className="fa-regular fa-clock ms-1"></i> {post.readTime}
              </span>
            </div>
            <h1 className={styles.mainTitle}>{post.title}</h1>
            <div className={styles.authorHero}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className={styles.authorAvatar}
              />
              <div className={styles.authorText}>
                <p className={`${styles.authorName} m-0`}>{post.author.name}</p>
                <p className={`${styles.authorRole} m-0`}>{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container pb-5">
        <div className="row flex-row-reverse">
          {" "}
          <div className="col-lg-3">
            <aside className={styles.sidebar}>
              <div className={styles.sideCard}>
                <div className={styles.cardHeader}>
                  <i className="fa-solid fa-list-ul"></i>
                  <span>محتويات المقال</span>
                </div>
                <ul className={styles.tableOfContents}>
                  <li>
                    <span>1</span> المعدات الأساسية
                  </li>
                  <li>
                    <span>2</span> توقيت التصوير
                  </li>
                  <li>
                    <span>3</span> التكوين الفني
                  </li>
                  <li>
                    <span>4</span> إعدادات الكاميرا
                  </li>
                  <li>
                    <span>5</span> المعالجة اللاحقة
                  </li>
                  <li>
                    <span>6</span> الخلاصة
                  </li>
                </ul>
              </div>

              <div className="d-flex gap-3 mb-4">
                <div className={`${styles.sideCard} flex-fill text-center`}>
                  <i className="fa-regular fa-calendar text-orange mb-2 "></i>
                  <span className="d-block small text-white-50">
                    تاريخ النشر
                  </span>
                  <span className="fw-bold">{post.date}</span>
                </div>
                <div className={`${styles.sideCard} flex-fill text-center`}>
                  <i className="fa-regular fa-clock text-orange mb-2 "></i>
                  <span className="d-block small text-white-50">
                    وقت القراءة
                  </span>
                  <span className="fw-bold">{post.readTime}</span>
                </div>
              </div>

              <div className={styles.newsletterSideCard}>
                <div className={styles.mailIcon}>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <h5>لا تفوت جديدنا</h5>
                <p>اشترك للحصول على أحدث المقالات</p>
                <Link to="/blog" className={styles.sideCtaBtn}>
                  تصفح المزيد
                </Link>{" "}
              </div>
            </aside>
          </div>
          <div className="col-lg-9">
            <div className={styles.contentArea}>
              <div className={styles.excerptBox}>
                <p className="m-0">"{post.excerpt}"</p>
              </div>

              <article className={styles.articleBody}>
                {renderContent(post.content)}
              </article>

              <div className={styles.tagsSection}>
                <div className={styles.sectionHeader}>
                  <div className={styles.headerTitle}>
                    <div className={styles.iconBox}>
                      <i className="fa-solid fa-tags"></i>
                    </div>
                    <span>الوسوم</span>
                  </div>
                </div>
                <div className={styles.tagsList}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tagItem}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.shareSection}>
                <div className={styles.sectionHeader}>
                  <div className={styles.headerTitle}>
                    <div
                      className={styles.iconBox}
                      style={{ backgroundColor: "rgba(249, 115, 22, 0.1)" }}
                    >
                      <i
                        className="fa-solid fa-share-nodes"
                        style={{ color: "#f97316" }}
                      ></i>
                    </div>
                    <span>شارك المقال</span>
                  </div>
                </div>
                <div className={styles.shareIcons}>
                  <button>
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button>
                    <i className="fa-brands fa-whatsapp"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-link"></i>
                  </button>
                </div>
              </div>
              <div className={styles.authorFooterCard}>
                <div className={styles.authorMainInfo}>
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className={styles.footerAvatar}
                  />
                  <div className={styles.authorTextContent}>
                    <span className={styles.authorLabel}>كاتب المقال</span>
                    <h4 className={styles.authorNameTitle}>
                      {post.author.name}
                    </h4>
                    <p className={styles.authorBio}>
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
