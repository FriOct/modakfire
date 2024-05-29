import styled from "styled-components";
import Title from "../../../components/Text/Title";
import LightTitle from "../../../components/Text/LightTitle";
import fire from "../../../assets/icons/fire.svg"
import SemiTitle from "../../../components/Text/SemiTitle";
import SecondaryParagraph from "../../../components/Text/SecondaryParagraph";
import Paragraph from "../../../components/Text/Paragraph";
import lightbulb from "../../../assets/icons/lightbulb.svg"
import { useEffect, useState } from "react";

const CenterItemDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: min(3vw, 15px);
    width: 100vw;
    /* height: calc(100vh - min(11vw, 55px));  */
    /* overflow-y: scroll; */
    padding: min(3vw, 15px);
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: min(70vw, 350px);
    width: 100%;
    box-shadow: 0px 0px 4px ${({theme}) => theme.color.shadow};
    img {
        height: min(70vw, 350px);
        object-fit: cover;
    }
`
const ItemImage = (props) => {
    return (
        <ImageWrapper>
            <img src={props.src} />
        </ImageWrapper>
    )
}

const ProgressBarWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-top: min(8vw, 40px);
    height: min(4vw, 20px);
    border-radius: 13px;
    background-color: ${({theme}) => theme.color.secondary};
    div{
        display: flex;
        justify-content: flex-end;
        border-radius: 13px 0px ${(props) => 13 * props.$percent / 100}px 13px;
        align-items: flex-end;
        width: ${(props) => props.$percent}%;
        background-color: ${({theme}) => theme.color.primary};
        div{
            background: none;
            width: auto;
            flex-direction: column;
            h1{
                position: relative;
                left: calc(min(4vw, 20px) - min(2vw, 10px)* ${(props) => props.$percent}/100);
                top: min(1vw, 5px);
            }
            img{
                position: relative;
                left: calc(min(4vw, 20px) - min(2vw, 10px)* ${(props) => props.$percent}/100);
                top: min(0.5vw, 2.5px);
                width: calc(min(6vw, 30px) + min(5vw, 25px)* ${(props) => props.$percent}/100);
                height: calc(min(6vw, 30px) + min(5vw, 25px) * ${(props) => props.$percent}/100);
            }
        }
    }
`

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: min(2vw, 10px); */
`

const addComma = (number) => {
    const ret = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return ret;
}

const ProgressBar = (props) => {
    return(
        <StyledWrapper>
            <ProgressBarWrapper $percent={props.percent}>
                <div>
                    <div>
                        <LightTitle><strong>{props.percent}%</strong></LightTitle>
                        <img src={fire}/>
                    </div>
                </div>
            </ProgressBarWrapper>
        </StyledWrapper>
        
    )
}
const ProgressInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProgressInfo = (props) => {
    return(
        <ProgressInfoWrapper>
            <LightTitle>
                {addComma(props.now)}원
            </LightTitle>
            <LightTitle>
                {addComma(props.goal)}원
            </LightTitle>
        </ProgressInfoWrapper>
    )
}

const HowToUseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    gap: min(2vw, 10px);
    align-items: center;
    height: min(60vw, 300px);
`
const TitleWrapper = styled.div`
    display: flex;
    gap: min(1vw, 5px);
    padding-bottom: min(2vw, 10px);
    margin-bottom: min(2vw, 10px);
    border-bottom: 1px solid ${({theme}) => theme.color.gray};
    img {
        width: min(6vw, 30px);
    }
    
`

const Circle = styled.div`
    border: min(2vw, 10px) solid ${({theme}) => theme.color.primary};
    background-color: ${({theme}) => theme.color.bg};
    border-radius: 50%;
    width: min(8vw, 40px);
    height: min(8vw, 40px);
    z-index: 1
`

const Explanation = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const CircleExplanationWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: min(2vw, 10px);
`

const CircleExplanation = (props) => {
    return(
        <CircleExplanationWrapper>
            <Circle />
            <Explanation>
                <LightTitle><strong>{props.title}</strong></LightTitle>
                <Paragraph>
                    {props.paragraph}
                </Paragraph>
            </Explanation>
        </CircleExplanationWrapper>
    )
}

const Line = styled.hr`
    position: relative;
    border: min(1vw, 5px) solid ${({theme}) => theme.color.primary};
    height: min(35vw, 175px);
    left: max(-43vw, -215px);
    top: max(-44vw, -220px);
    flex-shrink: 0
`

const HowToUse = (props) => {
    const SecondParagraph = <>모금 물품은 지역의 발전을 위하여 지역 상권/기업에서 구매합니다. 현재 물품은 <strong>{props.sellorName}</strong> 에서 구매할 예정입니다.</>;
    return(
        <HowToUseWrapper>
            <TitleWrapper>
                <img src={lightbulb} />
                <LightTitle>기부금은 이렇게 사용됩니다</LightTitle>
            </TitleWrapper>
            <CircleExplanation title={"투명한 기부금 사용"} paragraph={"기부 주신 기부금 전액은 모금 종료 즉시, 해당 모금 물품을 구매하는데에 사용됩니다."}/>
            <CircleExplanation title={"지역의 지속 가능한 발전을 위한 사용"} paragraph={SecondParagraph}/>
            <CircleExplanation title={"물품 직접 전달"} paragraph={"모금한 센터에 기부금이 아닌, 직접 물품을 전달하여 더 투명하고 활실한 기부가 됩니다."}/>
            <Line />
        </HowToUseWrapper>
    )
}

const DonateButtonWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: max(calc((100vw - 500px)/2), 0px);
    bottom: 0;
    z-index: 2;
    color: ${({theme}) => theme.fontColor.white};
    height: min(15vw, 75px);
    width: min(100vw, 500px);
    background-color: ${({theme}) => theme.color.primary};
`


const CenterItemDetail = () => {
    const exampleJson = {
        name: "대구농산 더담은 우리쌀 10kg",
        imageUrl: "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/4444095662923187-47c3ecef-b9f7-4405-8618-b1149fcb4654.png",
        marketName: "㈜대구농산",
        price: 30000,
        raisedAmount: 15000,
    }

    const totalPercent = Math.ceil(exampleJson.raisedAmount/exampleJson.price*100);

    // For Number Animation!
    const [percent, setPercent] = useState(0);

    const duration = 500;
    const frame = 50;

    useEffect(() => {
        let currentPercent = 0;
        let actualPercent = 0;
        const counter = setInterval(() => {
            actualPercent += totalPercent / frame * (-1.9 * (actualPercent/totalPercent) + 1.95);
            setPercent(Math.ceil(actualPercent));

            if (Math.ceil(actualPercent) >= totalPercent)
                clearInterval(counter);
        }, duration/frame);
        return () => {
            clearInterval(counter);
        }
    }, [totalPercent, frame, duration]);

    return (
        <CenterItemDetailWrapper>
            <ItemImage src={exampleJson.imageUrl} />
            <div>
                <SemiTitle>{exampleJson.name}</SemiTitle>
                <SecondaryParagraph>{exampleJson.marketName}</SecondaryParagraph>
            </div>
            <ProgressBar percent={percent}/>
            <ProgressInfo now={exampleJson.raisedAmount} goal={exampleJson.price}/>
            <HowToUse sellorName={exampleJson.marketName}/>
            <DonateButtonWrapper>
                <Title>기부하기</Title>
            </DonateButtonWrapper>
        </CenterItemDetailWrapper>
    )
}

export default CenterItemDetail;