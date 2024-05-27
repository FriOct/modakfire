import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: #ffffff;
`;

const Setting = () => {
  return (
    <Container>
      <h1>Setting</h1>
    </Container>
  );
}



export default Setting