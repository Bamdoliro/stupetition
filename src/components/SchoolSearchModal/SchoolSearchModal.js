import "./SchoolSearchModal.css"
import styled from 'styled-components';
import SearchLogo from "../../assets/search_blue.svg"
import { Link } from "react-router-dom";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";

export default function SchoolSearchModal({ isOpen, closeModal }) {

    const [SearchWord, setSearchWord] = useState("");

    useEffect(() => {
        console.log(SearchWord)
    }, [SearchWord])


    return (
        <React.Fragment>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                ceter
                className="school-search-modal"
                style={{ overlay: { background: "rgba(0, 0, 0, 0.4)", border: "none" } }}
                ariaHideApp={false}
            >
                <div className="school-main-modal">
                    <div className="modal-inner-frame">
                        <div className="modal-title">
                            학교 검색
                        </div>
                        <div className="school-search-frame">
                            <SchoolSearchBar placeholder="학교 이름을 입력해 주세요." onChange={(e) => setSearchWord(e.target.value)} />
                            <img
                                className="search-logo"
                                src={SearchLogo}
                            />
                        </div>
                    </div>
                    <Link className="school-registration-btn">학교가 검색되지 않나요?</Link>
                </div>
            </Modal>
        </React.Fragment>
    )
}

const SchoolSearchBar = styled.input`
    border: none;
    outline: none;
    height: 41px;
    font-size: 16px;
    width: 100%;
`