import styled from "styled-components";
import Logo from '../assets/logo.png'
import Back from '../assets/Back.svg';
import gear from '../assets/gear.svg';
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: min(11vw, 55px);
    background-color: #ffffff;
    border-bottom: 1px solid #A9A9A9;
    padding: 0 2%;
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
    height: min(7vw, 35px);
    width: min(7vw, 35px);
`

const HeaderMyPage = () => {

    let navigate = useNavigate();

    const navigateToBack = () => {
        navigate(-1);
    };

    const navigateToSetting = () => {
        navigate("/setting");
    };

    return (
        <HeaderWrapper>
            <LogoImage src={Back} onClick={() => navigateToBack()}/>
            <LogoWrapper>
                <LogoImage src={Logo}/>
                모닥불
            </LogoWrapper>
            <LogoImage src={gear} onClick={() => navigateToSetting()}/>
        </HeaderWrapper>
    );
}
export default HeaderMyPage