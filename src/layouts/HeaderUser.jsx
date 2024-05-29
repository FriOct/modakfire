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
    padding: 0 2vw;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

const LogoImage = styled.img`
    height: min(5vw, 35px);
    width: min(5vw, 35px);
`;

const HeaderSetting = ({ member_id }) => {
    let navigate = useNavigate();

    const navigateToBack = () => {
        navigate(-1);
    };

    const navigateToUserEdit = () => {
        navigate("/setting/user/useredit");
    };

    return (
        <HeaderWrapper>
            <LogoImage src={Back} onClick={() => navigateToBack()} />
            <LogoWrapper>
                {member_id ? `${member_id}님의 정보` : "로그인이 필요합니다"}
            </LogoWrapper>
            <LogoWrapper onClick={() => navigateToUserEdit()}>수정</LogoWrapper>
        </HeaderWrapper>
    );
};
export default HeaderSetting;
