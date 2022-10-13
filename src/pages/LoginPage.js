import LoginFrame from "../components/LoginFrame/LoginFrame"
import styled from 'styled-components';

export default function LoginPage() {
    return (
        <LoginBackGround>
            <LoginFrame />
        </LoginBackGround>
    )
}

const LoginBackGround = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f4f3;
    height: 100vh;
`;