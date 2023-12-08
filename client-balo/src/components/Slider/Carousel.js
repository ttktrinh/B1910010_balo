import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              <div key={1}>
                <img src="https://sakos.vn/wp-content/uploads/2023/10/Sakos-Miss-Cosmo-Vietnam-2023.png"></img>
              </div>
              <div key={2}>
                <img src="https://theme.hstatic.net/200000273565/1000933517/14/slider_home_banner_new_1.jpg?v=496"></img>
              </div>
              <div key={3}>
                <img src="https://bizweb.dktcdn.net/100/343/358/themes/868565/assets/section_banner_full.jpg?1698381742908"></img>
              </div>
              <div key={4}>
                <img src="https://hasunbag.com.vn/wp-content/uploads/2023/09/GIAM-3.png"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
                Balo Laptop KINGBAG KRATOS  <br></br>  Hotsale giảm sập sàn
              </div>
              <div>
                SP CHÍNH HÃNG  <br></br>  Giá cực tốt
              </div>
              <div>
                BALO CHẤT LƯỢNG  <br></br>  Mua đi chờ chi
              </div>
              <div>
                CÓ MUA <br></br>  có khuyến mãi
              </div>


            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://sakos.vn/wp-content/uploads/2023/10/SAKOS-CTKM-10-2023-1.png"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://theme.hstatic.net/200000273565/1000933517/14/slideshow_4.jpg?v=496"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://bizweb.dktcdn.net/100/168/179/themes/796492/assets/banner-categories4.png?1700227608661"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
