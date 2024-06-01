import styled from "styled-components";

const TitleWrapper = styled.h1`
    font-size: ${({theme}) => theme.fontSize.large};
    font-weight: bold;
`

const Title = (props) => {
    return (
        <TitleWrapper>
            {props.children}
        </TitleWrapper>
    )
}

export default Title;