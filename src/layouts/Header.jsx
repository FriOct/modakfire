import styled from "styled-components";
import Logo from '../assets/logo.png'

const HeaderWrapper = styled.header`
    height: 5vh;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border-bottom: 1px solid #A9A9A9;
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1vh;
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize.large};
    color: ${({theme}) => theme.fontColor.brown};
`

const LogoImage = styled.img`
    height: 4vh;
    width: 4vh;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrapper>
                <LogoImage src={Logo}/>
                모닥불
            </LogoWrapper>
        </HeaderWrapper>
    );
}
export default Header