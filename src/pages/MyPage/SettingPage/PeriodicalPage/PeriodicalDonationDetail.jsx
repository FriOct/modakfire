import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/atoms/userAtom";
import { periodicalDonationState } from "../../../../recoil/atoms/periodicalDonationAtom";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderPeriodicalDonationDetail from "../../../../layouts/HeaderPeriodicalDonationDetail";
import Back from "../../../../assets/Back.svg";
import Separator from "../../../../components/Separator";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.color.bg};
`;

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.padding.primary};
    gap: min(2vw, 8px);
    width: 100%;
`;

const Label = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: ${({ theme,fontSize}) => fontSize?theme.fontSize.large:theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;


const InputBoxWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: min(10vw, 40px);
    padding: min(2vw, 8px);
    border-radius: min(4vw, 16px);
    background: ${({ theme }) => theme.color.secondary};
    border: none;
    font-family: "Noto Sans KR";
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
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
    font-family: "Noto Sans KR, sans-serif";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 3.96vh; /* 23px */
    color: #000000;
`;

const InfoText = styled.div`
    font-family: "Noto Sans KR, sans-serif";
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const VectorSmall = styled.img`
    height: 1.5vh; /* 10px */
    transform: rotate(180deg);
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme }) => theme.padding.primary};
    width: 100%;
`;

function PeriodicalDonationDetail() {
    const [user, setUser] = useRecoilState(userState);
    const [periodicalDonation, setPeriodicalDonation] = useRecoilState(
        periodicalDonationState
    );
    
    let navigate = useNavigate();
    const location = useLocation();

    const pd = periodicalDonation.find(
        (donation) =>
            donation.periodical_donation_id ===
            location.state?.periodical_donation_id
    );

    const formatNumber = (number) => {
        return number.toLocaleString("ko-KR");
    };
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}년 ${month}월 ${day}일`;
    }

    const deletePeriodicalDonation = (id) =>{
        console.log(id);
        navigate(-1);
    }


    return (
        <Container>
            <HeaderPeriodicalDonationDetail periodical_donation_id={pd.periodical_donation_id}/>
            <InputField>
                <Label fontSize={"true"}>{pd.center_name}</Label>
            </InputField>
            <InfoSection>
                <InfoText>금액</InfoText>
                <InfoText>{formatNumber(pd.amount)}원</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoText>정기 기부일</InfoText>
                <InfoText>{pd.donation_date}일</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoText>기부 시작일</InfoText>
                <InfoText>{formatDate(pd.start_date)}</InfoText>
            </InfoSection>
            <Separator />
            <Exit onClick={() => {deletePeriodicalDonation(pd.periodical_donation_id)}}>
                <ExitText>정기 기부 해지하기</ExitText>
                <VectorSmall src={Back} />
            </Exit>
            <Separator />
        </Container>
    );
}

export default PeriodicalDonationDetail;
