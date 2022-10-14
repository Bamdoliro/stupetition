import "./LoginFrame.css"
import Logo from "../../assets/logo.svg"
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp"
import styled from 'styled-components';

export default function LoginFrame() {
    return (
        <div className="login-frame">
            <LoginImgBox>
                <img src={Logo} className="login-main-logo" />
            </LoginImgBox>
            <div className="login-box">
                <div className="login-inner-box">
                    <SignUp />
                </div>
            </div>
        </div>
    )
}

const LoginImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #F2FAFE;
`