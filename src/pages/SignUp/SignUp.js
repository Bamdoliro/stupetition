import styled from 'styled-components';
import Logo from "../../assets/logo.svg"
import "./SignUp.css"
import SchoolSearchModal from "../../components/SchoolSearchModal/SchoolSearchModal"
import { useEffect, useState } from 'react';
import {baseUrl} from "../../api/url"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function SignIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log(email)
    }, [email])

    useEffect(() => {
        console.log(password)
    }, [password])

    // api 
    const joinUser = async (email, password) => {
        try {
            const response = await axios.post(`${baseUrl}/user/join/`, {
                params: {
                    "email": email,
                    "password": password,
                    "schoolId": 0,
                },
            })
            console.log(response.data)
            setEmail("")
            setPassword("")
            navigate("/signin")
        } catch (e) {
            console.log(e);
        }
    };


    // modal
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    const SearchSchoolClick = () => {
        setSearchModalOpen(true);
    }

    return (
        <>
            <BackGround>
                <div className="login-frame">
                    <LoginImgBox>
                        <img src={Logo} className="login-main-logo" />
                    </LoginImgBox>
                    <div className="login-box">
                        <div className="login-inner-box">
                            <form className="login-inner-content">
                                <div className="login-title">회원가입</div>
                                <div className="login-input-area">
                                    <SignUpInput 
                                        type="email" 
                                        placeholder="가입할 이메일을 입력해 주세요."
                                        onChange={(e) => setEmail(e.target.value)}    
                                    />
                                    <PassWordInput 
                                        type="password" 
                                        placeholder="사용할 비밀번호를 입력해 주세요."
                                        onChange={(e) => setPassword(e.target.value)}    
                                    />
                                    <RePassWordInput type="password" placeholder="비밀번호를 다시 한번 입력해 주세요." />
                                    <SearchSchoolInput type="text" placeholder="학교를 선택해 주세요." onClick={SearchSchoolClick} />
                                </div>
                                <SignUpButton onClick={() => joinUser(email, password)}>
                                    회원가입
                                </SignUpButton>
                            </form>
                        </div>
                    </div>
                </div>
            </BackGround>
            <SchoolSearchModal
                isOpen={searchModalOpen}
                closeModal = {() => setSearchModalOpen(false) }
            />
        </>
    )
}

const BackGround = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f4f3;
    height: 100vh;
`

const LoginImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: #F2FAFE;
`

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

const SearchSchoolInput = styled.input`
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