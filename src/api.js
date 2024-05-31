import { useSetRecoilState } from "recoil";
import { userState } from "./recoil/atoms/userAtom";

const baseURL = "http://localhost:8080";

export async function createUser({
  id: id,
  email: email,
  name: name,
  registerDate: registerDate,
}) {
  const url = baseURL + "/members";
  const data = {
    id: id,
    email: email,
    name: name,
    registerDate: registerDate,
  };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    contentType: "application/json",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

export const updateUser = (userId, userData) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.example.com/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error updating user:", error);
        reject(error);
      });
  });
};

