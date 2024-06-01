import styled from "styled-components"
import Title from "../../components/Text/Title"
import SecondaryParagraph from "../../components/Text/SecondaryParagraph"
import sharp from "../../assets/icons/sharp.svg";
import star from "../../assets/icons/star.svg"
import share from "../../assets/icons/share.svg"
import Paragraph from "../../components/Text/Paragraph";
import LightTitle from "../../components/Text/LightTitle";

const CenterImageWrapper = styled.div`
    display: block;
    flex: none;
    overflow: hidden;
    width: min(40vw, 200px);
    height: min(40vw, 200px);
    border-radius: min(5vw, 25px);
    box-shadow: 0px 0px 8px ${({theme}) => theme.color.shadow};
    img {
        width: min(40vw, 200px);
        height: min(40vw, 200px);
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

const CenterContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: min(4vw, 20px);
    gap: min(2vw, 10px);
`

const CenterInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: min(2vw, 10px);
    gap: min(1vw, 5px);
`

const HashtagWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(1vw, 5px);
    padding: 0 min(2vw, 10px) 0 min(1vw, 5px);
    border: 1px solid ${({theme}) => theme.color.lightgray};
    border-radius: min(3vw, 15px);

    img{
        width: min(3vw, 15px);
        height: min(3vw, 15px);
    }
`

const HashtagTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: min(1vw, 5px);
`

const Hashtag = (props) => {
    return (
        <HashtagWrapper>
            <img src={sharp} />
            <Paragraph>{props.data}</Paragraph>
        </HashtagWrapper>
    )
}

const DonatorWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        padding-bottom: min(1vw, 5px);
        border-bottom: 1px solid ${({theme}) => theme.color.gray};
    }
`

const addComma = (number) => {
    const ret = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return ret;
}

const DonatorCount =  (props) => {
    return(
        <DonatorWrapper>
            <Paragraph>그동안 도움 주신 분들</Paragraph>
            <LightTitle><strong>{addComma(props.data)}명</strong></LightTitle>
        </DonatorWrapper>
    )
}

const LikeShareWrapper = styled.div`
    display: flex;
    padding: min(1vw, 5px);
    border: 1px solid ${({theme}) => theme.color.gray};
    border-radius: 15px;
    div{
        display: flex;
        gap: min(1vw, 5px);
        width: 50%;
        align-items: center;
        justify-content: center;
        img{
            width: min(4vw, 20px);

        }
    }
    div:first-child{
        border-right: 1px solid ${({theme}) => theme.color.gray};
    }
    
`
const LikeShare = (props) => {
    return (
        <LikeShareWrapper>
            <div>
                <img src={star}/>
                <Paragraph>{addComma(props.data)}</Paragraph>
            </div>
            <div>
                <img src={share}/>
            </div>
        </LikeShareWrapper>
    )
}

// {
//     center_id: 1,
//     imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
//     city: "대구",
//     gu: "북구",
//     location: "대구광역시 북구 동북로 57",
//     type: 2,
//     info: "",
//     name: "천광보육원",
//     donor_num: 2130,
//     like_num: 4217
// }

const typeEnumToStringTable = ["복지관", "장애인 복지관", "보육원", "한부모 센터", "노숙인 시설", "정신 건강 복지센터", "재활원"];

const CenterInfo = ({data}) => {
    const hashtagList = [data.city, data.gu, typeEnumToStringTable[data.type]];
    return(
        <CenterInfoWrapper>
            <Title>{data.name}</Title>
            <SecondaryParagraph>{data.location}</SecondaryParagraph>
            <HashtagTable>
                {hashtagList.map((hashtag, index) => <Hashtag key={index} data={hashtag}/>)}
            </HashtagTable>
            <DonatorCount data={data.donor_num}/>
            <LikeShare data={data.like_num}/>
        </CenterInfoWrapper>
       
    )
}

const CenterContent = ({data}) => {
    return(
        <CenterContentWrapper>
            <CenterImage src={data.imageUrl}/>
            <CenterInfo data={data} />
        </CenterContentWrapper>
    )
}

export default CenterContent;