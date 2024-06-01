import styled from "styled-components";
import HeaderUserEdit from "../../../../layouts/HeaderUserEdit";
import { useRecoilState } from "recoil";
import { userState } from "../../../../recoil/atoms/userAtom";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../../api";
import { useEffect, useState } from "react";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.color.bg};
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
    const [user, setUser] = useRecoilState(userState);
    const [updated, setUpdated] = useState(false);
    let navigate = useNavigate();
    
    const handleSave = () => {
        const newName = document.getElementById("nameInput").value;
        const newEmail = document.getElementById("emailInput").value;
        setUser((prev) => ({...prev, name: newName, email: newEmail}));

        //console.log("Updated Data:", user);
        setUpdated(true);

    };

    useEffect(() => {
        if (updated) {
          console.log("Updated Data:", user);
          updateUser(user.id, user)
            .then(() => {
                navigate(-2);
            })
            .catch((error) => {
              console.error("Error updating user:", error);
            })
            .finally(() => {
              setUpdated(false);  // 상태 업데이트 완료 표시
            });
        }
      }, [updated]);

    

    return (
        <Container>
            <HeaderUserEdit />
            <InputField>
                <Label>이름</Label>
                <InputBox id="nameInput" defaultValue={user.name} />
            </InputField>
            <InputField>
                <Label>이메일</Label>
                <InputBox id="emailInput" defaultValue={user.email} />
            </InputField>
            <ButtonWrapper>
                <EditButton onClick={handleSave}>수정 완료</EditButton>
            </ButtonWrapper>
        </Container>
    );
}

export default UserEdit;
