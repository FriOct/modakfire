import styled from "styled-components";
import Carousel from "../components/Carousel";
import Paragraph from "../components/Text/Paragraph";
import LightTitle from "../components/Text/LightTitle";
import downLine from "../assets/icons/downLine.svg";
import search from "../assets/icons/search.svg";
import sharp from "../assets/icons/sharp.svg";
import people from "../assets/icons/people.svg";
import star from "../assets/icons/star.svg";
import Seperator from "../components/Separator";
import HighlightWrapper from "../components/Text/HighlightWrapper";
import Title from "../components/Text/Title";
import { Navigate, useNavigate } from "react-router-dom";

const BannerDataList = [
    {
        src: "../src/assets/banners/banner1.png"
    },
    {
        src: "../src/assets/banners/banner2.png"
    },
    {
        src: "../src/assets/banners/banner3.png"
    }
]

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: min(100vw, 500px);
`
const SearchSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: min(3vw, 15px);
`

const SearchMenuWrapper = styled.div`
    display: flex;
    padding: min(0.5vw, 2.5px) min(3vw, 15px);
    border: 1px solid ${({theme}) => theme.color.gray};
    border-radius: 20px;
    gap: min(2vw, 10px);
    div {
        width: min(17vw, 85px);
        display: flex;
        justify-content: space-between;
        gap: min(1vw, 5px);
        padding: 0 min(1vw, 5px);
        border-right: 1px solid ${({theme}) => theme.color.gray};
        img{
            width: min(4vw, 20px);
            background-size: cover;
        }
    }
    div:last-child {
        width: min(20vw, 100px);
        border: none;
    }
`

const SearchSelector = (props) => {
    return(
        <div>
            <LightTitle>{props.data}</LightTitle>
            <img src={downLine}/>
        </div>
    )
}

const SearchMenu = () => {
    return(
        <SearchMenuWrapper>
            <SearchSelector data={"대구"}/>
            <SearchSelector data={"북구"}/>
            <SearchSelector data={"보육원"}/>
        </SearchMenuWrapper>
    )
}

const SearchSection = () => {
    return(
        <SearchSectionWrapper>
            <LightTitle><strong>센터 검색</strong></LightTitle>
            <SearchMenu />
        </SearchSectionWrapper>
    )
}
const SearchResultWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: min(2vw, 10px) min(2vw, 10px);
    gap: min(2vw, 10px);
    img{
        width: min(5vw, 25px);
        background-size: cover;
    }
    
`
const SearchResult = (props) => {
    return(
        <SearchResultWrapper>
            <img src={search}/>
            <HighlightWrapper>
                <LightTitle>{props.count}개의 <strong>검색 결과</strong></LightTitle>
            </HighlightWrapper>
        </SearchResultWrapper>
    )
}

const CenterImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    width: min(25vw, 125px);
    height: min(25vw, 125px);
    border-radius: min(5vw, 25px);
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

const CenterStyledWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(4vw, 15px);
    padding: min(3vw, 15px);
    border-top: 1px solid ${({theme}) => theme.color.gray};
`

const CenterInfowrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: min(2vw, 10px);
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

const IconParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(1vw, 5px);
    img{
        width: min(5vw, 25px);
        background-size: cover;
    }
`

const addComma = (number) => {
    const ret = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return ret;
}

const DonatorCount = (props) => {
    return (
        <IconParagraphWrapper>
            <img src={people}/>
            <Paragraph>{addComma(props.data)}명 <strong>참여중</strong></Paragraph>
        </IconParagraphWrapper>
    )
}

const LikeCount = (props) => {
    return (
        <IconParagraphWrapper>
            <img src={star}/>
            <Paragraph>{addComma(props.data)}명 <strong>추천</strong></Paragraph>
        </IconParagraphWrapper>
    )
}

const exampleCenterJSON = [{
    center_id: 1,
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    city: "대구",
    gu: "북구",
    type: 2,
    info: "",
    name: "천광보육원",
    donor_num: 2130,
    like_num: 4217
},
{
    center_id: 2,
    imageUrl: "https://www.grandculture.net/Image?localName=daegu&id=GC400P10111&t=middle",
    city: "대구",
    gu: "북구",
    type: 2,
    info: "",
    name: "새볕원",
    donor_num: 1783,
    like_num: 2236
},
{
    center_id: 3,
    imageUrl: "https://cdn.ilyoseoul.co.kr/news/photo/201903/292124_211207_332.jpg",
    city: "대구",
    gu: "북구",
    type: 2,
    info: "",
    name: "북구어린이집",
    donor_num: 1942,
    like_num: 3036
},
]

const typeEnumToStringTable = ["복지관", "장애인 복지관", "보육원", "한부모 센터", "노숙인 시설", "정신 건강 복지센터", "재활원", "종합 센터", "커뮤니티"];

const CenterWrapper = ({data}) => {
    const navigate = useNavigate();
    const hashtagList = [data.city, data.gu, typeEnumToStringTable[data.type]]
    return (
    <CenterStyledWrapper className="clickable" onClick={() => navigate("/center/" + data.center_id)}>
        <CenterImage src={data.imageUrl} />
        <CenterInfowrapper>
            <LightTitle><strong>{data.name}</strong></LightTitle>
            <HashtagTable>
                {hashtagList.map((hashtag, index) => <Hashtag key={index} data={hashtag}/>)}
            </HashtagTable>
            <DonatorCount data={data.donor_num} />
            <LikeCount data={data.like_num} />
        </CenterInfowrapper>
    </CenterStyledWrapper>
    )
}


const Home = () => {

    return(
        <HomeWrapper>
            <Carousel items={BannerDataList} />
            <SearchSection />
            <Seperator />
            <SearchResult count={exampleCenterJSON.length}/>
            {
                exampleCenterJSON.map((props, index) => <CenterWrapper key={index} data={props} />)
            }
        </HomeWrapper>
    )
}

export default Home;