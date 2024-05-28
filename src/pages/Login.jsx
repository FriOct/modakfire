import styled from "styled-components";
import Logo from "../assets/logo.png";
import FireWood from "../assets/icons/firewood.svg";
import googleLogo from "../assets/images/google_logo.png";
import LightTitle from "../components/Text/LightTitle";
import { useNavigate } from "react-router-dom";
import { googleLogin } from "../utils/firebase";
import { useState } from "react";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100vw, 500px);
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: min(2vw, 10px);
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
  :hover {
    cursor: grab;
  }
`;

const ButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: min(2vw, 10px);
`;

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

const ButtonWhiteText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: normal;
  color: #fff;
`;

const LogoImage = styled.img`
  width: min(34vw, 170px);
  height: min(39vw, 195px);
`;

const RankImage = styled.img`
  width: min(40vw, 200px);
  height: min(40vw, 200px);
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

// TODO 로그인상태 유지하는 기능 추가하기
const GoogleLoginBtn = ({ setLogged }) => {
  async function login() {
    googleLogin(setLogged);
  }

  return (
    <ButtonWrapper>
      <ButtonContentWrapper onClick={login}>
        <img src={googleLogo} />
        <LightTitle>구글로 로그인하기</LightTitle>
      </ButtonContentWrapper>
    </ButtonWrapper>
  );
};

const Login = () => {
  const [logged, setLogged] = useState(false);

  return logged ? (
    <FirstLoggedIn />
  ) : (
    <PageWrapper>
      <LogoImage src={Logo} />
      <MainTitleText>모닥불</MainTitleText>
      <SubTitleText>지역사회 기부 플랫폼</SubTitleText>
      <Seperator />
      <GoogleLoginBtn setLogged={setLogged} />
      <AnonymousLoginText>로그인 없이 계속하기</AnonymousLoginText>
    </PageWrapper>
  );
};

const FirstLoggedIn = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <RankImage src={FireWood} />
      <MainTitleText>장작</MainTitleText>
      <SubTitleText>장작에서 불씨를 거쳐 모닥불까지 되어주세요</SubTitleText>
      <Seperator />
      <ButtonWrapper
        style={{ backgroundColor: "#FF8A3D" }}
        onClick={() => navigate(`/`)}
      >
        <ButtonWhiteText>곧장 기부하러 가기</ButtonWhiteText>
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default Login;
