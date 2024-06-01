import styled from "styled-components";
import LightTitle from "../../components/Text/LightTitle";
import HighlightWrapper from "../../components/Text/HighlightWrapper";
import Paragraph from "../../components/Text/Paragraph";
import SecondaryParagraph from "../../components/Text/SecondaryParagraph";
import Item from "./Item";
import { getItemInfoByCenterId } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: min(4vw, 20px);
`

const TitleWrapper = styled.div`
    display: flex;
    padding-bottom: min(3vw, 15px);
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        gap: min(2vw, 10px);
    }
`

const ItemTable = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`


const SortBy = (props) => {
    return(
        <>{props.isSelected ?
            <Paragraph>
                • <strong>{props.data}</strong>
            </Paragraph> :
            <SecondaryParagraph>
                • {props.data}
            </SecondaryParagraph>
        }</>
    )
}

const itemJsonList = [{
    id: 1,
    imageUrl: "https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/ce838711-86c1-4eb7-8de1-996dfa55d6907310471040280954698.png",
    name: "대구농산 강낭콩 3kg",
    price: 13900,
    raisedAmount: 10425,
    marketName: "㈜대구농산",
},
{
    id: 2,
    imageUrl: "https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2623270551134611-ba87cfad-b0eb-4817-8c9b-edd78669f137.png",
    name: "대구농산 더담은 우리쌀 20kg",
    price: 57900,
    raisedAmount: 16200,
    marketName: "㈜대구농산",
},
{
    id: 3,
    imageUrl: "https://www.busan.com/nas/data/content/image/2014/09/12/20140912000057_0.jpg",
    name: "냉동 순살고등어 3kg",
    price: 39000,
    raisedAmount: 4200,
    marketName: "대구신화수산㈜"
},
{
    id: 4,
    imageUrl: "https://m.art-on.co.kr/web/product/big/201910/64da19866f902e62be63c40f1f43ddc6.jpg",
    name: "향기 사인펜 16색 10개",
    price: 27000,
    raisedAmount: 25000,
    marketName: "㈜협신"
},
{
    id: 5,
    imageUrl: "https://www.lego.com/cdn/cs/set/assets/blta9e2bb2199eed6d4/43242.png",
    name: "레고 5종",
    price: 45000,
    raisedAmount: 30000,
    marketName: "우일완구",
}

]

const ItemList = () => {
    const navigate = useNavigate();
    const [itemJson, setJson] = useState();
    const itemId = parseInt(useParams().centerId);
    const [isloaded, setloaded] = useState(false);
    useEffect(() => {
        getItemInfoByCenterId(itemId)
        .then(
            (json) => {setJson(json); console.log(json);}
        )
        .finally(
            () => {setloaded(true);}
        )
    }, []);
    return (
        isloaded ? 
        <StyledWrapper>
            <TitleWrapper>
                <LightTitle>
                    <HighlightWrapper>
                        <strong>필요한 물품들</strong>
                    </HighlightWrapper>
                </LightTitle>
                <div>
                    <SortBy isSelected={true} data={"등록순"}/>
                    <SortBy isSelected={false} data={"종료임박순"}/>
                </div>
            </TitleWrapper>
            <ItemTable>
                {itemJsonList.map((itemJson, index) => <Item key={index} data={itemJson}/>)}
            </ItemTable>
        </StyledWrapper>
        :
        null
    )
}

export default ItemList