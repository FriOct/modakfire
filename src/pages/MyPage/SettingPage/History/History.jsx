import styled from "styled-components"
import Title from "../../../../components/Text/Title"
import HighlightWrapper from "../../../../components/Text/HighlightWrapper"
import Seperator from "../../../../components/Separator"
import SemiTitle from "../../../../components/Text/SemiTitle"
import coins from "../../../../assets/icons/coins.svg";
import box from "../../../../assets/icons/box.svg";
import truck from "../../../../assets/icons/truck.svg";
import delivery from "../../../../assets/icons/delivery.svg";
import right from "../../../../assets/icons/right.svg"
import SecondaryParagraph from "../../../../components/Text/SecondaryParagraph"
import LightTitle from "../../../../components/Text/LightTitle"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { userState } from "../../../../recoil/atoms/userAtom"

const HistoryWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    > h1{
        padding: min(5vw, 25px) 0;
    }
`

const DonationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: min(2vw, 10px);
    width: 100%;
    align-items: flex-start;
    padding: min(3vw, 15px);
`

const DonationInfoWrapper = styled.div`
    display: flex;
    gap: min(3vw, 15px);
    width: 100%;
    padding: min(3vw, 15px);
`

const CenterImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    width: min(20vw, 100px);
    height: min(20vw, 100px);
    border-radius: min(5vw, 25px);
    box-shadow: 0px 0px 8px ${({theme}) => theme.color.shadow};
    img {
        width: min(20vw, 100px);
        height: min(20vw, 100px);
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

const StateWithIconWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(1vw, 5px);
    img{
        width: min(7vw, 35px);
        height: min(7vw, 35px);
    }
`

const StateIcon = (props) => {
    const iconTable = [coins, box, truck, delivery];
    const stateTable = ["모금중", "전달 대기중", "전달중", "전달 완료"];
    return(
        <StateWithIconWrapper>
            <img src={iconTable[props.step]}/>
            <LightTitle><strong>{stateTable[props.step]}</strong></LightTitle>
        </StateWithIconWrapper>
    )
}

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const RightWrapper = styled.div`
    display: flex;
    width: auto;
    flex: 1;
    padding-right: min(2vw, 10px);
    align-items: center;
    justify-content: flex-end;
    img{
        height: min(5vw, 25px);
    }
    
`

const DateWrapper = styled.div`
    display: flex;
    width: 100%;  
    padding: min(3vw, 15px);
    padding-bottom: 0;
    > h2{
        width: 100%;
        padding-bottom: min(1vw, 5px);
        margin-bottom: min(1vw, 5px);
        border-bottom: 1px solid ${({theme}) => theme.color.gray};
    }
`

const Date = (props) => {
    return(
        <DateWrapper>
            <SemiTitle>
                {props.data}
            </SemiTitle>
        </DateWrapper>
    )   
}

const Donation = ({props}) => {
    const navigate = useNavigate();
    return (
        <DonationInfoWrapper className="clickable" onClick={() => navigate("/itemstate/" + props.donation_id)}>
            <CenterImage src={props.imageUrl} />
            <InfoWrapper>
                <SemiTitle>{props.name}</SemiTitle>
                <SecondaryParagraph>{props.itemName}</SecondaryParagraph>
                <StateIcon step={0} />
            </InfoWrapper>
            <RightWrapper>
                <img src={right} />
            </RightWrapper>
        </DonationInfoWrapper>
    )
}

const DonationJsonList = [{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 8,
    date: "2024-05-31T20:49:49.7194501",
    totalAmount: 5000,
    item_id: 8,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 7,
    date: "2024-05-31T19:49:49.7194501",
    totalAmount: 5000,
    item_id: 7,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 6,
    date: "2024-05-28T20:49:49.7194501",
    totalAmount: 5000,
    item_id: 6,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 5,
    date: "2024-05-28T19:49:49.7194501",
    totalAmount: 5000,
    item_id: 5,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 4,
    date: "2024-05-28T18:49:49.7194501",
    totalAmount: 5000,
    item_id: 4,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 3,
    date: "2024-05-15T20:49:49.7194501",
    totalAmount: 5000,
    item_id: 3,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 2,
    date: "2024-05-12T20:49:49.7194501",
    totalAmount: 5000,
    item_id: 2,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
},
{
    imageUrl: "https://www.kpnews7.co.kr/imgdata/kpnews7_co_kr/201401/1390815625_0.JPG",
    donation_id: 1,
    date: "2024-05-12T19:49:49.7194501",
    totalAmount: 5000,
    item_id: 1,
    name: "천광보육원",
    itemName: "대구농산 더담은 우리쌀 3kg",
    status: 3,
}
]

const History = () => {
    let latestDate = new window.Date("1970-01-01");
    const [user, setUser] = useRecoilState(userState);
    
    return (
        <HistoryWrapper>
            <Title><HighlightWrapper>{user.name}</HighlightWrapper>님의 기부 내역</Title>
            {
                DonationJsonList.map((DonationJson, index) => {
                    const currentDate = new window.Date(DonationJson.date.substring(0, 10));
                    if(latestDate.getTime() != currentDate.getTime()){
                        latestDate = currentDate;
                        return(
                            <div key={index}>
                                <Seperator/>
                                <Date data={DonationJson.date.substring(0, 10)} />
                                <Donation props={DonationJson}/>
                            </div>
                        )
                    }
                    return (<Donation key={index} props={DonationJson}/>)
                })
            }
        </HistoryWrapper>
    )
}

export default History