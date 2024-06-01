import styled from "styled-components";
import HeaderPeriodicalDonationHome from "../../../../layouts/HeaderPeriodicalDonationHome";
import Paragraph from "../../../../components/Text/Paragraph";
import LightTitle from "../../../../components/Text/LightTitle";
import downLine from "../../../../assets/icons/downLine.svg";
import search from "../../../../assets/icons/search.svg";
import sharp from "../../../../assets/icons/sharp.svg";
import people from "../../../../assets/icons/people.svg";
import star from "../../../../assets/icons/star.svg";
import Seperator from "../../../../components/Separator";
import HighlightWrapper from "../../../../components/Text/HighlightWrapper";
import { Navigate, useNavigate } from "react-router-dom";
import SelectModal from "../../../../components/SelectModal";
import { useState } from "react";

const BannerDataList = [
    {
        src: "../src/assets/banners/banner1.png",
    },
    {
        src: "../src/assets/banners/banner2.png",
    },
    {
        src: "../src/assets/banners/banner3.png",
    },
];

const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;
const SearchSectionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: min(3vw, 15px);
`;

const SearchMenuWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    padding: min(0.5vw, 2.5px) min(3vw, 15px);
    margin: 0 min(3vw, 15px);
    border: 1px solid ${({ theme }) => theme.color.gray};
    border-radius: 20px;
    gap: min(2vw, 10px);
    div {
        display: flex;
        justify-content: space-between;
        gap: min(1vw, 5px);
        padding: 0 min(1vw, 5px);
        border-right: 1px solid ${({ theme }) => theme.color.gray};
        h1 {
            flex: 1;
        }
        img {
            width: min(4vw, 20px);
            background-size: cover;
        }
    }
    div:last-child {
        border: none;
    }
`;

const SearchSelector = ({ state }) => {
    return (
        <div className="clickable" onClick={state.callbackOpen}>
            <LightTitle>{state.indicator}</LightTitle>
            <img src={downLine} />
        </div>
    );
};

const SearchMenu = ({ stateList }) => {
    return (
        <SearchMenuWrapper>
            <SearchSelector state={stateList[0]} />
            <SearchSelector state={stateList[1]} />
            <SearchSelector state={stateList[2]} />
        </SearchMenuWrapper>
    );
};

const SearchSection = ({ stateList }) => {
    return (
        <SearchSectionWrapper>
            <LightTitle>
                <strong>센터 검색</strong>
            </LightTitle>
            <SearchMenu stateList={stateList} />
        </SearchSectionWrapper>
    );
};
const SearchResultWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: min(2vw, 10px) min(2vw, 10px);
    gap: min(2vw, 10px);
    img {
        width: min(5vw, 25px);
        background-size: cover;
    }
`;
const SearchResult = (props) => {
    return (
        <SearchResultWrapper>
            <img src={search} />
            <HighlightWrapper>
                <LightTitle>
                    {props.count}개의 <strong>검색 결과</strong>
                </LightTitle>
            </HighlightWrapper>
        </SearchResultWrapper>
    );
};

const CenterImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    width: min(25vw, 125px);
    height: min(25vw, 125px);
    border-radius: min(5vw, 25px);
    box-shadow: 0px 0px 8px ${({ theme }) => theme.color.shadow};
    img {
        width: min(25vw, 125px);
        height: min(25vw, 125px);
        object-fit: cover;
    }
`;
const CenterImage = (props) => {
    return (
        <CenterImageWrapper>
            <img src={props.src} />
        </CenterImageWrapper>
    );
};

const CenterStyledWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(4vw, 15px);
    padding: min(3vw, 15px);
    border-top: 1px solid ${({ theme }) => theme.color.gray};
`;

const CenterInfowrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: min(2vw, 10px);
`;

const HashtagWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(1vw, 5px);
    padding: 0 min(2vw, 10px) 0 min(1vw, 5px);
    border: 1px solid ${({ theme }) => theme.color.lightgray};
    border-radius: min(3vw, 15px);

    img {
        width: min(3vw, 15px);
        height: min(3vw, 15px);
    }
`;

const HashtagTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: min(1vw, 5px);
`;

const Hashtag = (props) => {
    return (
        <HashtagWrapper>
            <img src={sharp} />
            <Paragraph>{props.data}</Paragraph>
        </HashtagWrapper>
    );
};

const IconParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(1vw, 5px);
    img {
        width: min(5vw, 25px);
        background-size: cover;
    }
`;

const addComma = (number) => {
    const ret = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return ret;
};

const DonatorCount = (props) => {
    return (
        <IconParagraphWrapper>
            <img src={people} />
            <Paragraph>
                {addComma(props.data)}명 <strong>참여중</strong>
            </Paragraph>
        </IconParagraphWrapper>
    );
};

const LikeCount = (props) => {
    return (
        <IconParagraphWrapper>
            <img src={star} />
            <Paragraph>
                {addComma(props.data)}명 <strong>추천</strong>
            </Paragraph>
        </IconParagraphWrapper>
    );
};

const exampleCenterJSON = [
    {
        center_id: 1,
        imageUrl:
            "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
        city: "대구",
        gu: "북구",
        type: 2,
        info: "",
        name: "천광보육원",
        donor_num: 2130,
        like_num: 4217,
    },
    {
        center_id: 2,
        imageUrl:
            "https://www.grandculture.net/Image?localName=daegu&id=GC400P10111&t=middle",
        city: "대구",
        gu: "북구",
        type: 2,
        info: "",
        name: "새볕원",
        donor_num: 1783,
        like_num: 2236,
    },
    {
        center_id: 3,
        imageUrl:
            "https://cdn.ilyoseoul.co.kr/news/photo/201903/292124_211207_332.jpg",
        city: "대구",
        gu: "북구",
        type: 2,
        info: "",
        name: "북구어린이집",
        donor_num: 1942,
        like_num: 3036,
    },
];

const typeEnumToStringTable = [
    "복지관",
    "장애인복지관",
    "보육원",
    "한부모 센터",
    "노숙인 시설",
    "정신건강센터",
    "재활원",
    "종합 센터",
    "커뮤니티",
];

const CenterWrapper = ({ data, setPd, pd, setCenter, center }) => {
    const navigate = useNavigate();
    const hashtagList = [data.city, data.gu, typeEnumToStringTable[data.type]];
    return (
        <CenterStyledWrapper
            className="clickable"
            onClick={() => {
                setPd({ ...pd, center_id: data.center_id, center_name: data.name });
                setCenter(!center);
            }}
        >
            <CenterImage src={data.imageUrl} />
            <CenterInfowrapper>
                <LightTitle>
                    <strong>{data.name}</strong>
                </LightTitle>
                <HashtagTable>
                    {hashtagList.map((hashtag, index) => (
                        <Hashtag key={index} data={hashtag} />
                    ))}
                </HashtagTable>
                <DonatorCount data={data.donor_num} />
                <LikeCount data={data.like_num} />
            </CenterInfowrapper>
        </CenterStyledWrapper>
    );
};

const cityTable = [
    "전국",
    "서울",
    "경기",
    "인천",
    "부산",
    "대구",
    "대전",
    "경남",
    "전남",
    "충남",
    "광주",
    "울산",
    "경북",
    "전북",
    "충북",
    "강원",
    "제주",
    "세종",
];
const daeguTable = [
    "전체",
    "중구",
    "동구",
    "서구",
    "남구",
    "북구",
    "수성구",
    " 달서구",
    "달성군",
    "군위군",
];
const typeTable = ["전체", ...typeEnumToStringTable];

const detailCityTable = {
    5: daeguTable,
};

const PeriodicalDonationCenterHome = ({ setCenter, center, setPd, pd }) => {

    // setPd({ ...pd, center_id: 0, center_name: "" })

    

    const [isVisible, setVisible] = useState([false, false, false]);
    const toggleVisible = (index) => {
        isVisible[index] = !isVisible[index];
        setVisible([...isVisible]);
    };
    const [modalIndex, setmodalIndex] = useState([0, 0, 0]);
    const setmodalItemIndex = (index, Itemindex) => {
        modalIndex[index] = Itemindex;
        if (index == 0) modalIndex[1] = 0;
        setmodalIndex([...modalIndex]);
    };

    const modalState = [
        {
            callbackClose: () => {
                toggleVisible(0);
            },
            callbackSelector: (index) => {
                setmodalItemIndex(0, index);
            },
            tableTitle: "지역 선택",
            tableItems: cityTable,
            currentIndex: modalIndex[0],
            isVisible: isVisible[0],
        },
        {
            callbackClose: () => {
                toggleVisible(1);
            },
            callbackSelector: (index) => {
                setmodalItemIndex(1, index);
            },
            tableTitle: "세부 지역 선택",
            tableItems: detailCityTable[modalIndex[0]] ?? ["개발 예정"],
            currentIndex: modalIndex[1],
            isVisible: isVisible[1],
        },
        {
            callbackClose: () => {
                toggleVisible(2);
            },
            callbackSelector: (index) => {
                setmodalItemIndex(2, index);
            },
            tableTitle: "센터 종류 선택",
            tableItems: typeTable,
            currentIndex: modalIndex[2],
            isVisible: isVisible[2],
        },
    ];
    const SearchSectionStateList = [
        {
            callbackOpen: () => {
                toggleVisible(0);
            },
            indicator: cityTable[modalIndex[0]],
        },
        {
            callbackOpen: () => {
                toggleVisible(1);
            },
            indicator: detailCityTable[modalIndex[0]]
                ? detailCityTable[modalIndex[0]][modalIndex[1]]
                : ["전체"],
        },
        {
            callbackOpen: () => {
                toggleVisible(2);
            },
            indicator: typeTable[modalIndex[2]],
        },
    ];

    return (
        <HomeWrapper>
            <HeaderPeriodicalDonationHome
                setCenter={setCenter}
                center={center}
            />
            <SelectModal state={modalState[0]} />
            <SelectModal state={modalState[1]} />
            <SelectModal state={modalState[2]} />
            <SearchSection stateList={SearchSectionStateList} />
            <Seperator />
            <SearchResult count={exampleCenterJSON.length} />
            {exampleCenterJSON.map((props, index) => (
                <CenterWrapper
                    key={index}
                    data={props}
                    setPd={setPd}
                    pd={pd}
                    setCenter={setCenter}
                    center={center}
                />
            ))}
        </HomeWrapper>
    );
};

export default PeriodicalDonationCenterHome;
