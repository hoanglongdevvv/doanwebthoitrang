import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
          <<div>
            <img alt="/" src="https://product.hstatic.net/1000147171/product/atn_63ab6ee94ab24e8bb50cce3a26e49374_large.png" />
          </div>
        </Slider>
      </div>
    );
  }
}