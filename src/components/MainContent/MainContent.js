import React from "react"
import "./MainContent.css"
import PetitionList from "../PetitionList/PetitionList.js"

export default function MainContent() {
    return (
        <div className="main-container">
            <div className="main-school-name">
                부산 소프트웨어 마이스터고등학교
            </div>
            <ul className="main-petition-ul">
                <PetitionList />
            </ul>
        </div>
    )
}