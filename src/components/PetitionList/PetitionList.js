import React, { useState } from "react"
import MessageLogo from "../../assets/message.svg"
import ArrowLogo from "../../assets/arrow.svg"
import "./PetitionList.css"
import styled from 'styled-components';

export default function PetitionList() {

    const [count, setProgress] = useState(60)

    return (
        <li className="petition-list">
            <div className="petition-content">
                <div className="petition-area">
                    <div>
                        <span className="petition-title">
                            아침운동 없애주세요
                        </span>
                        <span className="petition-date">
                            02/02 - 04/02
                        </span>
                    </div>
                    <img src={ArrowLogo} className="arrow-logo" />
                </div>
                <div className="petition-message-area">
                    <img src={MessageLogo} className="message-logo" />
                    <span className="message-number">
                        23
                    </span>
                </div>
                <div class="progress-bar">
                    <Progress width={count + "%"} />
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