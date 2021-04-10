import React, {Fragment} from 'react'
import './profile.css'

import { UserInfo, ProjWrapper } from "../../Component";
import {useDispatch, useSelector} from "react-redux";

import {fetchSelProj} from "../../redux/actions/cadsOnProfile"

function Profile(){
    const dispatch = useDispatch();
    const user = useSelector(( { user } ) => user.items);
    const isLoaded = useSelector ( ({ user }) => user.isLoaded);
    const selectProj = useSelector( ({user}) => user.selectProj);
    const objSelProj = useSelector(({cardsOnProfile}) => cardsOnProfile.items)

    React.useEffect(()=>
        dispatch(fetchSelProj(selectProj)),[]
    )

    console.log(objSelProj)
    return(
        <section className="profile_page">
            <div className="container">
                { isLoaded ?
                    <Fragment>
                        <UserInfo
                            srcIco={user.userImg}
                            fullName={user.userFullName}
                            group={user.userGroup}
                            years={user.userYears}
                            study={user.studyInfo}
                            achv={user.userAchiev}
                            skills={user.userSkills}
                        />

                        <ProjWrapper projsId={selectProj}/>
                    </Fragment>
                    : <div>ne zagruaheno</div>
                }
            </div>
        </section>
    )
}

export default Profile;