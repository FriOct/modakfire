import styled from "styled-components";
import Back from '../assets/Back.svg';
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    height: min(11vw, 55px);
    weight: 100%;
    display: flex;
    justify-content: flex-start; 
    background-color: #ffffff;
    padding: 8px;
    border-bottom: 1px solid #A9A9A9;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize.large};
    color: ${({theme}) => theme.fontColor.brown};
`

const LogoImage = styled.img`
    height: min(7vw, 24px);
    width: min(7vw, 24px);
`

const HeaderBack = () => {

    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <HeaderWrapper>
            <LogoWrapper onClick={goBack}>
                <LogoImage src={Back}/>
            </LogoWrapper>
        </HeaderWrapper>
    );
}
export default HeaderBack