import React from 'react';
import './imgcomp.css';

function ImgComp({ srcId }){
    return <img src={srcId} alt="slide-img" className="slide__img"></img>
}

export default ImgComp;