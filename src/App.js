import Slider from './Component/Slider/Slider'
import TopMenu from './Component/TopMenu/TopMenu'
import UserMiniMenu from './Component/UI/UserMiniMenu/UserMiniMenu'

import UserImg from './assets/img/users/user_ico_dev.svg'

function App() {
    return (
        <div className="wrapper">
            <UserMiniMenu />
            <Slider />
            <TopMenu />
        <div className="content"> CONTENT </div>
        </div>
    )
};

export default App;
