import styled from "styled-components";
import LightTitle from "../../components/Text/LightTitle";
import SecondaryParagraph from "../../components/Text/SecondaryParagraph";
import Paragraph from "../../components/Text/Paragraph";

const ItemWrapper = styled.div`
    display: flex;
    padding: min(3vw, 15px);
    width: 50%;
    align-items: flex-start;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.color.lightgray};
    
`

const ImageWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    img{
        height: min(30vw, 150px);
        object-fit: cover;
    }
`

const ProgressBarWrapper = styled.div`
    width: 100%;
    height: min(1vw, 5px);
    margin: min(1vw, 5px) 0;
    overflow: hidden;
    border-radius: 5px;
    background-color: ${({theme}) => theme.color.secondary};
    div {
        color: transparent;
        width: ${(props) => props.$percent}%;
        background-color: ${({theme}) => theme.color.primary};
    }
    
`

const ProgressBar = (props) => {
    return (
        <ProgressBarWrapper $percent={props.percent}>
            <div>-</div>
        </ProgressBarWrapper>
    )
}

const ProgressInfoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const addComma = (number) => {
    const ret = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return ret;
}

const ProgressInfo = (props) => {
    return (
        <ProgressInfoWrapper>
            <Paragraph><strong>{addComma(props.total)}원</strong></Paragraph>
            <Paragraph>{props.percent}%</Paragraph>
        </ProgressInfoWrapper>
    )
}

const Item = ({data}) => {
    return (
        <ItemWrapper>
            <ImageWrapper>
                <img src={data.imageUrl}/>
            </ImageWrapper>
            <LightTitle><strong>{data.itemName}</strong></LightTitle>
            <SecondaryParagraph>{data.sellorName}</SecondaryParagraph>
            <ProgressBar percent={data.percent}/>
            <ProgressInfo total={data.totalPrice} percent={data.percent} />
        </ItemWrapper>
    )
}

export default Item;