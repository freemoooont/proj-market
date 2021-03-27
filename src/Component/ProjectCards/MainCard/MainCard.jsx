import React, { useState, useEffect, Fragment } from 'react';
import './maincard.css';

import fnshd from '../../../assets/img/project/status_ico/done.svg';
import iprgrs from '../../../assets/img/project/status_ico/lock.svg';
import opn from '../../../assets/img/project/status_ico/lock_open.svg';

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
            <img src={props.imgUrl}/>
            <div className="card__container">
                <div className="card__status">
                    <img src={ico}/>
                    <div className={`card__status--${status}`}> {availableText[status]} </div>
                </div>
                <div className="card__br"></div>
                <div className="card__text">
                    <div className="card__title">
                        {props.name}
                    </div>
                    <div className="card__descr">
                        {props.description}
                    </div>
                    <div className="card__footer">
                        { 
                        status !== 'fnshd' ? <Fragment>
                            <div className="card__footer-title"> Сейчас в проекте: </div>
                            <div className="card__bar">
                                    полоска с анимацией крута вау
                            </div>  
                            </Fragment>
                        : null
                        }
                         <div className="card__insts"> <img/> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard;