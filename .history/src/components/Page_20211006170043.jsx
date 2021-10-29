import React, { Component } from "react";
import Slider from "react-slick";

export default class Resizable extends Component {
  state = {
    display: true,
    width: 1200
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Resizable Collapsible </h2>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width + 100
            })
          }
        >
          {" "}
          increase{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              width: this.state.width - 100
            })
          }
        >
          {" "}
          decrease{" "}
        </button>
        <button
          className="button"
          onClick={() =>
            this.setState({
              display: !this.state.display
            })
          }
        >
          {" "}
          toggle{" "}
        </button>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            <div>
              <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" width={100}/>
            </div>
            <div>
            <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" />
            </div>
            <div>
            <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" />
            </div>
            <div>
            <img  alt="..." src="https://media.canifa.com/catalog/product/cache_generated/500x/8tp21w006-sy078-2-thumb-.jpg" />
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}