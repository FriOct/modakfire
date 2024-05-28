import styled from "styled-components";
import LightTitle from "../../components/Text/LightTitle";
import HighlightWrapper from "../../components/Text/HighlightWrapper";
import Paragraph from "../../components/Text/Paragraph";
import SecondaryParagraph from "../../components/Text/SecondaryParagraph";
import Item from "./Item";

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
    justify-content: center;
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

const itemJson = {
    imageUrl: "https://lh3.googleusercontent.com/proxy/e9gZhXG4i7IIEILmV2JPhC2KcAexlt7sJzbZApD-TDKeWUevMxoUnneVgP8rjmwTAuAV4vd8ypkgzjkrFo04Jv59Kx51gbHjpFCc54VllgMyu8lK6a3U5Pwr830cON0jpCs5omBDPo7KB6xJ4NPuz3u3xuGNh4-HxJMliOG24XQuARwhYcI-yq8",
    itemName: "대구농산 강낭콩 3kg",
    sellorName: "㈜대구농산",
    totalPrice: 10425,
    percent: 75
}

const ItemList = () => {
    return (
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
                <Item data={itemJson}/>
                <Item data={itemJson}/>
                <Item data={itemJson}/>
                <Item data={itemJson}/>
            </ItemTable>
        </StyledWrapper>
    )
}

export default ItemList