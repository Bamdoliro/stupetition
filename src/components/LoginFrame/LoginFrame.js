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
                <div className="login-inner-box">
                    <div className="login-inner-content"> {/* 클래스명 굉장히 맘에 안듬 */}
                        <div className="login-title">로그인</div>
                        <div className="login-input-area">
                            <LoginInput type="text" placeholder="이메일을 입력해 주세요." />
                            <PassWordInput type="text" placeholder="비밀번호를 입력해 주세요." />
                        </div>
                    </div>
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
    background-color: #C6B5D7;
`

const LoginInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 300px;
    border-bottom: 2.5px solid #C6B5D7;
    margin-bottom: 24px;
`

const PassWordInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 300px;
    border-bottom: 2.5px solid #C6B5D7;
    margin-bottom: 24px;
`