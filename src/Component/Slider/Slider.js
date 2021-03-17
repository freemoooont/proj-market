import React, { useState } from 'react';
import './slider.css';
import ImgComp from './ImgComp/ImgComp';

import i1 from '../../assets/img/Rectangle 1.png';

function Slider(){
    const sliderArr = [<ImgComp srcId={i1} />,<ImgComp srcId={i1} />,3,4];
    const [x,setX] = useState(0);

    const [activeSlide, setActiveSlide] = useState(0);

    const changeActiveSlide = (id) => {
        setActiveSlide(id);
    }
    const onSlideChoice = (id) => {
        const x = (id+1)*100-100;
        setX(-x);
        changeActiveSlide(id);
        console.log(activeSlide);
    }


    return(
        <div className="slider">
            {
                sliderArr.map((item,index)=> {
                    return (
                        <div key={index} className="slide" style={{transform:`translateX(${x}%`}}>{item}</div>
                    )
                })
             }
            <span className="slider__nav-wrapper">
                {
                     sliderArr.map((item, index)=>{
                         return (
                             <a href='#' key={index} onClick={() => onSlideChoice(index)} type="radio" className={index===activeSlide?"slider__nav-active":"slider__nav"}/>   )
                    })
                }
            </span>
        </div>
    )
};

export default Slider;