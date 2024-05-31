import styled from "styled-components";
import Back from "../assets/Back.svg";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: min(11vw, 55px);
    background-color: #ffffff;
    border-bottom: 1px solid #a9a9a9;
    padding: ${({theme}) => theme.padding.header};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

const LogoImage = styled.img`
height: min(4vw, 25px);
width: min(6vw, 30px);
`

const HeaderUserEdit = () => {

    let navigate = useNavigate();

    const navigateToBack = () => {
        navigate(-1);
    };

    return (
        <HeaderWrapper>
            <LogoImage className="clickable" src={Back} onClick={() => navigateToBack()}/>
            <LogoWrapper>
                내 정보 수정
            </LogoWrapper>
            <LogoImage className="clickable" style={{visibility:"hidden"}}/>
        </HeaderWrapper>
    );
};
export default HeaderUserEdit;
