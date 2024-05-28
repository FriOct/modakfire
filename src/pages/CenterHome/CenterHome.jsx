import styled from "styled-components"
import CenterContent from "./CenterContent"
import CenterIntroBox from "./CenterIntroBox"
import Seperator from "../../components/Separator"
import ItemList from "./ItemList"

const exampleJSON = {
    imageUrl: "https://cdn.ilyoseoul.co.kr/news/photo/201903/292124_211207_332.jpg",
    hashtagList: ["대구", "북구", "보육원"],
    centerName: "북구어린이집",
    centerLocation: "대구광역시 북구 환성정길 17-2",
    donatorCount: 1942,
    likeCount: 3036
}
const CenterIntro = {
    Intro: "  저희 천광원은 사회복지법인 천광원 산하 아동양육시설로 1956년 전쟁으로 인해 부모를 잃거나 어려운 상황에 처한 아동들을 보호하고 돌보기 위해 설립되었습니다.그로부터 60여년의 시간이 흐른 현재도 천광원은 지역 내 거주하고 있는 취약계층 및 기초생활가정 또한 보호가 필요한 아동들을 사랑으로 양육하고 있습니다.\n  천광원에 속한 모든 가족들은 소외된 아동들이 정신적ㆍ육체적으로 안정된 생활을 할 수 있도록 열심히 노력하고 있으며, 여러 후원자님, 봉사자님을 통해 힘을 얻고 있습니다.아이들이 지금보다 더 나은 환경뿐만 아니라 질적으로 성장할 수 있도록 지속적인 관심과 후원을 부탁드립니다. 감사합니다."
}

const CenterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CenterHome = () => {
    return(
        <CenterWrapper>
            <CenterContent data={exampleJSON} />
            <CenterIntroBox data={CenterIntro.Intro} />
            <Seperator />
            <ItemList />
        </CenterWrapper>
    )
}

export default CenterHome