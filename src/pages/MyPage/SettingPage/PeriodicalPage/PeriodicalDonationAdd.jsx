import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/atoms/userAtom";
import { periodicalDonationState } from "../../../../recoil/atoms/periodicalDonationAtom";
import { useNavigate } from "react-router-dom";
import HeaderBack from "../../../../layouts/HeaderBack";
import { useState } from "react";
import Back from "../../../../assets/Back.svg";

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
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const InputBox = styled.input`
    background-color: transparent;
    height: 100%;
    border: none; /* 테두리 제거 */
    outline: none; /* 클릭 시 생기는 기본 외곽선 제거 */
    font-family: "Noto Sans KR, sans-serif";
    font-size: ${({ theme }) => theme.fontSize.medium};
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

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2vh 7vw;
    width: 100%;
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

const EditInfo = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: #ff0000;
    padding: 0 7vw;
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

const CenterWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 3vw;
    align-items: center;
    width: 100%;
`;

const PeriodicalDonationAddHome = ({
    setCenter,
    center,
    setPeriodicalDonation,
    periodicalDonation,
}) => {

    const [pd, setPd] = useState({
        periodical_donation_id: 0,
        center_name: "센터",
        start_date: null,
        end_date: null,
        donation_date: 0,
        amount: 0,
    });
    let navigate = useNavigate();

    const formatNumber = (number) => {
        return number.toLocaleString("ko-KR");
    };

    //post로 값 올려야함
    const handleSave = () => {
        setPeriodicalDonation((prev) => (prev ? [...prev, pd] : [pd]));
        navigate(-1);
    };

    const handleChangeAmount = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        if (value > 30000000) value = 30000000;
        setPd({
            ...pd,
            amount: value ? parseInt(value, 10) : null, // Convert to integer or set to 0
        });
    };
    const handleChangeDonationDate = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
        if (value > 31) value = 31;
        setPd({
            ...pd,
            donation_date: value ? parseInt(value, 10) : null, // Convert to integer or set to 0
        });
    };

    return (
        <Container>
            <HeaderBack />
            <InputField>
                <CenterWrapper onClick={()=>{setCenter(!center);}}>
                    <Label>센터 선택</Label>
                    <VectorSmall src={Back} />
                </CenterWrapper>
                <InputBoxWrapper>{pd.center_name}</InputBoxWrapper>
            </InputField>
            <InputField>
                <Label>금액</Label>
                <InputBoxWrapper>
                    <InputBox
                        value={pd.amount ? `${formatNumber(pd.amount)}` : ""}
                        onChange={handleChangeAmount}
                        size={
                            pd.amount <= 0
                                ? null
                                : pd.amount.toString().length + 1
                        }
                        style={{ width: pd.amount <= 0 ? "100%" : null }}
                    />
                    {pd.amount > 0 ? <InfoText>원</InfoText> : null}
                </InputBoxWrapper>

                {pd.amount > 29999999 ? (
                    <EditInfo>최대 3,000만원까지 설정할 수 있습니다.</EditInfo>
                ) : null}
            </InputField>
            <InputField>
                <Label>정기 기부일</Label>
                <InputBoxWrapper>
                    {pd.donation_date > 0 ? (
                        <InfoText>매달&nbsp;</InfoText>
                    ) : null}
                    <InputBox
                        value={
                            pd.donation_date
                                ? `${formatNumber(pd.donation_date)}`
                                : ""
                        }
                        onChange={handleChangeDonationDate}
                        size={
                            pd.donation_date <= 0
                                ? null
                                : pd.donation_date.toString().length
                        }
                        style={{ width: pd.donation_date <= 0 ? "100%" : null }}
                    />
                    {pd.donation_date > 0 ? <InfoText>일</InfoText> : null}
                </InputBoxWrapper>
                {pd.donation_date > 30 ? (
                    <EditInfo>최대 31일까지 설정할 수 있습니다.</EditInfo>
                ) : null}
            </InputField>
            <ButtonWrapper>
                <EditButton onClick={handleSave}>추가 완료</EditButton>
            </ButtonWrapper>
        </Container>
    );
};

function PeriodicalDonationAdd() {
    const [center, setCenter] = useState(false);
    const [periodicalDonation, setPeriodicalDonation] = useRecoilState(
        periodicalDonationState
    );

    return (
        <>
            {center ? (
                <div
                    onClick={() => {
                        setCenter(!center);
                    }}
                >
                    ddd
                </div>
            ) : (
                <PeriodicalDonationAddHome
                    setCenter={setCenter}
                    center={center}
                    setPeriodicalDonation={setPeriodicalDonation}
                    periodicalDonation={periodicalDonation}

                />
            )}
        </>
    );
}

export default PeriodicalDonationAdd;
