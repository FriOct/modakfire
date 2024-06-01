import styled from "styled-components";
import HearderUser from "../../../../layouts/HeaderUser";
import Seperator from "../../../../components/Separator";
import Person from "../../../../assets/Person.svg";
import Back from "../../../../assets/Back.svg";
import { useRecoilState } from 'recoil';
import { userState } from '../../../../recoil/atoms/userAtom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {deleteUser} from "../../../../api";

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
    const [user, setUser] = useRecoilState(userState);
    const [updated, setUpdated] = useState(false);
    let navigate = useNavigate();
    
    
    const handleSave = () => {
        console.log("Delete User");
        setUpdated(true);

    };

    useEffect(() => {
        if (updated) {
          deleteUser(user.id)
            .then(() => {
                setUser(null);
                navigate('/');
                
                
            })
            // .then(()=>{
            //     setUser(null);
            // })
            .catch((error) => {
              console.error("Error updating user:", error);
            })
            .finally(() => {
              setUpdated(false);  // 상태 업데이트 완료 표시
            });
        }
      }, [updated]);

    const formatRank = (rank) =>{
        if(rank === 'EMBER'){
            return '장작'
        }
        else if(rank === 'FIREWOOD'){
            return '불씨'
        }
        else if(rank === 'BONFIRE'){
            return '모닥불'
        }
    }

    function formatDate(dateString) {
        // Date 객체 생성
        const date = new Date(dateString);
        
        // 옵션 설정
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
      
        // 포맷터 생성 (한국어 기준)
        const formatter = new Intl.DateTimeFormat('ko-KR', options);
      
        // 포맷된 날짜 반환
        return formatter.format(date);
      }

    return (
        <Container>
            <HearderUser name={user.name}/>
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
                <InfoValue>{formatRank(user.memberRank)}</InfoValue>
            </InfoSection>
            <InfoSection>
                <InfoText>가입일</InfoText>
                <InfoValue>{formatDate(user.registerDate)}</InfoValue>
            </InfoSection>
            <Seperator />
            <Exit onClick={handleSave}>
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
