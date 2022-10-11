import React from "react"
import "./MainHeader.css"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"

export default function MainHeader() {
    return (
        <div className="main-header">
            {/* 로고 부분 */}

            <div className="main-header-logo">
                <img src={Logo} />
                <span>
                    학생청원
                </span>
            </div>
            {/* 검색창 */}
            <form className="main-header-form">
                <input
                    type="text"
                    className="main-header-input"
                    placeholder="청원명을 입력해주세요."
                />
                <button className="search-btn">
                    <img src={Search} className="search-logo" />
                </button>
            </form>
        </div>
    )
}