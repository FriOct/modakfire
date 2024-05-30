import styled from "styled-components";
import HearderUser from "../../../../layouts/HeaderUser";
import Seperator from "../../../../components/Separator";
import Person from "../../../../assets/Person.svg";
import Back from "../../../../assets/Back.svg";
import { useRecoilValue } from 'recoil';
import { userState } from '../../../../recoil/atoms/userAtom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.padding.primary};
    width: 100%;
`;

const UserIcon = styled.img`
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.primary};
    width: 100%;
`;

const InfoText = styled.div`
    font-family: "Noto Sans KR, sans-serif";
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const InfoValue = styled.div`
    font-family: "Noto Sans KR, sans-serif";
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.primary};
`;


const Exit = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.primary};
    width: 100%;
    height: 6.67vh; /* 60px */
`;

const ExitText = styled.div`
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

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.56vh; /* 15px */
    padding: 1.56vh 3.13vw; /* 15px 30px */
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

const User = () => {

    const user = useRecoilValue(userState).User;

    return (
        <Container>
            <HearderUser member_id={user.member_id}/>
            <UserProfile>
                <UserIcon src={Person}/>
            </UserProfile>
            <Seperator />
            <InfoSection>
                <InfoText>이름</InfoText>
                <InfoValue>{user.name}</InfoValue>
            </InfoSection>
            <InfoSection>
                <InfoText>이메일</InfoText>
                <InfoValue>{user.email}</InfoValue>
            </InfoSection>
            <InfoSection>
                <InfoText>등급</InfoText>
                <InfoValue>{user.member_rank}</InfoValue>
            </InfoSection>
            <InfoSection>
                <InfoText>가입일</InfoText>
                <InfoValue>{user.register_date}</InfoValue>
            </InfoSection>
            <Seperator />
            <Exit>
                <ExitText>탈퇴하기</ExitText>
                <VectorSmall src={Back} />
            </Exit>

            <Footer>
                <FooterText>앱 버전 0.1.0</FooterText>
                <FooterText>오픈소스 라이선스 보기</FooterText>
            </Footer>
        </Container>
    );
};

export default User;
