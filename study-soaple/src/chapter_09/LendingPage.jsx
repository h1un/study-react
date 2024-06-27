import React, {useState} from "react";
import Toolbar from "./ToolBar";

function LendingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }

    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}/>
            <div style={{padding: 16}}>소플과 함꼐 하는 리액트 공부</div>
        </div>
    )
}

export default LendingPage;
