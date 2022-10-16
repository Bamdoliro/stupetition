import styled from 'styled-components';
import SignIn from '../components/SignIn/SignIn';

export default function LoginPage() {
    return (
        <LoginBackGround>
            <SignIn />
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