import React, { useState } from "react"
import "./MainTabBar.css"

export default function MainTabBar() {
    const [focus, setFocus] = useState(1);

    return (
        <ul className="main-tab-bar">
            <li className="main-tab-item" onClick={() => setFocus(1)}>
                <span className={focus == 1 ? "item-focus-text" : "item-text"}>
                    진행 중인 청원
                </span>
            </li>
            <li className="main-tab-item" onClick={() => setFocus(2)}>
                <span className={focus == 2 ? "item-focus-text" : "item-text"}>
                    대기 중인 청원
                </span>
            </li>
            <li className="main-tab-item" onClick={() => setFocus(3)}>
                <span className={focus == 3 ? "item-focus-text" : "item-text"}>
                    완료된 청원
                </span>
            </li>
        </ul>
    )
}