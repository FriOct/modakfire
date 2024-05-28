import styled from "styled-components";
import EnterLogo from "../assets/EnterLogo.svg";
import Person from "../assets/Person.svg";
import Back from "../assets/Back.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    overflow-y: auto;
    overflow-x: hidden;
`;

const AppBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.56vh 3.13vw; /* 15px 30px */
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const LeftButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.04vw; /* 10px */
    width: 1.04vw; /* 10px */
    height: 2.08vh; /* 20px */
`;

const Vector = styled.img`
    width: 1vw; /* 10px */
    height: 3.75vh; /* 20px */
`;

const Title = styled.div`
    margin: 0 auto;
    width: 6.25vw; /* 30px */
    height: 3.96vh; /* 23px */
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 1.67vh; /* 16px */
    line-height: 3.96vh; /* 23px */
    color: #000000;
`;

const UserSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.56vh 3.13vw; /* 15px 30px */
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.83vw; /* 8px */
    width: 52.36vw; /* 322.67px / 16 */
    height: 6.46vh; /* 37px */
`;

const Avatar = styled.img`
    width: 4vw; /* 30px */
    height: 4vw; /* 30px */
    background: #ffddc5;
    border-radius: 2.92vh; /* 14px */
    position: relative;
`;

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%; /* 250.33px / 16 */
    height: 6.46vh; /* 37px */
`;

const UserId = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 1.67vh; /* 16px */
    color: #000000;
`;

const EditInfo = styled.div`
    width: 11.67vw; /* 56px */
    height: 1vh; /* 12px */
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1vh; /* 8px */
    color: #b3b3b3;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.56vh 3.13vw; /* 15px 30px */
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const MenuText = styled.div`
    width: auto;
    height: 3.96vh; /* 23px */
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1.67vh; /* 16px */
    line-height: 3.96vh; /* 23px */
    color: #000000;
`;

const VectorSmall = styled.img`
    width: 3.33vw; /* 5px */
    height: 1.04vh; /* 10px */
`;

const Seperator = styled.div`
    width: 100%;
    height: 0.9375rem; /* 15px */
    background: #ffddc5;
`;

const AppVersionSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.56vh 3.13vw; /* 15px 30px */
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const AppVersionText = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1.67vh; /* 16px */
    line-height: 3.96vh; /* 23px */
    color: #000000;
`;

const LatestVersion = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1.67vh; /* 16px */
    line-height: 3.96vh; /* 23px */
    color: #ffa464;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.56vh 3.13vw; /* 15px 30px */
    width: 100%;
    height: 6.67vh; /* 60px */
    background: #ffddc5;
`;

const FooterText = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1.04vh; /* 10px */
    line-height: 1.46vh; /* 14px */
    color: #ff9c56;
`;
const Settings = () => (
    <Container>
        <AppBar>
            <LeftButtonWrapper>
                <Vector src={Back}/>
            </LeftButtonWrapper>
            <Title>설정</Title>
            <LeftButtonWrapper />
        </AppBar>
        <UserSection>
            <UserInfo>
                <Avatar src={Person}/>
                <UserDetails>
                    <UserId>UserId</UserId>
                    <EditInfo>내 정보 수정하기</EditInfo>
                </UserDetails>
            </UserInfo>
            <VectorSmall src={EnterLogo}/>
        </UserSection>
        <Seperator />
        <MenuItem>
            <MenuText>알림</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <MenuItem>
            <MenuText>테마 설정</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <Seperator />
        <MenuItem>
            <MenuText>정기 기부 관리</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <MenuItem>
            <MenuText>증명서 발급</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <MenuItem>
            <MenuText>계좌 관리</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <Seperator />
        <MenuItem>
            <MenuText>홈 화면 설정</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <MenuItem>
            <MenuText>보안</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <MenuItem>
            <MenuText>일반</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <Seperator />
        <MenuItem>
            <MenuText>약관 및 개인정보 처리 동의</MenuText>
            <VectorSmall src={EnterLogo}/>
        </MenuItem>
        <Seperator />
        <AppVersionSection>
            <AppVersionText>앱 버전</AppVersionText>
            <LatestVersion>최신 버전</LatestVersion>
        </AppVersionSection>
        <Seperator />
        <Footer>
            <FooterText>앱 버전 1.1.0</FooterText>
        </Footer>
    </Container>
);

export default Settings;
