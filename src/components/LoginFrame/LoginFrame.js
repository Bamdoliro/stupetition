import "./LoginFrame.css"
import styled from 'styled-components';
import Logo from "../../assets/logo.svg"

export default function LoginFrame() {
    return (
        <div className="login-frame">
            <LoginImgBox>
                <img src={Logo} className="login-main-logo" />
            </LoginImgBox>
            <div className="login-box">

            </div>
        </div>
    )
}

const LoginImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    background-color: #C6B5D7;
`
