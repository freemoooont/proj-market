import React, { useState } from 'react';
import './slider.css';
import ImgComp from './ImgComp/ImgComp';

import { useTransition, animated, config } from "react-spring";

import i1 from '../../assets/img/Rectangle 1.png';

const pages = [
    ({style}) => <animated.div className="slide" style={{...style}}> <ImgComp srcId={i1} /> </animated.div>,
    ({style}) => <animated.div className="slide" style={{...style}}> <ImgComp srcId={i1} /> </animated.div>,
    ({style}) => <animated.div className="slide" style={{...style}}> ПАРАША</animated.div>,
    ({style}) => <animated.div className="slide" style={{...style}}> <ImgComp srcId={i1} /> </animated.div>,

]

function Slider(){
    const sliderArr = [<ImgComp srcId={i1} />,<ImgComp srcId={i1} />,3,4];
    const [x,setX] = useState(0);

    const [activeSlide, setActiveSlide] = useState(0);

    const changeActiveSlide = (id) => {
        setActiveSlide(id);
    }
    const onSlideChoice = (idx) => setX(idx)
        /*const x = (id+1)*100-100;
        setX(-x);
        changeActiveSlide(id);*/

    const transitions = useTransition(x, p => p, {
        from: { transform: 'translate3d(50%,0,0)' },
        enter: { transform: 'translate3d(0%,0,0)' },
        leave: { transform: 'translate3d(-190%,0,0)' },
        config: config.gentle
    })



    return(
        <div className="slider">

            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} />
            })}

            <span className="slider__nav-wrapper">
                {
                     sliderArr.map((item, idx)=>{
                         return (
                             <a href='#' key={idx} onClick={()=>onSlideChoice(idx)} type="radio" className={idx===x?"slider__nav-active":"slider__nav"}/>   )
                    })
                }
            </span>
        </div>
    )
};

export default Slider;


/*
{
    sliderArr.map((item,index)=> {
        return (
            <div key={index} className="slide" style={{transform:`translateX(${x}%`}}>{item}</div>
        )
    })
}*/
