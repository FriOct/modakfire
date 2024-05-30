import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/atoms/userAtom";
import { useNavigate } from "react-router-dom";
import HeaderBack from "../../../../layouts/HeaderBack";
import { useState } from "react";

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

function PeriodicalDonationAdd() {
    const [user, setUser] = useRecoilState(userState);
    const [pd, setPd] = useState({
        center_name: null,
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
                <Label>센터 선택</Label>
                <InputBox id="nameInput" defaultValue={user.User.name} />
            </InputField>
            <InputField>
                <Label>금액</Label>
                <InputBoxWrapper>
                    <InputBox
                        value={pd.amount ? `${formatNumber(pd.amount)}` : ""}
                        onChange={handleChangeAmount}
                        style={{width: pd.amount<=0?"100%":null}}
                    />
                    {pd.amount > 0 ?<InfoText>일</InfoText> : null}
                </InputBoxWrapper>

                {pd.amount > 29999999 ? (
                    <EditInfo>최대 3,000만원까지 설정할 수 있습니다.</EditInfo>
                ) : null}
            </InputField>
            <InputField>
                <Label>정기 기부일</Label>
                <InputBoxWrapper>
                    {pd.donation_date > 0 ? <InfoText>매달</InfoText> : null}
                    <InputBox
                        value={
                            pd.donation_date
                                ? ` ${formatNumber(pd.donation_date)}`
                                : ""
                        }
                        onChange={handleChangeDonationDate}
                        size={
                            pd.donation_date<=0?null:
                            pd.donation_date >= 10
                                    ? 2
                                    : 1
                        }
                        style={{width: pd.donation_date<=0?"100%":null}}
                        
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
}

export default PeriodicalDonationAdd;
