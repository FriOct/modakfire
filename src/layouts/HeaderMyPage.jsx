import styled from "styled-components";
import Logo from "../assets/logo.png";
import Back from "../assets/Back.svg";
import gear from "../assets/gear.svg";
import { userState } from "../recoil/atoms/userAtom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
    width: 100%;
    height: min(11vw, 55px);
    display: flex;
    padding: 0 min(5vw, 25px);
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom: 1px solid ${({ theme }) => theme.color.lightgray};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: min(2vw, 10px);
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.fontColor.brown};
`;

const LogoImage = styled.img`
    height: min(7vw, 35px);
    width: min(7vw, 35px);
`;

const BackWrapper = styled.img`
    height: min(4vw, 25px);
    width: min(6vw, 30px);
`;

const IconWrapper = styled.img`
    height: min(6vw, 30px);
    width: min(6vw, 30px);
`;

const HeaderMyPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);

    return (
        <HeaderWrapper>
            <BackWrapper
                className="clickable"
                onClick={() => navigate(-1)}
                src={Back}
            />
            <LogoWrapper>
                <LogoImage
                    className="clickable"
                    onClick={() => navigate("/")}
                    src={Logo}
                />
                모닥불
            </LogoWrapper>
            <IconWrapper
                className="clickable"
                onClick={() => navigate("/setting")}
                style={user?null:{ visibility: "hidden" }}
                src={gear}
            />
        </HeaderWrapper>
    );
};
export default HeaderMyPage;
