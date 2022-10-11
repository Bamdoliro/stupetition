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
                <PetitionList 
                    Title = {"아침운동 없애주세요"}
                    Date = {"02/02 - 04/02"}
                    MessageNumber = {23}
                    ProgressDate = {60}
                />
            </ul>
        </div>
    )
}