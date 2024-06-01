import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/atoms/userAtom";
import { periodicalDonationState } from "../../../../recoil/atoms/periodicalDonationAtom";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderPeriodicalDonationDetail from "../../../../layouts/HeaderPeriodicalDonationDetail";
import Back from "../../../../assets/Back.svg";
import Separator from "../../../../components/Separator";
import { useEffect } from "react";

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
    font-size: ${({ theme, fontSize }) =>
        fontSize ? theme.fontSize.large : theme.fontSize.medium};
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
    font-size: ${({ theme }) => theme.fontSize.medium};
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

    const deletePeriodicalDonation = (id) => {
        console.log(id);
        navigate(-1);
    };

    useEffect(() => {
        console.log(pd);
    }, [pd]);

    function formatDate(dateString) {
        // Date 객체 생성
        const date = new Date(dateString);

        // 옵션 설정
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        // 포맷터 생성 (한국어 기준)
        const formatter = new Intl.DateTimeFormat("ko-KR", options);

        // 포맷된 날짜 반환
        return formatter.format(date);
    }

    

    return (
        <Container>
            <HeaderPeriodicalDonationDetail periodical_donation_id={pd.id} />
            <InputField>
                <Label fontSize={"true"}>{pd.centerName}</Label>
            </InputField>
            <InfoSection>
                <InfoText>금액</InfoText>
                <InfoText>{formatNumber(pd.amount)}원</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoText>정기 기부일</InfoText>
                <InfoText>{pd.donationDate}일</InfoText>
            </InfoSection>
            <InfoSection>
                <InfoText>기부 시작일</InfoText>
                <InfoText>{formatDate(pd.startDate)}</InfoText>
            </InfoSection>
            <Separator />
            <Exit
                onClick={() => {
                    deletePeriodicalDonation(pd.id);
                    navigate(-1);
                }}
            >
                <ExitText>정기 기부 해지하기</ExitText>
                <VectorSmall src={Back} />
            </Exit>
            <Separator />
        </Container>
    );
}

export default PeriodicalDonationDetail;
