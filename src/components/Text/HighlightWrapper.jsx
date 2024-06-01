import styled from "styled-components";

const StyledWrapper = styled.div`
    display: inline;
    box-shadow: inset 0 max(-3vw ,-15px) 0 ${({theme}) => theme.color.highlight}; 
`

const HighlightWrapper = (props) => {
    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    )
}

export default HighlightWrapper