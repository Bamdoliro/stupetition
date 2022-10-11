import React from "react"
import MainHeader from "../components/MainHeader/MainHeader"
import MainTabBar from "../components/MainTabBar/MainTabBar"
import MainContent from "../components/MainContent/MainContent"

export default function MainPage() {
    return (
        <div>
            <MainHeader />
            <MainTabBar />
            <MainContent />
        </div>
    )
}