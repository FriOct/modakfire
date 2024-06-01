import styled from "styled-components";
import Person from "../../../assets/Person.svg";
import Back from "../../../assets/Back.svg";
import HeaderSetting from "../../../layouts/HeaderSetting";
import { useRecoilValue } from 'recoil';
import { userState } from '../../../recoil/atoms/userAtom';
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
    overflow-y: auto;
    overflow-x: hidden;
`;

const UserSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 7vw;
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw; /* 8px */
    width: 52.36vw; /* 322.67px / 16 */
    height: 6.46vh; /* 37px */
`;

const Avatar = styled.img`
    height: min(8vw, 35px);
    width: min(8vw, 35px);
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
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #000000;
`;

const EditInfo = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #b3b3b3;
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 7vw;
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const MenuText = styled.div`
    width: auto;
    height: 3.96vh; /* 23px */
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 3.96vh; /* 23px */
    color: #000000;
`;

const VectorSmall = styled.img`
    width: 3.33vw; /* 5px */
    height: 1.04vh; /* 10px */
    transform: rotate(180deg);
`;

const Seperator = styled.div`
    width: 100%;
    height: 1.56vh; /* 15px */
    background-color: ${({ theme }) => theme.color.secondary};
`;

const AppVersionSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 7vw;
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const AppVersionText = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 3.96vh; /* 23px */
    color: #000000;
`;

const LatestVersion = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 3.96vh; /* 23px */
    color: #ffa464;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2vh 7vw;
    width: 100%;
    background-color: ${({ theme }) => theme.color.secondary};
    flex: auto;
`;

const FooterText = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 1.46vh; /* 14px */
    color: #ff9c56;
`;

const Settings = () => {

    const user = useRecoilValue(userState);

    let navigate = useNavigate();

    const navigateToUser = () => {
        navigate("/setting/user");
    };

    const navigateToPeriodicalDonation = () => {
        navigate("/setting/periodicaldonation");
    };

    return (
        <Container>
            <HeaderSetting />
            <UserSection onClick={() => navigateToUser()}>
                <UserInfo >
                    <Avatar src={Person} />
                    <UserDetails>
                        <UserId>{user.name}</UserId>
                        <EditInfo>내 정보 수정하기</EditInfo>
                    </UserDetails>
                </UserInfo>
                <VectorSmall src={Back} />
            </UserSection>
            <Seperator />
            <MenuItem>
                <MenuText>알림</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <MenuItem>
                <MenuText>테마 설정</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <Seperator />
            <MenuItem onClick={() => navigateToPeriodicalDonation()}>
                <MenuText>정기 기부 관리</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <MenuItem>
                <MenuText>증명서 발급</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <MenuItem>
                <MenuText>계좌 관리</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <Seperator />
            <MenuItem>
                <MenuText>홈 화면 설정</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <MenuItem>
                <MenuText>보안</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <MenuItem>
                <MenuText>일반</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <Seperator />
            <MenuItem>
                <MenuText>약관 및 개인정보 처리 동의</MenuText>
                <VectorSmall src={Back} />
            </MenuItem>
            <Seperator />
            <AppVersionSection>
                <AppVersionText>앱 버전</AppVersionText>
                <LatestVersion>최신 버전</LatestVersion>
            </AppVersionSection>
            <Footer>
                <FooterText>앱 버전 0.1.0</FooterText>
                <FooterText>오픈소스 라이선스 보기</FooterText>
            </Footer>
        </Container>
    );
};

export default Settings;
