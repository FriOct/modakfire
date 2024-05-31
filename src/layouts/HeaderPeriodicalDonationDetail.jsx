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
    padding: ${({ theme }) => theme.padding.primary};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.medium};
`;

const LogoImage = styled.img`
    height: min(4vw, 35px);
    width: min(4vw, 35px);
`;

const HeaderSetting = ({periodical_donation_id}) => {
    let navigate = useNavigate();

    return (
        <HeaderWrapper>
            <LogoImage src={Back} onClick={() => {navigate(-1);}} />
            <LogoWrapper onClick={ ()=>{navigate("/setting/periodicaldonation/edit", { state: { periodical_donation_id: periodical_donation_id } });}}>수정</LogoWrapper>
        </HeaderWrapper>
    );
};
export default HeaderSetting;
