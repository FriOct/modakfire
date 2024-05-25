import styled from "styled-components"

const MainWrapper = styled.div`
    display: flex;
    background-color: #fff;
`

const Main = (props) => {
    return (
    <MainWrapper>
        {props.children}
    </MainWrapper>
    )
}

export default Main