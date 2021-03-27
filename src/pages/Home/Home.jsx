import React, {Fragment} from 'react'
import { useSelector, useDispatch} from "react-redux";

import './home.css'

import { Slider, ProjMiniCard } from '../../Component'


import { fetchCards } from "../../redux/actions/cards";


function Home( ) {

    const dispatch = useDispatch();
    const items  = useSelector(( {cards} ) => cards.items);

    React.useEffect(()=> {
        dispatch(fetchCards());
    },[]);

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

