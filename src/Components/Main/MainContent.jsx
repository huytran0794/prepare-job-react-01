import React from "react";

import preview_1 from "../../core/assets/img/preview.jpg";
import preview_2 from "../../core/assets/img/preview2.jpg";
import preview_3 from "../../core/assets/img/preview3.jpg";
import preview_4 from "../../core/assets/img/preview4.jpg";
import preview_5 from "../../core/assets/img/preview5.jpg";
import Pagination from "./Pagination";

const MainContent = () => {
  return (
    <section className="main-content post-section">
      <div className="container">
        <div className="wrapper">
          <div className="section-title">
            <span>Leatest Stories</span>
          </div>
          <div className="section-content ">
            <div className="post-list">
              <div className="post">
                <div className="wrapper">
                  <div className="col--left">
                    <div className="content-wrapper">
                      <div className="date">
                        <span className="month">27</span>
                        <span className="day">May</span>
                      </div>
                      <div className="thumb-wrapper overlay">
                        <a href="#">
                          <div className="thumb">
                            <img src={preview_1} alt="overlay preview 1" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col--right">
                    <div className="post__content">
                      <ul className="tag">
                        <li>
                          <a href="#">#react</a>
                        </li>
                        <li>
                          <a href="#">#js</a>
                        </li>
                        <li>
                          <a href="#">#markdown</a>
                        </li>
                      </ul>
                      <h2 className="title">
                        <a href="#">A Peek Into Scandinavia's Origin</a>
                      </h2>
                      <p className="desc">
                        Steve Holt! No, I did not kill Kitty. However, I am
                        going to oblige and answer the nice officer's questions
                        because I am an honest man with no secrets to hide. I
                        don't criticize you! And if you're worried about
                        criticism, sometimes a diet is the best defense.
                      </p>
                      <a class="btn btn-read-more" href="#">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post">
                <div className="wrapper">
                  <div className="col--left">
                    <div className="content-wrapper">
                      <div className="date">
                        <span className="month">26</span>
                        <span className="day">May</span>
                      </div>
                      <div className="thumb-wrapper overlay">
                        <a href="#">
                          <div className="thumb">
                            <img src={preview_2} alt="overlay preview 1" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col--right">
                    <div className="post__content">
                      <ul className="tag">
                        <li>
                          <a href="#">#js</a>
                        </li>
                        <li>
                          <a href="#">#code</a>
                        </li>
                        <li>
                          <a href="#">#react</a>
                        </li>
                      </ul>
                      <h2 className="title">
                        <a href="#">React-Live & Code example</a>
                      </h2>
                      <p className="desc">
                        There are a few cases where it might make sense to
                        modify the “back” button's behavior. For example, if you
                        build a page where you choose something, then see an
                        “are you sure?” page to make sure it's what you really
                        wanted, and finally see a confirmation page, it may be
                        desirable to skip the “are…
                      </p>
                      <a class="btn btn-read-more" href="#">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post">
                <div className="wrapper">
                  <div className="col--left">
                    <div className="content-wrapper">
                      <div className="date">
                        <span className="month">26</span>
                        <span className="day">May</span>
                      </div>
                      <div className="thumb-wrapper overlay">
                        <a href="#">
                          <div className="thumb">
                            <img src={preview_3} alt="overlay preview 1" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col--right">
                    <div className="post__content">
                      <ul className="tag">
                        <li>
                          <a href="#">#react</a>
                        </li>
                        <li>
                          <a href="#">#javascript</a>
                        </li>
                      </ul>
                      <h2 className="title">
                        <a href="#">
                          Code blocks are very useful for developers
                        </a>
                      </h2>
                      <p className="desc">
                        Steve Holt! No, I did not kill Kitty. However, I am
                        going to oblige and answer the nice officer's questions
                        because I am an honest man with no secrets to hide. I
                        don't criticize you! And if you're worried about
                        criticism, sometimes a diet is the best defense. Army
                        had half a day. Marry me. We just…
                      </p>
                      <a class="btn btn-read-more" href="#">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post">
                <div className="wrapper">
                  <div className="col--left">
                    <div className="content-wrapper">
                      <div className="date">
                        <span className="month">25</span>
                        <span className="day">May</span>
                      </div>
                      <div className="thumb-wrapper overlay">
                        <a href="#">
                          <div className="thumb">
                            <img src={preview_4} alt="overlay preview 1" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col--right">
                    <div className="post__content">
                      <ul className="tag">
                        <li>
                          <a href="#">#react</a>
                        </li>
                        <li>
                          <a href="#">#code</a>
                        </li>
                        <li>
                          <a href="#">#markdown</a>
                        </li>
                      </ul>
                      <h2 className="title">
                        <a href="#">This could be another section</a>
                      </h2>
                      <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam ac urna diam. Nullam urna felis, porttitor quis
                        nulla ut, tincidunt cursus tellus. Nunc ac tempus ante.
                        Ut sagittis urna in enim mollis fringilla. Suspendisse
                        sit amet porttitor sem. Interdum et malesuada fames ac
                        ante ipsum primis in…
                      </p>
                      <a class="btn btn-read-more" href="#">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post">
                <div className="wrapper">
                  <div className="col--left">
                    <div className="content-wrapper">
                      <div className="date">
                        <span className="month">24</span>
                        <span className="day">May</span>
                      </div>
                      <div className="thumb-wrapper overlay">
                        <a href="#">
                          <div className="thumb">
                            <img src={preview_5} alt="overlay preview 1" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col--right">
                    <div className="post__content">
                      <ul className="tag">
                        <li>
                          <a href="#">#javascript</a>
                        </li>
                        <li>
                          <a href="#">#markdown</a>
                        </li>
                      </ul>
                      <h2 className="title">
                        <a href="#">Documentation for React Projects</a>
                      </h2>
                      <p className="desc">
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Maecenas congue
                        venenatis odio a commodo. Praesent semper turpis
                        tincidunt urna vestibulum, et rutrum sem porta.
                        Curabitur varius, purus sit amet consequat rhoncus,
                        dolor arcu rhoncus nibh, quis porta ex…
                      </p>
                      <a class="btn btn-read-more" href="#">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
