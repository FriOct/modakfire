import styled from "styled-components";
import Back from "../assets/Back.svg";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    height: min(11vw, 55px);
    weight: 100%;
    display: flex;
    justify-content: flex-start;
    background-color: #ffffff;
    padding: ${({theme}) => theme.padding.header};
    gap: 2vw;
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.fontColor.brown};
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 700;
`;

const LogoImage = styled.img`
height: min(4vw, 25px);
width: min(6vw, 30px);
`

const HeaderBack = () => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <HeaderWrapper>
            <LogoWrapper onClick={goBack}>
                <LogoImage src={Back} />
            </LogoWrapper>
            <Text>정기기부</Text>
        </HeaderWrapper>
    );
};
export default HeaderBack;
