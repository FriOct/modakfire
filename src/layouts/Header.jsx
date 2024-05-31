import styled from "styled-components";
import Logo from '../assets/logo.png'
import back from '../assets/Back.svg'
import person from '../assets/icons/person.svg'
import { useLocation, useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    height: min(11vw, 55px);
    display: flex;
    padding: 0 min(5vw, 25px);
    align-items: center;
    justify-content: space-between;
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

const BackWrapper = styled.img`
    height: min(4vw, 25px);
    width: min(6vw, 30px);
`

const IconWrapper = styled.img`
    height: min(6vw, 30px);
    width: min(6vw, 30px);
`

const ignorePageRegexList = ["^/payment.*$", "^/setting.*$", "^/mypage$", "^/login"];



const Header = () => {
    const navigate = useNavigate();
    const currentPath = useLocation().pathname;
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
                <BackWrapper className="clickable" onClick={() => navigate(-1)} src={back}/>
                <LogoWrapper className="clickable" onClick={() => navigate("/")}>
                    <LogoImage src={Logo}/>
                    모닥불
                </LogoWrapper>
                <IconWrapper className="clickable" onClick={() => navigate("/mypage")} src={person}/>
            </HeaderWrapper>
        );
}
export default Header