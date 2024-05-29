import styled from "styled-components";
import LightTitle from "../../components/Text/LightTitle";
import SecondaryParagraph from "../../components/Text/SecondaryParagraph";
import Paragraph from "../../components/Text/Paragraph";
import { useNavigate } from "react-router-dom";

const ItemWrapper = styled.div`
    display: flex;
    padding: min(3vw, 15px);
    width: 50%;
    align-items: flex-start;
    flex-direction: column;
    border: 1px solid ${({theme}) => theme.color.lightgray};
    
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
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


const ProgressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    justify-content: flex-end;
`

const Item = ({data}) => {
    const navigate = useNavigate();
    const percent = Math.ceil(data.raisedAmount/data.price*100);
    return (
        <ItemWrapper className="clickable" onClick={() => navigate(window.location.pathname + "/item/" + data.id)}>
            <ImageWrapper>
                <img src={data.imageUrl}/>
            </ImageWrapper>
            <LightTitle><strong>{data.name}</strong></LightTitle>
            <SecondaryParagraph>{data.marketName}</SecondaryParagraph>
            <ProgressWrapper>
                <ProgressBar percent={percent}/>
                <ProgressInfo total={data.raisedAmount} percent={percent} />
            </ProgressWrapper>
        </ItemWrapper>
    )
}

export default Item;