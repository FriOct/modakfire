import { useEffect, useState } from "react";
import styled from "styled-components";
import { donationFastRequest, donationRequest } from "../api";
import styled from "styled-components";

const BillContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0px;
    width: 392px;
    height: 590px;
    background: #ffffff;
    border: 1px solid #cacaca;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: auto;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.large};

    line-height: 29px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const BillList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 8px;
    gap: 48px;
    width: 100%;
    height: 456px;
    flex: none;
    order: 1;
`;

const BillItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 100%;
    height: auto;
    flex: none;
    order: 0;

    flex-grow: 0;
`;

const ItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    gap: 10px;
    width: 382px;
    height: 30px;
    flex: none;
    order: 0;

    flex-grow: 0;
`;

const ItemTitle = styled.div`
    width: 350px;
    height: 30px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 1;
`;

const ItemList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 32px;
    gap: 24px;
    width: 382px;
    height: auto;
    flex: none;
    order: 1;

    flex-grow: 0;
`;

const ItemRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    width: 318px;
    height: 21px;
    flex: none;
    order: 0;

    flex-grow: 0;
`;

const ItemName = styled.div`
    width: auto;
    height: 21px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    flex: none;
    order: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    flex-grow: 0;
`;

const ItemAmount = styled.div`
    width: auto;
    height: 21px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #000000;
    flex: none;
    order: 1;

    flex-grow: 0;
`;

const TotalAmountContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 40px;
    gap: 24px;
    width: 100%; /* 부모의 남는 공간을 채우도록 width를 100%로 설정 */
    height: auto; /* 높이를 auto로 설정하여 내용에 따라 조절 */
    border-top: 4px dashed #ffddc5;
    flex-grow: 1; /* 남는 공간을 채우도록 설정 */
    order: 2;
`;

const TotalItem = styled.div`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    flex: none;
    order: 0;

    flex-grow: 1;
`;

const TotalAmount = styled.div`
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #000000;
    flex: none;
    order: 1;

    flex-grow: 1;
`;

const Bill = ({ amount, data }) => {
    const itemss = [
        {
            title: "천광 보육원",
            items: [
                { name: "대구산 더담은 우리쌀 10kg", amount: "₩15,000" },
                { name: "라면 5봉지", amount: "₩5,000" },
            ],
        },
        {
            title: "천광 보육원",
            items: [
                { name: "쌀 5kg", amount: "₩15,000" },
                { name: "라면 5봉지", amount: "₩5,000" },
            ],
        },
        {
            title: "천 보육원",
            items: [
                { name: "쌀 5kg", amount: "₩15,000" },
                { name: "라면 5봉지", amount: "₩5,000" },
            ],
        },
        {
            title: "천광 보원",
            items: [
                { name: "쌀 5kg", amount: "₩15,000" },
                { name: "라면 5봉지", amount: "₩5,000" },
            ],
        },
    ];
    const [items, setItems] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result;
                if (data.isFast) {
                    result = await donationFastRequest(data.reqObj);
                } else {
                    result = await donationRequest(data.reqObj);
                }
                setItems(result);
            } catch (error) {
                console.error("Error updating user:", error);
            }
        };

        fetchData();
    }, [data]);

    const fromatNumber = (number) => {
        return number.toLocaleString("ko-KR");
    };

    return (
        <BillContainer>
            <Title>기부 영수증</Title>
            <BillList>
                {items.map((bill, index) => (
                    <BillItem key={index}>
                        <ItemHeader>
                            <ItemTitle>{bill.title}</ItemTitle>
                        </ItemHeader>
                        <ItemList>
                            {bill.items.map((item, idx) => (
                                <ItemRow key={idx}>
                                    <ItemName>{item.name}</ItemName>
                                    <ItemAmount>{item.amount}</ItemAmount>
                                </ItemRow>
                            ))}
                        </ItemList>
                    </BillItem>
                ))}
            </BillList>
            <TotalAmountContainer>
                <TotalItem>총 기부금액</TotalItem>
                <TotalAmount>{`₩ ${fromatNumber(amount)}`}</TotalAmount>
            </TotalAmountContainer>
        </BillContainer>
    );
};

export default Bill;
