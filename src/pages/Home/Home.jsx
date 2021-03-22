import React, {Fragment} from 'react'
import { useSelector, useDispatch} from "react-redux";

import './home.css'

import { Slider, ProjMiniCard } from '../../Component'


import cardImg from '../../assets/img/project/Cards_main_dev.png'
import {setCards} from "../../redux/actions/cards";

//Dev вариант
const cardsItems = [{
    id: 1,
    imgUrl: cardImg,
    name: 'Название проекта',
    description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    project_status: 'opn',
    maxPeople: 13,
    currentPeople: 12,
},
    {
        id: 2,
        imgUrl: cardImg,
        name: 'Название проекта',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        project_status: 'iprgrs',
        maxPeople: 13,
        currentPeople: 13
    },
    {
        id: 3,
        imgUrl: cardImg,
        name: 'Название проекта',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        project_status: 'fnshd',
        maxPeople: 13,
        currentPeople: 13
    }
]

function Home( ) {

    const dispatch = useDispatch();
    const { items } = useSelector(( {cards} ) => {
        return {
            items: cards.items,
        }
    });

    React.useEffect(()=> {
        dispatch(setCards(cardsItems));
    }, []);

    return (
        <Fragment>
            <Slider />
            <div className="content">
                <div className="card__wrapper">
                {
                    items.map((obj) =>
                    <ProjMiniCard key={obj.id} {...obj} />
                    )
                }
                </div>
            </div>
        </Fragment>
    )
}

export default Home;

