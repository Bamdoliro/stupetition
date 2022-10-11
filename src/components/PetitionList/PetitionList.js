import React, { useEffect, useState } from "react"
import MessageLogo from "../../assets/message.svg"
import ArrowLogo from "../../assets/arrow.svg"
import "./PetitionList.css"
import styled from 'styled-components';

export default function PetitionList({Title, Date, MessageNumber, ProgressDate}) {

    const [progressDate, setProgressDate] = useState(0)

    useEffect(() => {
        setProgressDate(ProgressDate)
    }, [progressDate])

    return (
        <li className="petition-list">
            <div className="petition-content">
                <div className="petition-area">
                    <div>
                        <span className="petition-title">
                            {Title}
                        </span>
                        <span className="petition-date">
                            {Date}
                        </span>
                    </div>
                    <img src={ArrowLogo} className="arrow-logo" />
                </div>
                <div className="petition-message-area">
                    <img src={MessageLogo} className="message-logo" />
                    <span className="message-number">
                        {MessageNumber}
                    </span>
                </div>
                <div class="progress-bar">
                    <Progress width={progressDate + "%"} />
                </div>
            </div>
        </li>
    )
}

const Progress = styled.div`
    width: ${props => props.width}; 
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: #4F98FF;
    color: #111;
    border-radius: 18px 18px 18px 18px;
`;