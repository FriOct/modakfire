import styled from "styled-components";
import Back from '../assets/Back.svg';
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const HeaderWrapper = styled.header`
    height: min(11vw, 55px);
    width: 100%;
    display: flex;
    justify-content: flex-start; 
    background-color: #ffffff;
    padding: ${({theme}) => theme.padding.header};
`

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize.large};
    color: ${({theme}) => theme.fontColor.brown};
`

const LogoImage = styled.img`
height: min(4vw, 25px);
width: min(6vw, 30px);
`

const HeaderBack = ({
    setCenter,
    center,
}) => {

    let navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <HeaderWrapper>
            <LogoWrapper onClick={()=>{setCenter(!center)}}>
                <LogoImage src={Back}/>
            </LogoWrapper>
        </HeaderWrapper>
    );
}
export default HeaderBack