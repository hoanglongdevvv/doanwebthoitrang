import React, { Component } from "react";
import Slider from "react-slick";
export default class Page extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
          </div>
          <div>
          <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
          </div>
          <div>
          <img alt="..." src="https://phunugioi.com/wp-content/uploads/2020/03/hinh-anh-hot-girl-toc-ngan-de-thuong.jpg"  />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}