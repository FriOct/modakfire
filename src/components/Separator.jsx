import styled from "styled-components";

const Seperator = styled.div`
    width: min(100vw, 500px);
    height: min(2vw, 10px);
    background-color: ${({theme}) => theme.color.secondary};
`

export default Seperator