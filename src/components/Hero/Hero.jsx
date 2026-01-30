import React from "react";
import posts from "../../data/posts.json";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="circle position-absolute top-0 start-0 m-5"></div>
      <div className="circle position-absolute top-50 start-50 translate-middle"></div>
      <div className="circle position-absolute bottom-0 end-0 m-5"></div>
      <div className="background position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="hero-content">
        <div className="ping-dots">
          <span></span>
          <p className="animationdot mt me-2 mb-0 "></p>
          <p className="hi me-3 mb-0">مرحباً بك في عدسة</p>
        </div>

        <h1 class="hero-title">
          اكتشف <span className="spanfn">فن</span>
          <br /> التصوير الفوتوغرافي
        </h1>
        <p class="hero-subtitle">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br />
          التصوير.
        </p>
        <Link to="/blog" className="hero-button text-decoration-none">
          استكشف المقالات <i className="fa-solid fa-arrow-left-long me-2"></i>
        </Link>
        <button href="#" className="hero-button2 me-3">
          <i class="fa-solid fa-circle-info iconinfo ms-2"></i>
          اعرف المزيد
        </button>
        <div className="row mt-5 g-3 text-center">
          <div className="col-6 col-md-3">
            <div className="card1">
              <div className="icon">
                <i className="fa-solid fa-newspaper"></i>
              </div>
              <div className="number">50+</div>
              <div className="label">مقالة</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card1">
              <div className="icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="number">+10ألف</div>
              <div className="label">قارئ</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card1">
              <div className="icon">
                <i class="fa-solid fa-folder-open"></i>
              </div>
              <div className="number">4</div>
              <div className="label">تصنيفات</div>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card1">
              <div className="icon">
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              <div className="number">6</div>
              <div className="label">كاتب</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
