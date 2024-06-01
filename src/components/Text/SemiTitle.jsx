import styled from "styled-components";

const SemiTitleWrapper = styled.h2`
    font-size: ${({theme}) => theme.fontSize.semilarge};
`

const SemiTitle = (props) => {
    return (
        <SemiTitleWrapper>
            {props.children}
        </SemiTitleWrapper>
    )
}

export default SemiTitle;