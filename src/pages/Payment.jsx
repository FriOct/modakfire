import styled from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderBack from "../layouts/HeaderBack";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100vh;
    background: #ffffff;
`;

const Middle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    width: 100%;
    height: 532px;
`;

const PaymentSubTitle = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => (props.color ? props.color : "black")};
    width: 100%;
    padding-left: 30px;
    margin-bottom: 1vh;
`;

const PaymentTitle = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 32px;
    line-height: 46px;
    text-decoration-line: ${(props) => (props.hasinput ? "none" : "underline")};
    color: ${(props) => (props.hasinput ? "black" : "gray")};
    width: 100%;
    height: 54px;
    padding-left: 30px;
`;

const PaymentButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    width: 100%;
    height: 67px;
    background: #ff8a3d;
    color: #ffffff;
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    margin-top: 160px;
`;

const Keypad = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3개의 열
    gap: 30px; // 각 키 사이의 간격을 자동으로 조정
    width: 100%; // 부모 컨테이너에 맞춰 자동 조정
    height: 100%; // 전체 높이의 60%
    align-items: center;
    justify-content: center;
`;

const Key = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    width: 100%;
    height: 100%;
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: 24px;
    line-height: 35px;
    color: #000000;
`;

function Payment() {
    const [inputValue, setInputValue] = useState("");
    let navigate = useNavigate();
    const location = useLocation();

    let data = location.state?.data;

    const handleButtonClick = (value) => {
        !inputValue && (value === "00" || value === "0")
            ? null
            : parseInt(inputValue) * 10 + value > 29999999
            ? setInputValue("30000000")
            : setInputValue(inputValue + value);
    };

    const handleDelete = () => {
        setInputValue((prev) => prev.slice(0, -1));
    };

    function formatStringNumber(str) {
        return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <Container>
            <HeaderBack></HeaderBack>
            <Middle>
                <PaymentSubTitle>기부할 금액을 입력해주세요</PaymentSubTitle>
                <PaymentTitle hasinput={inputValue}>
                    {inputValue
                        ? formatStringNumber(inputValue) + "원"
                        : "얼마를 기부 할까요?"}
                </PaymentTitle>
                {inputValue > 29999999 ? (
                    <PaymentSubTitle color="red">
                        최대 3천만원까지 가능합니다.
                    </PaymentSubTitle>
                ) : null}
                <PaymentButton
                    onClick={() =>
                        navigate("/paymentDetail", {
                            state: {
                                amount: parseInt(inputValue),
                                data: data,
                            },
                        })
                    }
                >
                    기부하기
                </PaymentButton>

                <Keypad>
                    {Array.from({ length: 9 }, (_, i) => (
                        <Key
                            key={i + 1}
                            onClick={() => handleButtonClick(`${i + 1}`)}
                        >
                            {i + 1}
                        </Key>
                    ))}
                    <Key onClick={() => handleButtonClick("00")}>00</Key>
                    <Key onClick={() => handleButtonClick("0")}>0</Key>
                    <Key onClick={handleDelete}>{"<"}</Key>
                </Keypad>
            </Middle>
        </Container>
    );
}

export default Payment;
