import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lecture02 from '../images/lecture02.jpg';
import Lecture03 from '../images/lecture03.jpg';
import Lecture04 from '../images/lecture04.jpg';
import Lecture05 from '../images/lecture05.jpg';
import Lecture06 from '../images/lecture06.jpg';
import Lecture07 from '../images/lecture07.jpg';
import Lecture08 from '../images/lecture08.jpg';
import Lecture09 from '../images/lecture09.jpg';
import Lecture10 from '../images/lecture10.jpg';
import Lecture11 from '../images/lecture11.jpg';
import Lecture12 from '../images/lecture12.jpg';


var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  padding: "60px",
};

var small_settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  padding: "60px",
};

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; 
      border-radius:2px
      padding:3px;
      text-align:center;
      margin-right:4px;
      margin-left:4px;
    }
`;


function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}





export const LectureCarousel = () => {
  const style = {
    backgroundColor: "#cccccc"
  }
  return (
    <div className=""> 
      <div className="" >
        <div className="pt-28" style={style}>
          <div className="mx-auto max-w-full px-4 lg:max-w-7xl hidden lg:block lg:visible ">
            <div className="text-2xl mb-10">강의 사진</div>
            <StyledSlider {...settings}>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture02} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture03} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture04} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture05} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture06} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture07} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture08} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture09} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture10} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture11} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture12} className="object-cover" />
                </div>
              </StyledSlider>
            </div>
            <div className="mt-12 mx-auto max-w-md px-4 sm:max-w-lg lg:hidden">
              <StyledSlider {...small_settings}>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture02} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture03} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture04} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture05} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture06} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture07} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture08} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture09} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture10} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture11} className="object-cover" />
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <img src={Lecture12} className="object-cover" />
                </div>
              </StyledSlider>
            </div>
          </div>
      </div>
    </div>
  )
}