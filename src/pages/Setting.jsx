import styled from "styled-components";
import EnterLogo from "../assets/EnterLogo.svg";
import Person from "../assets/Person.svg";

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
    padding: 0.9375rem 1.875rem; /* 15px 30px */
    width: 100%;
    height: 3.75rem; /* 60px */
`;

const LeftButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.625rem; /* 10px */
    width: 0.625rem; /* 10px */
    height: 1.25rem; /* 20px */
`;

const Vector = styled.div`
    width: 0.625rem; /* 10px */
    height: 1.25rem; /* 20px */
    border: 0.125rem solid #000000; /* 2px */
`;

const Title = styled.div`
    margin: 0 auto;
    width: 1.875rem; /* 30px */
    height: 1.4375rem; /* 23px */
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 1rem; /* 16px */
    line-height: 1.4375rem; /* 23px */
    color: #000000;
`;

const UserSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem 1.875rem; /* 15px 30px */
    width: 100%;
    height: 3.75rem; /* 60px */
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem; /* 8px */
    width: 20.166875rem; /* 322.67px / 16 */
    height: 2.3125rem; /* 37px */
`;

const Avatar = styled.img`
    width: 1.875rem; /* 30px */
    height: 1.875rem; /* 30px */
    background: #ffddc5;
    border-radius: 0.875rem; /* 14px */
    position: relative;
`;

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.125rem; /* 2px */
    width: 15.646875rem; /* 250.33px / 16 */
    height: 2.3125rem; /* 37px */
`;

const UserId = styled.div`
    width: 3.25rem; /* 52px */
    height: 1.4375rem; /* 23px */
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 1rem; /* 16px */
    line-height: 1.4375rem; /* 23px */
    color: #000000;
`;

const EditInfo = styled.div`
    width: 3.5rem; /* 56px */
    height: 0.75rem; /* 12px */
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 0.5rem; /* 8px */
    line-height: 0.75rem; /* 12px */
    color: #b3b3b3;
`;

const MenuSection = styled.div`
    width: 100%;
    height: 0.9375rem; /* 15px */
    background: #ffddc5;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem 1.875rem; /* 15px 30px */
    width: 100%;
    height: 3.75rem; /* 60px */
`;

const MenuText = styled.div`
    width: auto;
    height: 1.4375rem; /* 23px */
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1rem; /* 16px */
    line-height: 1.4375rem; /* 23px */
    color: #000000;
`;

const VectorSmall = styled.img`
    width: 0.3125rem; /* 5px */
    height: 0.625rem; /* 10px */
    border: 0.125rem solid #ffddc5; /* 2px */
    transform: rotate(-180deg);
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
    padding: 0.9375rem 1.875rem; /* 15px 30px */
    width: 100%;
    height: 3.75rem; /* 60px */
`;

const AppVersionText = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1rem; /* 16px */
    line-height: 1.4375rem; /* 23px */
    color: #000000;
`;

const LatestVersion = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 1rem; /* 16px */
    line-height: 1.4375rem; /* 23px */
    color: #ffa464;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem 1.875rem; /* 15px 30px */
    width: 100%;
    height: 3.75rem; /* 60px */
    background: #ffddc5;
`;

const FooterText = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 0.625rem; /* 10px */
    line-height: 0.875rem; /* 14px */
    color: #ff9c56;
`;

const Settings = () => (
    <Container>
        <AppBar>
            <LeftButtonWrapper>
                <Vector />
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
