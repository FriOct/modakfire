import styled from "styled-components";

const FooterWrapper = styled.footer`
    display: flex;
    padding: 2vh;
    color: ${({theme}) => theme.fontColor.secondary};
    border-top: 1px solid ${({theme}) => theme.color.lightgray};
`

const ignorePageRegexList = ["^/center/\\d+/item/\\d+$", "^/payment$", "^/paymentdetail/\\d$", "^/paymentfinish$", "^/setting$", "^/mypage$"];

const Footer = () => {
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
        return( 
            <FooterWrapper>
                모닥불: 이웃을 위한 작은 불씨
            </FooterWrapper>
        );
}

export default Footer;