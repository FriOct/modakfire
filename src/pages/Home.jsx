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
        width: min(15vw, 75px);
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
        width: min(18vw, 90px);
        border: none;
    }
`

const SearchSelector = (props) => {
    return(
        <div>
            <Paragraph>{props.data}</Paragraph>
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
            <LightTitle>센터 검색</LightTitle>
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
const SearchResult = () => {
    return(
        <SearchResultWrapper>
            <img src={search}/>
            <HighlightWrapper>
                <LightTitle>12개의 <strong>검색 결과</strong></LightTitle>
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
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    hashtagList: ["대구", "북구", "보육원"],
    centerName: "천광보육원",
    donatorCount: 2130,
    likeCount: 4238
},
{
    imageUrl: "https://www.grandculture.net/Image?localName=daegu&id=GC400P10111&t=middle",
    hashtagList: ["대구", "북구", "보육원"],
    centerName: "새볕원",
    donatorCount: 1783,
    likeCount: 2236
},
{
    imageUrl: "https://cdn.ilyoseoul.co.kr/news/photo/201903/292124_211207_332.jpg",
    hashtagList: ["대구", "북구", "보육원"],
    centerName: "북구어린이집",
    donatorCount: 1942,
    likeCount: 3036
},
]

const CenterWrapper = ({data}) => {
    return (
    <CenterStyledWrapper>
        <CenterImage src={data.imageUrl} />
        <CenterInfowrapper>
            <LightTitle><strong>{data.centerName}</strong></LightTitle>
            <HashtagTable>
                {data.hashtagList.map((hashtag, index) => <Hashtag key={index} data={hashtag}/>)}
            </HashtagTable>
            <DonatorCount data={data.donatorCount} />
            <LikeCount data={data.likeCount} />
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
            <SearchResult />
            {
                exampleCenterJSON.map((props, index) => <CenterWrapper key={index} data={props}/>)
            }
        </HomeWrapper>
    )
}

export default Home;