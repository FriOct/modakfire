import styled from "styled-components";
import Logo from "../assets/logo.png";
import googleLogo from "../assets/images/google_logo.png";
import LightTitle from "../components/Text/LightTitle";
import { googleLogin } from "../utils/firebase";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100vw, 500px);
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: min(2vw, 10px);
`;

const TitleText = styled.div``;

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

const ButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: min(2vw, 10px);
`;

const GoogleLoginBtn = () => {
  return (
    <ButtonWrapper>
      <ButtonContentWrapper onClick={googleLogin}>
        <img src={googleLogo} />
        <LightTitle>구글로 로그인하기</LightTitle>
      </ButtonContentWrapper>
    </ButtonWrapper>
  );
};

const MainTitleText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 900;
  color: ${({ theme }) => theme.fontColor.brown};
`;

const SubTitleText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: normal;
  color: ${({ theme }) => theme.fontColor.brown};
`;

const LogoImage = styled.img`
  width: min(34vw, 170px);
  height: min(39vw, 195px);
`;

const Seperator = styled.div`
  width: min(100vw, 500px);
  height: min(16vw, 60px);
`;

const AnonymousLoginText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: normal;
  color: ${({ theme }) => theme.fontColor.gray}; // TODO style 지정 안됨
  color: #b5b5b5;
`;

const Login = () => {
  return (
    <PageWrapper>
      <LogoImage src={Logo} />
      <MainTitleText>모닥불</MainTitleText>
      <SubTitleText>지역사회 기부 플랫폼</SubTitleText>
      <Seperator />
      <GoogleLoginBtn />
      <AnonymousLoginText>로그인 없이 계속하기</AnonymousLoginText>
    </PageWrapper>
  );
};

export default Login;
