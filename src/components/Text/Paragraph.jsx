import styled from "styled-components";

const ParagraphWrapper = styled.p`
    font-size: ${({theme}) => theme.fontSize.base};
    font-weight: normal;
`

const Paragraph = (props) => {
    return (
        <ParagraphWrapper>
            {props.children}
        </ParagraphWrapper>
    )
}

export default Paragraph