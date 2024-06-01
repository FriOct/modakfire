import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SecondaryParagraph from "../components/Text/SecondaryParagraph";

const FooterWrapper = styled.footer`
    display: flex;
    padding: min(5vw, 25px);
    color: ${({theme}) => theme.fontColor.secondary};
    border-top: 1px solid ${({theme}) => theme.color.lightgray};
`

const ignorePageRegexList = ["^/center/\\d+/item/\\d+$", "^/payment.*$", "^/setting.*$", "^/mypage$", "^/login"];
const Footer = () => {
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
        return( 
            <FooterWrapper>
                <SecondaryParagraph>
                    모닥불: 이웃을 위한 작은 불씨
                </SecondaryParagraph>
            </FooterWrapper>
        );
}

export default Footer;