import "./SchoolSearchModal.css"
import styled from 'styled-components';
import SearchLogo from "../../assets/search_blue.svg"
import { Link } from "react-router-dom";

export default function SchoolSearchModal() {
    return (
        <div className="school-search-modal">
            <div className="school-main-modal">
                <div className="modal-inner-frame">
                    <div className="modal-title">
                        학교 검색
                    </div>
                    <div className="school-search-frame">
                        <SchoolSearchBar placeholder="학교 이름을 입력해 주세요." />
                        <img
                            className="search-logo"
                            src={SearchLogo}
                        />
                    </div>
                </div>
                <Link className="school-registration-btn">학교가 검색되지 않나요?</Link>
            </div>
        </div>
    )
}

const SchoolSearchBar = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 100%;
`