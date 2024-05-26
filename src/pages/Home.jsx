import styled from "styled-components";
import Carousel from "../components/Carousel";

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
`

const Home = () => {
    return(
        <HomeWrapper>
            <Carousel items={BannerDataList} />
            Hello, Modak!
        </HomeWrapper>
    )
}

export default Home;