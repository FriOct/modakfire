import styled from "styled-components";
import HighlightWrapper from "../../components/Text/HighlightWrapper";
import box from "../../assets/box.svg";
import delivery from "../../assets/delevery.svg";
import donation from "../../assets/donation.svg";
import HeaderMyPage from "../../layouts/HeaderMyPage";
import Seperator from "../../components/Separator";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms/userAtom";
import { periodicalDonationState } from "../../recoil/atoms/periodicalDonationAtom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 1vh;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
`;

const GradeFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    width: 100%;
    padding: 0vh 2.34vh;
`;

const Grade = styled.div`
    width: 100%;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: #000000;
    padding: 1.5vh 0;
`;

const TitleButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.34vh;
    width: 100%;
    height: 3.43vh;
`;

const Title = styled.div`
    width: fit-content;
    height: 3.43vh;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 2.57vh;
    line-height: 3.43vh;
    color: #000000;
`;

const ButtonWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.34vh;
    height: 2.57vh;
    background: #ebebeb;
    border: 0.13vh solid #cdcdcd;
    box-shadow: 0 0 0.47vh rgba(0, 0, 0, 0.25);
    border-radius: 1.87vh;
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.34vh;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 2.34vh;
    color: #000000;
    padding: 2vw;
`;

const DonationHistoryList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2vh 2.34vh;
    gap: 2vh;
    width: 100%;
`;

const DonationHistory = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.34vh;
    width: 100%;
    height: 10.94vh;
`;

const DonationInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    flex: 1;
    height: 100%;
`;

const CenterName = styled.div`
    width: fit-content;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 2.57vh;
    line-height: 3.43vh;
    color: #000000;
`;

const DateText = styled.div`
    width: fit-content;
    height: 2.34vh;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 2.34vh;
    color: ${({ theme }) => theme.fontColor.secondary};
`;

const ItemName = styled.div`
    width: 100%;
    height: 2.34vh;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 2.34vh;
    color: ${({ theme }) => theme.fontColor.secondary};
`;

const DonationStateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.17vh;
    width: 100%;
    height: 3.2vh;
`;

const CenterNameDateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: 2.34vh;
    width: 100%;
    height: 3.43vh;
`;

const DonationStateIcon = styled.img`
    width: ${({ theme }) => theme.fontSize.medium};
    height: ${({ theme }) => theme.fontSize.medium};
`;

const DonationStateText = styled.div`
    height: 2.34vh;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.base};
    line-height: 2.34vh;
    color: #000000;
`;

const RegularDonationText = styled.div`
    width: fit-content;
    height: 2.34vh;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.fontColor.secondary};
    line-height: 2.34vh;
`;

const RegularDonationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2.34vh;
    gap: 2vh;
    width: 100%;
    flex: 1;
`;

const CenterImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    width: min(25vw, 125px);
    height: min(25vw, 125px);
    border-radius: min(5vw, 25px);
    box-shadow: 0px 0px 8px ${({theme}) => theme.color.shadow};
    img {
        width: min(25vw, 125px);
        height: min(25vw, 125px);
        object-fit: cover;
    }
`

const MyPage = () => {
    const demoData = {
        donationHistory: [
            {
                centerName: "천광보육원",
                date: "2024-05-25",
                itemName: "대구산 더담은 우리쌀 10kg",
                state: "모금중",
                image_id: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
            },
            {
                centerName: "천광보육원",
                date: "2024-05-25",
                itemName: "대구산 더담은 우리쌀 10kg",
                state: "전달 대기중",
                image_id: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
            },
            {
                centerName: "천광보육원",
                date: "2024-05-25",
                itemName: "대구산 더담은 우리쌀 10kg",
                state: "전달중",
                image_id: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
            },
        ],
    };

    const user = useRecoilValue(userState);
    const periodicaldonation = useRecoilValue(periodicalDonationState);
    let navigate = useNavigate();

    const formatNumber = (number) => {
        return number.toLocaleString("ko-KR");
    };

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

    return (
        <Container>
            <HeaderMyPage member={user} />
            <GradeFrame>
                <Grade>
                    {user.name}님은 현재{" "}
                    <HighlightWrapper>{formatRank(user.memberRank)}</HighlightWrapper>{" "}
                    등급입니다.
                </Grade>
            </GradeFrame>
            <Seperator />
            <TitleButtonWrapper>
                <Title>최근 기부 내역</Title>
                <ButtonWrapper>
                    <Button>더보기</Button>
                </ButtonWrapper>
            </TitleButtonWrapper>
            <DonationHistoryList>
                {demoData.donationHistory.map((history, index) => (
                    <DonationHistory key={index}>
                        <CenterImageWrapper>
                            <img src={history.image_id} />
                        </CenterImageWrapper>
                        <DonationInfo>
                            <CenterNameDateWrapper>
                                <CenterName>{history.centerName}</CenterName>
                                <DateText>{history.date}</DateText>
                            </CenterNameDateWrapper>
                            <ItemName>{history.itemName}</ItemName>
                            <DonationStateWrapper>
                                <DonationStateIcon
                                    src={
                                        history.state === "모금중"
                                            ? donation
                                            : history.state === "전달 대기중"
                                            ? delivery
                                            : box
                                    }
                                />
                                <DonationStateText>
                                    {history.state}
                                </DonationStateText>
                            </DonationStateWrapper>
                        </DonationInfo>
                    </DonationHistory>
                ))}
            </DonationHistoryList>
            <Seperator />
            <TitleButtonWrapper>
                <Title>정기 후원 내역</Title>
                <ButtonWrapper onClick={()=>navigate('/setting/periodicaldonation')}>
                    <Button>더보기</Button>
                </ButtonWrapper>
            </TitleButtonWrapper>
            <RegularDonationWrapper>
                {periodicaldonation.map((donation, index) => (
                    <DonationHistory key={index}>
                        <CenterImageWrapper>
                            <img src={donation.image_id} />
                        </CenterImageWrapper>
                        <DonationInfo>
                            <CenterNameDateWrapper>
                                <CenterName>{donation.center_name}</CenterName>
                                <DateText>정기결제일</DateText>
                            </CenterNameDateWrapper>
                            <CenterNameDateWrapper>
                                <RegularDonationText>
                                    {formatNumber(donation.amount)}원
                                </RegularDonationText>
                                <DateText>
                                    매달 {donation.donation_date}일
                                </DateText>
                            </CenterNameDateWrapper>
                        </DonationInfo>
                    </DonationHistory>
                ))}
            </RegularDonationWrapper>
        </Container>
    );
};

export default MyPage;
