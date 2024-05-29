import styled from "styled-components";
import Logo from '../assets/logo.png'

const HeaderWrapper = styled.header`
    height: min(11vw, 55px);
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border-bottom: 1px solid ${({theme}) => theme.color.lightgray};
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

const ignorePageRegexList = ["^/payment$", "^/paymentdetail/\\d$", "^/paymentfinish$", "^/setting$", "^/mypage$"];



const Header = () => {
    const currentPath = window.location.pathname;
    let isIgnore = false;
    ignorePageRegexList.forEach(Regex => {
        if(currentPath.search(Regex) != -1)
            isIgnore = true;
    });
    if(isIgnore){
        return null;
    }
    else
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