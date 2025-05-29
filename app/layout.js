"use client"

import { useEffect, useState } from "react";
import "../app/bootstrap.rtl.css";
import Image from "next/image";
import "../app/globals.css";
import "../app/page.css";

export default function Layout() {
  const texts = ["دستان خود را مرتبا با صابون حاوی الکل و اب بشویید", "به محض فرا رسیدن نوبت خود واکسن بزنید و دستورالعمل‌ های واکسیناسیون را دنبال کنید", "هنگام سرفه دهان و بینی خود را با ارنج خمیده یا دستمال بپوشانید"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html>
      <head>
        <title>Crafto - Medical</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="https://craftohtml.themezaa.com/images/apple-touch-icon-114x114.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </head>
      <body>
        {/* Header */}

        <section className="container d-flex justify-content-between align-items-center header">
          <div className="container d-flex justify-content-between align-items-center p-0 header-inner">
            <button className="btn p-0 m-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
              <Image src="/menu.svg" width="30" height="30" layout="responsive" className="header-menu" alt="menu"></Image>
            </button>

            <div className="offcanvas offcanvas-start" id="offcanvasMenu">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">منو</h5>

                <button type="button" className="btn-close shadow-none me-auto ms-0"></button>
              </div>

              <div className="offcanvas-body">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu-1">خانه</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu-2">درباره ما</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu-3">درمان ها</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu-4">دکتر ها</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu-6">جدول زمانی</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#collectionMenu-5">ارتباط با ما</a>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#" className="d-flex justify-content-center align-items-center header-button">
              <span className="header-text footer-p">رزرو نوبت</span>
            </a>
          </div>
        </section>

        {/* Banner */}

        <section className="container banner">
          <div className="container h-100">
            <div className="row justify-content-md-center">
              <div className="col-xxl-5 col-xl-6 col-lg-7 pt-13 xl-pt-6 lg-pb-17 md-pb-6 sm-pt-40px text-center text-lg-end banner-padding">
                <span className="banner-title">مشکلات خود را به ما بگویید</span>

                <h1 className="banner-header">امن ترین دستیار سلامتی برای زندگی شما</h1>

                <a href="#" className="banner-black-button">پیدا کردن دکتر</a>

                <a href="#" className="banner-white-button">تماس ویدیویی</a>
              </div>

              <div className="col-xxl-7 col-xl-6 col-lg-5 col-md-10 position-relative align-self-end">
                <div className="banner-love">
                  <span className="banner-span-2">
                    <svg className="banner-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#fff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>

                    <span className="banner-live"></span>
                  </span>
                </div>

                <figure className="banner-figure">
                  <Image src="/doctor.webp" width="30" height="30" layout="responsive" alt="menu"></Image>

                  <figcaption className="banner-figcaption">
                    <div className="banner-trust">
                      <Image src="/trust.webp" width="30" height="30" layout="responsive" alt="trust"></Image>
                    </div>

                    <div>
                      <span className="banner-span">پزشک های تایید شده</span>

                      <p className="banner-p">پزشک حرفه‌ای</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="banner-bottom">
            <div className="container banner-bottom-inner">
              <div className="row align-items-center justify-content-center banner-bottom-inner">
                <div className="col-auto">
                  <div className="d-flex align-items-center text-white">
                    <span className="fw-600 text-white">اطلاعات کووید ۱۹</span>

                    <span className="banner-bottom-line"></span>
                  </div>
                </div>

                <div className="col-xl-7 col-lg-8 text-white text-center text-lg-start">
                  <div className="banner-container">
                    {texts.map((text, index) => (
                      <span key={index} className={`banner-text ${index === currentIndex ? "banner-visible" : "banner-hidden"}`}>{text}</span>))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome */}

        <section className="container welcome">
          <div className="container welcome-inner">
            <div className="d-flex align-items-center justify-content-center h-100 welcome-find">
              <div className="col-lg-6 col-md-10 col-sm-8 text-md-start welcome-margin">
                <span className="d-flex align-items-center help-span">
                  <span className="d-flex justify-content-center align-items-center help-span-inner">
                    <svg className="help-article" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#18bcc7" d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                    </svg>
                  </span>
                  درباره بیمارستان پهلوی
                </span>

                <h2 className="d-flex help-h2">به بیمارستان پهلوی ما خوش امدید</h2>

                <p className="help-p welcome-justify">ما هر زندگی انسانی که به دستانمان سپرده شود را ارزشمند می‌دانیم و همواره برای براورده کردن انتظارات مشتریان و سهامداران خود تلاش می‌کنیم</p>

                <div className="mt-5 w-100 welcome-60">
                  <div className="col-sm welcome-star">
                    <p className="d-flex align-items-center mb-0">بررسی‌ های ۵ ستاره از افراد رضایتمند ما</p>
                  </div>

                  <div className="d-flex col-sm-auto align-items-center welcome-point">
                    <div className="welcome-orange">
                      <svg className="welcome-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>

                      <svg className="welcome-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>

                      <svg className="welcome-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>

                      <svg className="welcome-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>

                      <svg className="welcome-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="#fff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    </div>

                    <h2 className="d-flex justify-content-center align-items-center welcome-h2">۷۲۵+</h2>
                  </div>
                </div>

                <div className="row d-flex align-items-center text-right text-sm-start mt-5 welcome-60">
                  <a href="#" className="d-flex justify-content-center align-items-center welcome-about">درباره بیمارستان</a>

                  <a href="#" className="d-flex justify-content-center align-items-center welcome-time">جدول زمانی</a>
                </div>
              </div>

              <div className="col-lg-6 col-md-10 col-sm-10 offset-lg-0 offset-md-1 position-relative h-100 welcome-pic">
                <div className="welcome-img-1">
                  <Image src="/person-6.jpg" width="30" height="30" layout="responsive" className="welcome-img-6" alt="person"></Image>

                  <div className="welcome-circle">
                    <Image src="/medical.webp" width="30" height="30" layout="responsive" className="welcome-mediacl" alt="medical"></Image>

                    <Image src="/text.webp" width="30" height="30" layout="responsive" className="welcome-text" alt="text"></Image>
                  </div>
                </div>

                <div className="welcome-img-2">
                  <Image src="/person-7.jpg" width="30" height="30" layout="responsive" className="welcome-img-7" alt="person"></Image>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service */}

        <section className="container service">
          <div className="container service-inner">
            <div className="container service-div">
              <div className="row service-up">
                <div className="col-xl-4 col-lg-5">
                  <span className="help-span">
                    <span className="help-span-inner">
                      <Image src="/sheild.svg" width="30" height="30" layout="responsive" className="service-sheild" alt="sheild"></Image>
                    </span>
                    خدمات پیشرفته ما
                  </span>

                  <h2 className="help-h2">بخش های بالینی ما</h2>

                  <p className="help-p welcome-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                  <a href="#" className="service-a">تمام درمان ها</a>
                </div>

                <div className="service-container col-xl-8 col-lg-7 service-445">
                  <div className="service-item">
                    <div className="service-icon">
                      <Image src="/heart.svg" width="30" height="30" layout="responsive" className="service-icon-img" alt="sheild"></Image>
                    </div>

                    <div className="service-150">
                      <span className="service-hospital-span">قلب و عروق</span>

                      <p className="service-hospital-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                      <a href="#" className="service-hospital-a">بیشتر بدانید</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <Image src="/doctor.svg" width="30" height="30" layout="responsive" className="service-icon-img" alt="sheild"></Image>
                    </div>

                    <div className="service-150">
                      <span className="service-hospital-span">مراقبت های اولیه</span>

                      <p className="service-hospital-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                      <a href="#" className="service-hospital-a">بیشتر بدانید</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <Image src="/cut.svg" width="30" height="30" layout="responsive" className="service-icon-img" alt="sheild"></Image>
                    </div>

                    <div className="service-150">
                      <span className="service-hospital-span">جراحی عمومی</span>

                      <p className="service-hospital-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                      <a href="#" className="service-hospital-a">بیشتر بدانید</a>
                    </div>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <Image src="/blood.svg" width="30" height="30" layout="responsive" className="service-icon-img" alt="sheild"></Image>
                    </div>

                    <div className="service-150">
                      <span className="service-hospital-span">ازمایش خون</span>

                      <p className="service-hospital-p">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>

                      <a href="#" className="service-hospital-a">بیشتر بدانید</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 mt-5 service-down">
                <div className="col md-mb-40px service-60">
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
                    <div className="flex-shrink-0 me-25px sm-me-0 service-margin">
                      <h2 className="mb-0 text-dark-gray ls-minus-2px service-h2">۴.۹۸</h2>
                    </div>

                    <div>
                      <div className="fs-18 lh-32 last-paragraph-no-margin text-dark-gray">
                        <svg className="service-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="#303334" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        <svg className="service-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="#303334" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        <svg className="service-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="#303334" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        <svg className="service-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="#303334" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>

                        <svg className="service-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <path fill="#303334" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                      </div>

                      <span className="fs-18 lh-26 d-block fw-600 text-dark-gray service-point">۲,۴۸۸ امتیاز</span>
                    </div>
                  </div>
                </div>

                <div className="col md-mb-40px service-60">
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
                    <div className="flex-shrink-0 me-25px sm-me-0 service-margin">
                      <h2 className="mb-0 text-dark-gray ls-minus-2px service-h2">۹۸٪</h2>
                    </div>

                    <div>
                      <span className="fs-18 lh-26 d-block fw-600 text-dark-gray service-point">بازخورد مثبت واقعی</span>
                    </div>
                  </div>
                </div>

                <div className="col md-mb-40px service-60">
                  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start">
                    <div className="flex-shrink-0 me-25px sm-me-0 service-margin">
                      <h2 className="mb-0 text-dark-gray ls-minus-2px service-h2">۲۰۰+</h2>
                    </div>

                    <div>
                      <span className="fs-18 lh-26 d-block fw-600 text-dark-gray service-point">بیماران مشاوره‌ شده روزانه</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Help */}

        <section className="container help">
          <div className="container help-inner">
            <div className="row justify-content-center align-items-center help-height">
              <div className="col-lg-6 col-xl-5 help-margin">
                <span className="d-flex align-items-center help-span">
                  <span className="d-flex justify-content-center align-items-center help-span-inner">
                    <svg className="help-article" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="#18bcc7" d="M168 80c-13.3 0-24 10.7-24 24l0 304c0 8.4-1.4 16.5-4.1 24L440 432c13.3 0 24-10.7 24-24l0-304c0-13.3-10.7-24-24-24L168 80zM72 480c-39.8 0-72-32.2-72-72L0 112C0 98.7 10.7 88 24 88s24 10.7 24 24l0 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-304c0-39.8 32.2-72 72-72l272 0c39.8 0 72 32.2 72 72l0 304c0 39.8-32.2 72-72 72L72 480zM176 136c0-13.3 10.7-24 24-24l96 0c13.3 0 24 10.7 24 24l0 80c0 13.3-10.7 24-24 24l-96 0c-13.3 0-24-10.7-24-24l0-80zm200-24l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80l208 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-208 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
                    </svg>
                  </span>
                  فناوری‌ های مدرن
                </span>

                <h2 className="help-h2">ما به شما کمک می‌کنیم زودتر بهبود پیدا کنید</h2>

                <p className="help-p">ما به هر زندگی که به دستان ما سپرده می‌شود ارزش می‌دهیم و همواره برای برآورده کردن انتظارات مشتریان خود تلاش می‌کنیم</p>

                <a href="#" className="d-flex justify-content-center align-items-center help-a">
                  <span className="help-number">۰۹۱۹۱۵۰۱۲۹۳</span>
                </a>
              </div>

              <div className="col-lg-6 position-relative">
                <div className="">
                  <Image src="/person-5.jpg" width="30" height="30" layout="responsive" className="help-img" alt="home"></Image>
                </div>

                <div className="position-absolute help-tour">
                  <a href="#" className="help-tour-a">تور مجازی ما را ببینید</a>
                </div>
              </div>
            </div>

            <div className="row justify-content-center help-text">
              <div className="col-auto d-flex align-items-center">
                <div className="help-margin">
                  <svg className="help-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#18bcc7" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                </div>

                <div className="help-detail">ما میتوانیم لبخند بزرگی را که همیشه می‌خواستید به شما بدهیم</div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Doctor */}

        <section className="container position-relative find-doctor">
          <div className="find-doctor-inner">
            <div className="row find-doctor-box">
              <div className="col-xl-3 find-doctor-3">
                <h6 className="text-center">پزشک مناسب خود را پیدا کنید</h6>
              </div>

              <div className="col-xl-9 find-doctor-9">
                <div className="row row-cols-auto row-cols-lg-3 row-cols-md-2 justify-content-center align-items-center find-doctor-9">
                  <div className="col position-relative find-doctor-9">
                    <div className="d-flex align-items-center">
                      <div className="position-relative">
                        <div className="d-flex justify-content-center align-items-center mx-auto find-doctor-doc">
                          <span className="find-doctor-note">۱</span>
                        </div>
                      </div>

                      <div className="find-doctor-padding">
                        <span className="find-doctor-note-1">پیدا کردن دکتر</span>

                        <p className="mb-0 find-doctor-note-2">نکات مهم این مرحله</p>
                      </div>
                    </div>
                  </div>

                  <div className="col position-relative find-doctor-9">
                    <div className="d-flex align-items-center">
                      <div className="position-relative">
                        <div className="d-flex justify-content-center align-items-center mx-auto find-doctor-doc">
                          <span className="find-doctor-note">۲</span>
                        </div>
                      </div>

                      <div className="find-doctor-padding">
                        <span className="find-doctor-note-1">نوبت گرفتن</span>

                        <p className="mb-0 find-doctor-note-2">نکات مهم این مرحله</p>
                      </div>
                    </div>
                  </div>

                  <div className="col position-relative find-doctor-blue-9">
                    <div className="d-flex align-items-center">
                      <div className="position-relative">
                        <div className="d-flex justify-content-center align-items-center mx-auto find-doctor-doc">
                          <span className="find-doctor-note">۳</span>
                        </div>
                      </div>

                      <div className="find-doctor-padding">
                        <span className="find-doctor-note-1">پرداخت هزینه</span>

                        <p className="mb-0 find-doctor-note-2">نکات مهم این مرحله</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualified Doctor */}

        <section className="container qualified-doctor">
          <div className="container qualified-doctor-inner">
            <div className="container qualified-doctor-title">
              <h2 className="qualified-doctor-title-h2">پزشک های واجد شرایط</h2>
            </div>

            <div className="container d-flex justify-content-center align-items-center row row-cols-1 row-cols-xl-4 row-cols-sm-2 qualified-doctor-main">
              <div className="col qualified-doctor-main-box">
                <div className="position-relative">
                  <a href="#" className="d-inline-block position-relative">
                    <Image src="/person-1.jpg" width="30" height="30" layout="responsive" className="qualified-doctor-img" alt="person"></Image>

                    <span className="position-absolute d-flex justify-content-center align-items-center text-center qualified-doctor-point">
                      <Image src="/star.svg" width="15" height="15" layout="responsive" className="qualified-doctor-star" alt="star"></Image>
                      <span className="qualified-doctor-number">۵</span>
                    </span>
                  </a>
                </div>

                <a href="#" className="mb-2 qualified-doctor-main-a">دکتر احمد معصومی</a>

                <p className="mx-auto mb-4 qualified-doctor-p">متخصص روانپزشکی</p>

                <div className="qualified-doctor-main-div">
                  <ul className="d-flex justify-content-center p-0 m-0">
                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg drible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col qualified-doctor-main-box">
                <div className="position-relative">
                  <a href="#" className="d-inline-block position-relative">
                    <Image src="/person-2.jpg" width="30" height="30" layout="responsive" className="qualified-doctor-img" alt="person"></Image>

                    <span className="position-absolute d-flex justify-content-center align-items-center text-center qualified-doctor-point">
                      <Image src="/star.svg" width="15" height="15" layout="responsive" className="qualified-doctor-star" alt="star"></Image>
                      <span className="qualified-doctor-number">۴</span>
                    </span>
                  </a>
                </div>

                <a href="#" className="mb-2 qualified-doctor-main-a">دکتر فاطمه دهقان</a>

                <p className="mx-auto mb-4 qualified-doctor-p">متخصص سرطان</p>

                <div className="qualified-doctor-main-div">
                  <ul className="d-flex justify-content-center p-0 m-0">
                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg drible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col qualified-doctor-main-box">
                <div className="position-relative">
                  <a href="#" className="d-inline-block position-relative">
                    <Image src="/person-3.jpg" width="30" height="30" layout="responsive" className="qualified-doctor-img" alt="person"></Image>

                    <span className="position-absolute d-flex justify-content-center align-items-center text-center qualified-doctor-point">
                      <Image src="/star.svg" width="15" height="15" layout="responsive" className="qualified-doctor-star" alt="star"></Image>
                      <span className="qualified-doctor-number">۳</span>
                    </span>
                  </a>
                </div>

                <a href="#" className="mb-2 qualified-doctor-main-a">دکتر حسین مطلبی</a>

                <p className="mx-auto mb-4 qualified-doctor-p">متخصص اطفال</p>

                <div className="qualified-doctor-main-div">
                  <ul className="d-flex justify-content-center p-0 m-0">
                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg drible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col qualified-doctor-main-box">
                <div className="position-relative">
                  <a href="#" className="d-inline-block position-relative">
                    <Image src="/person-4.jpg" width="30" height="30" layout="responsive" className="qualified-doctor-img" alt="person"></Image>

                    <span className="position-absolute d-flex justify-content-center align-items-center text-center qualified-doctor-point">
                      <Image src="/star.svg" width="15" height="15" layout="responsive" className="qualified-doctor-star" alt="star"></Image>
                      <span className="qualified-doctor-number">۲</span>
                    </span>
                  </a>
                </div>

                <a href="#" className="mb-2 qualified-doctor-main-a">دکتر سینا احمدی</a>

                <p className="mx-auto mb-4 qualified-doctor-p">متخصص قلب</p>

                <div className="qualified-doctor-main-div">
                  <ul className="d-flex justify-content-center p-0 m-0">
                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg drible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="qualified-doctor-main-a-2">
                        <svg className="qualified-doctor-svg facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="qualified-doctor-text">
              <div className="qualified-doctor-text-trust">اعتماد</div>

              <div className="qualified-doctor-text-inner">بیش از ۱۰۰۰۰ نفر به درمان بیمارستان پهلوی اعتماد دارند</div>
            </div>
          </div>
        </section>

        {/* Request Appointment */}

        <section className="container position-relative request-appointment">
          <div className="container request-appointment-inner">
            <div className="row justify-content-center request-appointment-div">
              <div className="col-xl-4 col-lg-5">
                <h2 className="request-appointment-h2">درخواست قرار ملاقات</h2>

                <p className="request-appointment-p">اطلاعات شما به یک متخصص برنامه ریزی ارسال می شود که با شما تماس خواهد گرفت</p>

                <div className="row request-appointment-div-2">
                  <div className="col-auto">
                    <Image src="/home.webp" width="30" height="30" layout="responsive" className="" alt="home"></Image>
                  </div>

                  <div className="col">
                    <span className="request-appointment-span">
                      برای امور فوری
                      <br />
                      <a href="#" className="request-appointment-span-inner">۰۹۱۹۱۵۰۱۲۹۳</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7">
                <div className="row justify-content-center request-appointment-block">
                  <div className="col-md-6">
                    <input className="mb-4 form-control request-appointment-input" type="text" placeholder="نام کامل بیمار"></input>

                    <input className="mb-4 form-control request-appointment-input" type="text" placeholder="ایمیل بیمار"></input>

                    <div className="d-flex request-appointment-margin">
                      <div className="col-xl-6 position-relative request-appointment-data">
                        <input className="form-control request-appointment-time" type="date" defaultValue="2023-01-01" min="2023-01-01" max="2099-12-31"></input>
                      </div>

                      <div className="col-xl-6 position-relative request-appointment-data">
                        <input className="form-control request-appointment-time" type="time" defaultValue="09:12" min="09:00" max="12:00"></input>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="position-relative mb-4">
                      <select className="form-control request-appointment-select">
                        <option value="">دکتر را انتخاب کنید</option>

                        <option value="دکتر احمد معصومی">دکتر احمد معصومی</option>

                        <option value="دکتر فاطمه دهقان">دکتر فاطمه دهقان</option>

                        <option value="دکتر حسین مطلبی">دکتر حسین مطلبی</option>

                        <option value="دکتر سینا احمدی">دکتر سینا احمدی</option>

                        <option value="دکتر علی رضایی">دکتر علی رضایی</option>
                      </select>
                    </div>

                    <textarea className="form-control request-appointment-textarea" cols="20" rows="4" placeholder="پیام شما"></textarea>
                  </div>

                  <div className="col-md-6 mt-4 request-appointment-60">
                    <p>ما متعهد به محافظت از حریم خصوصی شما هستیم. ما هرگز بدون رضایت صریح شما اطلاعاتی در مورد شما جمع آوری نمی کنیم.</p>
                  </div>

                  <div className="col-md-6 mt-4">
                    <button type="submit" className="request-appointment-button">رزرو قرار ملاقات</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}

        <section className="container footer">
          <div className="container footer-top">
            <div className="container footer-top-inner">
              <div className="row justify-content-end footer-top-row">
                <div className="col-xl-4 col-sm-6 position-relative d-flex align-items-center text-center text-sm-end elements-social social-icon-style-08 order-2 order-xl-3">
                  <ul className="d-flex justify-content-end w-100 p-0 m-0">
                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                        </svg>
                      </a>
                    </li>

                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path>
                        </svg>
                      </a>
                    </li>

                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>
                      </a>
                    </li>

                    <li className="me-2">
                      <a href="#">
                        <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-xl-8 order-3 order-xl-2 footer-top-8">
                  <ul className="d-flex text-center align-items-center p-0 m-0 footer-ul">
                    <li className="me-2">
                      <a href="#" className="footer-li">خانه</a>
                    </li>

                    <li className="me-2">
                      <a href="#" className="footer-li">درباره</a>
                    </li>

                    <li className="me-2">
                      <a href="#" className="footer-li">درمان</a>
                    </li>

                    <li className="me-2">
                      <a href="#" className="footer-li">دکتر</a>
                    </li>

                    <li className="me-2">
                      <a href="#" className="footer-li">جدول</a>
                    </li>

                    <li className="me-2">
                      <a href="#" className="footer-li">ارتباط</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container footer-down">
            <div className="row row-cols-1 row-cols-md-2 align-items-center footer-row">
              <div className="col">
                <p className="footer-p">
                  با افتخار ساخته شده توسط
                  <a href="#" className="footer-a"> سینا احمدی</a>
                </p>
              </div>

              <div className="col footer-down-40">
                <ul className="p-0 m-0 d-flex justify-content-end">
                  <li>
                    <a href="#" className="footer-li-2">شرایط و ضوابط</a>
                  </li>

                  <li className="me-4">
                    <a href="#" className="footer-li-2">سیاست حفظ حریم خصوصی</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html >
  );
}
