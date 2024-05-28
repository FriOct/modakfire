import styled from "styled-components";

const SecondaryParagraphWrapper = styled.p`
    font-size: ${({theme}) => theme.fontSize.base};
    font-weight: normal;
    color: ${({theme}) => theme.fontColor.secondary};
`

const SecondaryParagraph = (props) => {
    return (
        <SecondaryParagraphWrapper>
            {props.children}
        </SecondaryParagraphWrapper>
    )
}

export default SecondaryParagraph;