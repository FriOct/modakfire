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


const ItemList = () => {
    const navigate = useNavigate();
    const [itemJson, setJson] = useState();
    const itemId = parseInt(useParams().centerId);
    const [isloaded, setloaded] = useState(false);
    useEffect(() => {
        getItemInfoByCenterId(itemId)
        .then(
            (json) => {setJson(json);}
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
                {itemJson.map((itemJson, index) => <Item key={index} data={itemJson}/>)}
            </ItemTable>
        </StyledWrapper>
        :
        null
    )
}

export default ItemList