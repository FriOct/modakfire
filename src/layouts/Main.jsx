import styled from "styled-components"

const MainWrapper = styled.div`
    display: flex;
    width: min(100vw, 500px);
    background-color: ${({theme}) => theme.color.bg};
`

const Main = (props) => {
    return (
    <MainWrapper>
        {props.children}
    </MainWrapper>
    )
}

export default Main