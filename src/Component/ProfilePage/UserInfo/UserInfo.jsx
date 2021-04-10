import React from 'react'
import './userinfo.css'

function UserInfo( {srcIco, fullName, group, years, study, achv, skills} ){
    console.log(study)
    return(
        <div className="prof__info">
            <div className="info__main-wrapper">
                <div className="info__img">
                    <img src={`/${srcIco}`} alt={fullName}/>
                </div>
                <div className="info__head">
                    <div className="head__name">{fullName}</div>
                    <div className="head__group">{group}</div>
                    <div className="head__years">{years}</div>
                </div>
            </div>
            <div className="info__study info__text">
                <div className="study__form">Форма обучения: {study.formaObuch}</div>
                <div className="study__main--porg">Направление подготовки: {study.mainProgram}</div>
                <div className="study__prog">Профиль: {study.program}</div>
                <div className="study__year">Год поступления: {study.program}</div>
            </div>
            <div className="info__achiev info__text">
                ДОСТИЖЕНИЯ:
                {
                    achv.map((obj,idx)=>
                        <li key={idx}>
                            -{obj.li}
                        </li>
                    )
                }
            </div>
            <div className="info__skills info__text">
                УМЕНИЯ И НАВЫКИ:
                {
                    skills.map((obj,idx)=>
                        <p key={idx}>
                            {obj.p}
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default UserInfo;