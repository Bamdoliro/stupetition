import React, { useContext } from "react"
import { TabBarContext } from "../../context/TabBarContext"
import "./MainTabBar.css"

export default function MainTabBar() {

    const { TabFocus, setTabFocus } = useContext(TabBarContext);

    return (
        <div className="main-tab-bar">
            <ul className="main-tab-frame">
                <li className="main-tab-item" onClick={() => setTabFocus(1)}>
                    <span className={TabFocus == 1 ? "item-focus-text" : "item-text"}>
                        진행 중인 청원
                    </span>
                </li>
                <li className="main-tab-item" onClick={() => setTabFocus(2)}>
                    <span className={TabFocus == 2 ? "item-focus-text" : "item-text"}>
                        대기 중인 청원
                    </span>
                </li>
                <li className="main-tab-item" onClick={() => setTabFocus(3)}>
                    <span className={TabFocus == 3 ? "item-focus-text" : "item-text"}>
                        완료된 청원
                    </span>
                </li>
            </ul>
        </div>
    )
}