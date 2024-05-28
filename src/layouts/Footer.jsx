import styled from "styled-components";

const FooterWrapper = styled.footer`
    display: flex;
    padding: 2vh;
    color: ${({theme}) => theme.fontColor.secondary};
    border-top: 1px solid ${({theme}) => theme.color.lightgray};
`

const Footer = () => {
    return(
        <FooterWrapper>
            모닥불: 이웃을 위한 작은 불씨
        </FooterWrapper>
    )
}

export default Footer;