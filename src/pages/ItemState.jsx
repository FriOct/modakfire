import styled from "styled-components";
import coins from "../assets/icons/coins.svg";
import box from "../assets/icons/box.svg";
import truck from "../assets/icons/truck.svg";
import delivery from "../assets/icons/delivery.svg";
import LightTitle from "../components/Text/LightTitle";
import Title from "../components/Text/Title";
import Seperator from "../components/Separator";
import SemiTitle from "../components/Text/SemiTitle";
import SecondaryParagraph from "../components/Text/SecondaryParagraph";
import receipt from "../assets/receipt.png"

const ItemStateWrapper = styled.div`
    display: flex;
    padding: min(5vw, 25px) 0;
    /* gap: min(1vw, 5px); */
    width: 100%;
    flex-direction: column;
`

const StateIndicatorIconWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    img {
        width: min(10vw, 50px);
        height: min(10vw, 50px);
    }
`

const StateParagraphWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    h1{
        width: min(20vw, 100px);
        text-align: center;
    }
`

const StateParagrah = (props) => {
    return (
        <LightTitle>
            {
                props.isBold ?
                <strong>
                    {props.children}
                </strong>
                :
                props.children
            }
        </LightTitle>
    )
}

const Circle = styled.div`
    border: min(3vw, 15px) solid ${(props) => props.$flag ? ({theme}) => theme.color.primary : ({theme}) => theme.color.secondary};
    background-color: ${({theme}) => theme.color.bg} ;
    border-radius: 50%;
    width: min(10vw, 50px);
    height: min(10vw, 50px);
    z-index: 2;
`
const CircleWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const LineTrail =  styled.hr`
    position: absolute;
    transform: translate(calc(min(8vw, 40px) + max(0px, calc((100vw - 500px)/2))), min(3vw, 20px));
    border-radius: min(4vw, 20px);
    border: min(2vw, 10px) solid ${({theme}) => theme.color.secondary};
    width: min(84vw, 420px);
    height: 0px;
    left: 0px;
`

const Line = styled.hr`
    position: absolute;
    transform: translate(calc(min(8vw, 40px) + max(0px, calc((100vw - 500px)/2))), min(3vw, 20px));
    
    border-radius: min(4vw, 20px);
    border: min(2vw, 10px) solid ${({theme}) => theme.color.primary};
    width: calc(min(84vw, 420px) / 3 * ${(props) => props.$step});
    height: 0px;
    left: 0px;
    z-index: 1;
`

const StateTitleWrapper = styled.div`
    display: flex;
    gap: min(1vw, 5px);
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const StateTitle = (props) => {
    const TitleTable = ["모금중", "전달 대기중", "전달중", "전달 완료"];
    const ParagraphTable = ["센터에 전달될 물품이 현재 모금중입니다.", "물품의 목표 금액을 달성했습니다.","물품을 지역 상권으로부터 구매하고, 전달중입니다.","물품이 센터에 전달되었습니다."]
    return (
        <StateTitleWrapper>
            <Title>{TitleTable[props.step]}</Title>
            <LightTitle>{ParagraphTable[props.step]}</LightTitle>
        </StateTitleWrapper>
    )
}

const StateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: min(3vw, 15px) 0;
    gap: min(1vw, 5px);
`

const InfoWrapper = styled.div`
    display: flex;
    gap: min(3vw, 15px);
    flex-direction: column;
    padding: min(4vw, 20px);
`

const ItemInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(3vw, 15px);
`
const CenterImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    width: min(20vw, 100px);
    height: min(20vw, 100px);
    border-radius: min(3vw, 15px);
    box-shadow: 0px 0px 8px ${({theme}) => theme.color.shadow};
    img {
        width: min(25vw, 125px);
        height: min(25vw, 125px);
        object-fit: cover;
    }
`
const CenterImage = (props) => {
    return (
        <CenterImageWrapper>
            <img src={props.src} />
        </CenterImageWrapper>
    )
}

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const addComma = (number) => {
    const ret = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return ret;
}

const WideInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ItemJson = {
    step: 3,
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    centerName: "천광보육원",
    itemName: "대구농산 강낭콩 3kg",
    marketName: "(주)대구농산",
    price: 13900,
    rasiedAmount: 10425,
    myRaisedAmount: 5000,
    rasingFinishedTime: "2024-06-29 15:42:12",
    totalFinishedTime: "2024-06-01 17:15:36"
}

const NoneReceiptWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: min(2vw, 10px);
    border: min(1vw, 5px) dashed ${({theme}) => theme.color.lightgray};
    height: min(40vw, 200px);
    h1{
        color: ${({theme}) => theme.color.gray};
    }
`

const Receipt = (Props) => {
    if(Props.src != null)
        return (
            <img src={Props.src} />
        )
    return(
        <NoneReceiptWrapper>
            <LightTitle>
                영수증 정보가 없습니다.
            </LightTitle>
            <LightTitle>
                물품 구매 이후 영수증 정보가 업로드 됩니다.
            </LightTitle>
        </NoneReceiptWrapper>
    )
}

const ItemState = (props) => {
    const percent = Math.floor(ItemJson.rasiedAmount/ItemJson.price*100);
    return (
        <ItemStateWrapper>
            <StateWrapper>
                <StateIndicatorIconWrapper>
                    <img src={coins} />
                    <img src={box} />
                    <img src={truck} />
                    <img src={delivery} />
                </StateIndicatorIconWrapper>
                <StateParagraphWrapper>
                    <StateParagrah isBold={ItemJson.step == 0}>
                        모금중
                    </StateParagrah>
                    <StateParagrah isBold={ItemJson.step == 1}>
                        전달 대기중
                    </StateParagrah>
                    <StateParagrah isBold={ItemJson.step == 2}>
                        전달중
                    </StateParagrah>
                    <StateParagrah isBold={ItemJson.step == 3}>
                        전달 완료
                    </StateParagrah>
                </StateParagraphWrapper>
                <CircleWrapper>
                    <Circle $flag = {ItemJson.step >= 0}/>
                    <Circle $flag = {ItemJson.step >= 1}/>
                    <Circle $flag = {ItemJson.step >= 2}/>
                    <Circle $flag = {ItemJson.step >= 3}/>
                    <Line $step = {ItemJson.step}/>
                    <LineTrail />
                </CircleWrapper>
                <StateTitle step = {ItemJson.step}/>
            </StateWrapper>
            <Seperator />
            <InfoWrapper>
                <SemiTitle><strong>물품 정보</strong></SemiTitle>
                <ItemInfoWrapper>
                    <CenterImage src={ItemJson.imageUrl}/>
                    <ItemInfo>
                        <SemiTitle>{ItemJson.centerName}</SemiTitle>
                        <LightTitle>{ItemJson.itemName}</LightTitle>
                        <SecondaryParagraph>{ItemJson.marketName}</SecondaryParagraph>
                    </ItemInfo>
                </ItemInfoWrapper>
            </InfoWrapper>
            <Seperator />
            <InfoWrapper>
                <WideInfoWrapper>
                    <SemiTitle><strong>모금 정보</strong></SemiTitle>
                    {ItemJson.step != 0 ? <LightTitle>{ItemJson.rasingFinishedTime}</LightTitle> : null}
                </WideInfoWrapper>
                
                <WideInfoWrapper>
                    <LightTitle>목표 금액</LightTitle>
                    <LightTitle><strong>{addComma(ItemJson.price)}원</strong></LightTitle>
                </WideInfoWrapper>
                <WideInfoWrapper>
                    <LightTitle>기부 해주신 금액</LightTitle>
                    <LightTitle><strong>{addComma(ItemJson.myRaisedAmount)}원</strong></LightTitle>
                </WideInfoWrapper>
                <WideInfoWrapper>
                    <LightTitle>현재 금액</LightTitle>
                    <LightTitle><strong>{addComma(ItemJson.rasiedAmount)}원</strong></LightTitle>
                </WideInfoWrapper>
                <WideInfoWrapper>
                    <LightTitle></LightTitle>
                    <LightTitle>
                        <strong style={{color: "#FF8A3D"}}>
                        {ItemJson.step != 0 ? "모금 완료" : "모금 " + percent+"% 완료"}
                        </strong>
                    </LightTitle>
                </WideInfoWrapper>
            </InfoWrapper>
            <Seperator />
            <InfoWrapper>
                <SemiTitle><strong>구매 정보</strong></SemiTitle>
                <WideInfoWrapper>
                    <LightTitle>구매처</LightTitle>
                    <LightTitle><strong>(주)대구농산</strong></LightTitle>
                </WideInfoWrapper>
                <WideInfoWrapper>
                    <LightTitle>구매 영수증</LightTitle>
                </WideInfoWrapper>
                <Receipt src={null}/>
            </InfoWrapper>
            <Seperator />
            <InfoWrapper>
                <WideInfoWrapper>
                    <SemiTitle><strong>전달 정보</strong></SemiTitle>
                    {ItemJson.step == 3 ? <LightTitle>{ItemJson.totalFinishedTime}</LightTitle> : null}
                </WideInfoWrapper>
                <LightTitle>
                    {ItemJson.step != 3 ? "물품이 전달 대기중입니다.": "물품이 센터에 전달되었습니다."}
                </LightTitle>
            </InfoWrapper>
        </ItemStateWrapper>
    )
}

export default ItemState;