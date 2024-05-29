import styled from "styled-components";
import HeaderUserEdit from "../layouts/HeaderUserEdit";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.color.bg};
`;

const AppBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: min(3vw, 15px) min(6vw, 30px);
    width: 100%;
    height: min(7vw, 60px);
`;

const LeftButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: min(2vw, 10px);
`;

const Vector = styled.div`
    width: min(2vw, 10px);
    height: min(4vw, 20px);
    border: 2px solid ${({ theme }) => theme.color.black};
`;

const Title = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 900;
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const Separator = styled.div`
    width: 100%;
    height: min(3.5vw, 15px);
    background: ${({ theme }) => theme.color.secondary};
`;

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.padding.primary};
    gap: min(2vw, 8px);
    width: 100%;
`;

const Label = styled.div`
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const InputBox = styled.input`
    width: 100%;
    padding: min(2vw, 8px);
    border-radius: min(4vw, 16px);
    background: ${({ theme }) => theme.color.secondary};
    border: none;
    font-family: "Noto Sans KR";
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.fontColor.primary};
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2vh 7vw;
    width: 100%;
`;

const EditButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: min(2vw, 8px);
    width: 100%;
    background: ${({ theme }) => theme.color.primary};
    border-radius: min(4vw, 16px);
    border: none;
    color: ${({ theme }) => theme.fontColor.white};
    font-family: "Noto Sans KR";
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.medium};
    cursor: pointer;
`;

function UserEdit() {
    const demoData = {
        User: {
            member_id: "12345",
            name: "심준성",
            email: "modak@knu.ac.kr",
            member_rank: "작은 불씨",
            register_date: "2024-05-25",
        },
    };

    const handleSave = () => {
        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value;
        demoData.User.name = name;
        demoData.User.email = email;
        console.log("Updated Data:", demoData.User);
        // Here you would handle the API call or other actions to save the data
    };

    return (
        <Container>
            <HeaderUserEdit/>
            <InputField>
                <Label>이름</Label>
                <InputBox id="nameInput" defaultValue={demoData.User.name} />
            </InputField>
            <InputField>
                <Label>이메일</Label>
                <InputBox id="emailInput" defaultValue={demoData.User.email} />
            </InputField>
            <ButtonWrapper>
                <EditButton onClick={handleSave}>수정 완료</EditButton>
            </ButtonWrapper>
        </Container>
    );
}

export default UserEdit;
