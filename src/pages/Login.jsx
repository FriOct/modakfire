import styled from "styled-components";
import googleLogo from "../assets/images/google_logo.png";
import LightTitle from "../components/Text/LightTitle";
import { googleLogin } from "../utils/firebase";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100vw, 500px);
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: min(65vw, 350px);
  height: min(11vw, 55px);
  border-radius: min(2vw, 10px);
  box-shadow: 0px 0px 8px ${({ theme }) => theme.color.shadow};
  img {
    width: min(5vw, 25px);
    background-size: cover;
  }
`;

const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: min(2vw, 10px);
`;

const GoogleLoginBtn = () => {
  return (
    <ButtonWrapper>
      <ButtonTextWrapper onClick={googleLogin}>
        <img src={googleLogo} />
        <LightTitle>구글로 로그인하기</LightTitle>
      </ButtonTextWrapper>
    </ButtonWrapper>
  );
};

const Login = () => {
  return (
    <PageWrapper>
      This is Login
      <GoogleLoginBtn />
    </PageWrapper>
  );
};

export default Login;
