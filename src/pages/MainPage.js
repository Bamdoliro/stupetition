import { useState } from "react";
import MainHeader from "../components/MainHeader/MainHeader"
import MainTabBar from "../components/MainTabBar/MainTabBar"
import MainContent from "../components/MainContent/MainContent"
import { TabBarContext } from "../context/TabBarContext"

export default function MainPage() {
    const [TabFocus, setTabFocus] = useState(1);

    return (
        <TabBarContext.Provider value={{TabFocus, setTabFocus}}>
            <MainHeader />
            <MainTabBar />
            <MainContent 
                SchoolName = {"부산 소프트웨어 마이스터 고등학교"}
            />
        </TabBarContext.Provider>
    )
}