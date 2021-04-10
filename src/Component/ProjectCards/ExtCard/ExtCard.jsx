import React, {useState} from 'react'
import { useSpring, animated as a } from 'react-spring'
import './extcard.css'

function ExtCard () {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return(
        <div onClick={() => set(state => !state)}>
            <a.div className="project_card project_card_back" style={{opacity: opacity.interpolate(o => 1 - o), transform}}>
                <div className="project_card-title project_card-title_back">
                    Название проекта
                </div>
                <div className="project_card-decr">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </div>
                <div className="project_card-date">10.04.21</div>
                <div className="project_card_teacher-wrap">
                    <img src="/ico_author_dev.png" alt="" />
                        <div className="project_card_teacher-info">
                            <div className="project_card_teacher-name">
                                Иванов Иван Иванович
                            </div>
                            <div className="project_card_teacher-email">
                                ivanov@istu.edu
                            </div>
                        </div>
                        <div className="project_card_teacher-social">
                        </div>
                </div>
            </a.div>
            <a.div className="project_card"
                   style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
                <div className="project_card-title">
                    Название проекта
                </div>
                <div className="project_card-decr">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </div>
                <div className="project_card-priority">1</div>
                <div className="project_card-institutes">
                    <div className="project_card-institute">
                        <a href="/">
                            <img src="icon-institute.svg" alt=""/>
                        </a>
                    </div>
                    <div className="project_card-institute">
                        <a href="/">
                            <img src="icon-institute.svg" alt=""/>
                        </a>
                    </div>
                </div>
            </a.div>
        </div>
    )
}

export default ExtCard