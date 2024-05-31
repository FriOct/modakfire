import styled from "styled-components"
import Title from "./Text/Title"
import LightTitle from "./Text/LightTitle"
import x from "../assets/icons/x.svg"
import { useEffect } from "react"

const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    height: 100vh;
    width: min(100vw, 500px);
    backdrop-filter: blur(4px);
`

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: min(3vw, 15px) 0;
    width: min(70vw, 350px);
    border-radius: min(4vw, 20px);
    border: 2px solid ${({theme}) => theme.color.darkgray};
    box-shadow: 0px 0px 8px ${({theme}) => theme.color.shadow};
    background-color: ${({theme}) => theme.color.bg};
    > h1{
        border-bottom: 2px solid ${({theme}) => theme.color.darkgray};
    }
`

const SelectTable = styled.div`
    display: flex;
    justify-content: space-around;
    padding: min(3vw, 15px);
    gap: min(3vw, 15px);
    flex-wrap: wrap;
`

const CloseIconWrapper = styled.div`
    position: relative;
    height: 0;
    left: min(28vw, 140px);
    top: min(1vw, 10px);
    img{
        width: min(6vw, 30px);
        height: min(6vw, 30px);
    }
`

const SelectList = ["전국", "서울", "경기", "인천", "부산", "대구", "대전", "경남", "전남", "충남", "광주", "울산", "경북", "전북", "충북", "강원", "제주", "세종"];
const SelectIndex = 5;


const callbackFunc = () => {
    console.log("callback!");
}

const state = {
    callback: callbackFunc,
    tableTitle: "지역 선택",
    tableItems: ["전국", "서울", "경기", "인천", "부산", "대구", "대전", "경남", "전남", "충남", "광주", "울산", "경북", "전북", "충북", "강원", "제주", "세종"],
    currentIndex: -1,
    isVisible: true
}

const SelectModal = ({state}) => {
    if(state.isVisible)
        return (
            <BackgroundWrapper >
                <SelectWrapper>
                    <CloseIconWrapper className="clickable" onClick={state.callbackClose}>
                        <img src={x} />
                    </CloseIconWrapper>
                    <Title>
                        {state.tableTitle}
                    </Title>
                    <SelectTable>
                        {state.tableItems.map((SelectString, index) => 
                        <div key={index} className="clickable" onClick={() => state.callbackSelector(index)}>
                            <LightTitle>
                                {index==state.currentIndex?<strong>{SelectString}</strong>:SelectString}
                            </LightTitle>
                        </div>)}
                    </SelectTable>
                </SelectWrapper>
            </BackgroundWrapper>
        )
    return null;
}

export default SelectModal