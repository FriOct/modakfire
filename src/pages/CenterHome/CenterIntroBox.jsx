import styled from "styled-components";
import Paragraph from "../../components/Text/Paragraph";
import LightTitle from "../../components/Text/LightTitle";
import HighlightWrapper from "../../components/Text/HighlightWrapper";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: min(4vw, 20px);
    gap: min(3vw, 15px);
    padding-top: min(2vw, 10px);
    border-top: 1px solid ${({theme}) => theme.color.lightgray};
`

const CenterIntroBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: min(3vw, 15px);
    gap: min(3vw, 15px);
    border-left: min(1vw, 5px) solid ${({theme}) => theme.color.primary};
    background-color: ${({theme}) => theme.color.centerBoxBg};
`

const CenterIntroBox = (props) => {
    return (
        <StyledWrapper>
            <LightTitle>
                    <HighlightWrapper>
                        <strong>센터 소개글</strong>
                    </HighlightWrapper>
                </LightTitle>
            <CenterIntroBoxWrapper>
                {props.data.split("\n").map((string, index) => <Paragraph key={index}>{string}</Paragraph>)}
            </CenterIntroBoxWrapper>
        </StyledWrapper>
    )
}

export default CenterIntroBox;