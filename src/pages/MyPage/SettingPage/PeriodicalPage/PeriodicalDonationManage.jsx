import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/atoms/userAtom";
import { useNavigate } from "react-router-dom";
import HeaderPeriodicalDonation from "../../../../layouts/HeaderPeriodicalDonation";
import Back from "../../../../assets/Back.svg";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.color.bg};
`;


const Seperator = styled.div`
    width: 100vw;
    height: 1.5vh;
    background: ${({ theme }) => theme.color.secondary};
`;

const DonationList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: 100100;
    flex-grow: 1;
`;

const DonationCenter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.padding.primary};gap: 3vw;
    width: 100vw;
    height: 10vh;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const CenterName = styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const Amount = styled.div`
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #ffddc5;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.padding.primary};
    width: 100%;
`;
const VectorSmall = styled.img`
    height: 1.5vh; /* 10px */
    transform: rotate(180deg);
`;

const EditButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: min(2vw, 8px);
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    border-radius: min(4vw, 16px);
    border: none;
    color: ${({ theme }) => theme.fontColor.white};
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    cursor: pointer;
`;

const PeriodicalDonationManage = () => {
    const [user, setUser] = useRecoilState(userState);    

    let navigate = useNavigate();

    const fromatNumber = (number) => {
      return number.toLocaleString("ko-KR");
  };

    return (
        <Container>
            <HeaderPeriodicalDonation/>
            <Seperator />
            <DonationList>
                {user.PeriodicalDonation.map((donation, index) => (
                    <DonationCenter key={index}>
                        <Info>
                            <CenterName>{donation.center_name}</CenterName>
                            <Amount>₩{fromatNumber(donation.amount)}</Amount>
                        </Info>
                        <VectorSmall src={Back} />
                    </DonationCenter>
                ))}
            </DonationList>
            <Seperator />
            <ButtonWrapper>
                <EditButton onClick={() => {navigate('/setting/periodicaldonation/add');}}>정기기부 추가하기</EditButton>
            </ButtonWrapper>
        </Container>
    );
};

export default PeriodicalDonationManage;
