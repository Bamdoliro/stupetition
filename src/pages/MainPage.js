import React from "react"
import MainHeader from "../components/MainHeader/MainHeader"
import MainTabBar from "../components/MainTabBar/MainTabBar"
import MainContent from "../components/MainContent/MainContent"
import { TabBarContext } from "../context/TabBarContext"

export default function MainPage() {
    return (
        <div>
            <MainHeader />
            <MainTabBar />
            <MainContent 
                SchoolName = {"부산 소프트웨어 마이스터 고등학교"}
            />
        </div>
    )
}