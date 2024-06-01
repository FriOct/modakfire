import styled from "styled-components";
import {useNavigate, useLocation } from "react-router-dom";
import HeaderBack from "../layouts/HeaderBack";
import Bill from "../layouts/Bill";

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

const BillWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
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
`;

const PaymentDetail = () => {
    const location = useLocation();

    let amount = location.state?.amount;
    let data = location.state?.data;

    let navigate = useNavigate();

    return (
        <Container>
            <HeaderBack></HeaderBack>
            <BillWrapper>
                <Bill amount={amount}> data={data}</Bill>
            </BillWrapper>
            <PaymentButton onClick={() => navigate("/payment/paymentfinish")}>
                기부하기
            </PaymentButton>
        </Container>
    );
};

export default PaymentDetail;
