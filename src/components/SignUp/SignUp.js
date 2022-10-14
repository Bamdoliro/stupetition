import styled from 'styled-components';
import "./SignUp.css"

export default function SignIn() {
    const SignUpBtnClick = () => {
        console.log("클릭");
    }

    return (
        <>
            <div className="login-inner-content"> {/* 클래스명 굉장히 맘에 안듬 */}
                <div className="login-title">회원가입</div>
                <div className="login-input-area">
                    <SignUpInput type="text" placeholder="가입할 이메일을 입력해 주세요." />
                    <PassWordInput type="password" placeholder="사용할 비밀번호를 입력해 주세요." />
                    <RePassWordInput type="password" placeholder="비밀번호를 다시 한번 입력해 주세요." />
                </div>
                <SignUpButton onClick={SignUpBtnClick}>
                    회원가입
                </SignUpButton>
            </div>
        </>
    )
}

const SignUpInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 330px;
    border-bottom: 2.5px solid #4361EE;
    margin-bottom: 24px;
`

const PassWordInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 330px;
    border-bottom: 2.5px solid #4361EE;
    margin-bottom: 24px;
`

const RePassWordInput = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 330px;
    border-bottom: 2.5px solid #4361EE;
    margin-bottom: 24px;
`

const SignUpButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 100px;
    float: right;
    border: none;
    border-radius: 8px;
    padding: 18px;
    outline: none;
    background-color: #4361EE;
    color: #fff;
    width: 100px;
    height: 30px;
    cursor: pointer;
`