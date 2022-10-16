import React from "react"
import "./MainHeader.css"
import Logo from "../../assets/logo.svg"
import Search from "../../assets/search.svg"
import { Link } from "react-router-dom"

export default function MainHeader() {
    return (
        <div className="main-header">
            {/* 로고 부분 */}
            <div className="main-header-logo">
                <img src={Logo} className="logo" />
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

            {/* 로그인 회원가입 부분 */}
            <div className="main-header-login">
                <Link to="signin" className="sign-in" onClick={() => console.log("로그인 버튼 눌림")}>
                    로그인
                </Link>
                <Link to="/signup" className="sign-up" onClick={() => console.log("회원가입 버튼 눌림")}>
                    회원가입
                </Link>
            </div>
        </div>
    )
}