import React, { useState, useEffect, Fragment } from 'react';
import './maincard.css';

import fnshd from '../../../assets/img/project/status_ico/done.svg';
import iprgrs from '../../../assets/img/project/status_ico/lock.svg';
import opn from '../../../assets/img/project/status_ico/lock_open.svg';
import {Link} from "react-router-dom";

function MainCard( props ){

    const [status, setStatus] = useState('open');
    const [ico, setIco] = useState();

    const availableText = {
        opn: 'Ведётся набор на проект',
        iprgrs: 'Проект в разработке',
        fnshd: 'Проект завершён'
    };

    const availableIco = {fnshd, iprgrs, opn}


    useEffect(()=>{
        setStatus(props.project_status)
    },[])

    useEffect(()=>{
        setIco(availableIco[status])
    },[status])

    return (
        
        <div className="main__card">
            <Link to={`/project/${props.id}`}>
                <img src={props.imgUrl}/>
            </Link>
            <div className="card__container">
                <div className="card__status">
                    <img src={ico}/>
                    <div className={`card__status--${status}`}> {availableText[status]} </div>
                </div>
                <div className="card__br"></div>
                <div className="card__text">
                    <div className="card__title">
                        <Link to={`/project/${props.id}`}>{props.name}</Link>
                    </div>
                    <div className="card__descr">
                        {props.description}
                    </div>
                   
                    { 
                    status !== 'fnshd' ? <Fragment>
                        <div className="card__footer">
                            <div className="card__footer-title"> Сейчас в проекте: </div>
                            <div className="card__bar">                        
                                <div className="card__bar__line">
                                    <div className="card__bar_text-finish">{props.maxPeople}</div>
                                    <div className="card__bar__line_now">
                                    <div className="card__bar_text-now">{props.currentPeople}</div>
                                    </div>
                                </div>                                 
                            </div>  
                        </div>
                        </Fragment>
                    : null
                    }                                        
                </div>
            </div>
            <div className="card__insts"> <img/> </div>
        </div>
    )
}

export default MainCard;