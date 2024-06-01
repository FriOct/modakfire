import { useSetRecoilState } from "recoil";
import { userState } from "./recoil/atoms/userAtom";

const baseURL = "https://port-0-modakfire-be-1272llwutmz86.sel5.cloudtype.app/api";

/**
 * 정기 기부 데이터를 보내면 생성
 * @param {object} data 정기 기부 데이터
 * @param {int} data.amount 기부 금액
 * @param {int} data.donationDate 기부 일
 * @param {String} data.memberId 멤버 id
 * @param {int} data.centerId 센터 id
 * @returns 생성된 정기 기부 데이터
 */
export const createPeriodicalDonation = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/periodicalDonations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create periodical donation");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error creating periodical donation:", error);
        reject(error);
      });
  });
};
/**
 * 멤버의 정기 후원 리스트를 반환
 * @param {int} memberId 멤버 id
 * @returns 멤버의 정기 후원 리스트
 */
export const readPeriodicalDonation = (memberId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/periodicalDonations/${memberId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to read periodical donation");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error reading periodical donation:", error);
        reject(error);
      });
  });
};
/**
 * 특정 id를 가진 정기 후원을 수정함
 * @param {int} periodicalDonationId 정기 후원 id
 * @param {object} data 수정할 data
 * @param {int} data.amount 수정할 정기 후원 금액
 * @param {int} data.donationDate 수정할 정기 후원 날짜
 * @param {int} data.centerId 수정할 센터 id
 * @returns 수정된 정기 기부 데이터
 */
export const updatePeriodicalDonation = (periodicalDonationId, data) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/periodicalDonations/${periodicalDonationId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update periodical donation");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error updating periodical donation:", error);
        reject(error);
      });
  });
};
/**
 * 정기 후원을 삭제
 * @param {int} periodicalDonationId 삭제할 정기후원 id
 * @returns deleted
 */
export const deletePeriodicalDonation = (periodicalDonationId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/periodicalDonations/${periodicalDonationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove periodical donation");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error removing periodical donation:", error);
        reject(error);
      });
  });
};

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
/**
 * 입력된 유저 아이디의 유저의 정보를 반환
 * @param {int} userId 유저 아이디
 * @returns 유저 정보
 */
export const readUser = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/members/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to read user");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error reading user:", error);
        reject(error);
      });
  });
};
/**
 * 입력된 유저 데이터로 유저의 정보를 변경
 * @param {int} userId 유저 아이디
 * @param {object} userData 유저 정보 변경 쿼리
 * @param {String} userData.id 유저 아이디
 * @param {String} userData.name 유저 이름
 * @param {String} userData.email 유저 이메일
 * @returns 바뀐 유저의 정보
 */
export const updateUser = (userId, userData) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/members/${userId}`, {
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

/**
 * 입력된 유저 아이디의 유저를 삭제
 * @param {int} userId 유저 아이디
 * @returns deleted
 */
export const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/members/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to remove user");
        }
        return response;
      })
      .then((data) => resolve(data))
      .catch((error) => {
        console.error("Error removing user:", error);
        reject(error);
      });
  });
};
/**
 * data의 query에 따라 검색된 center의 값을 전달
 * @param {object} data 검색 쿼리
 * @param {string} data.city 시, 도 구분. 전체 검색시 "전국"
 * @param {string} data.gu 세부 지역 구분. 전체 검색시 "전체"
 * @param {int} data.centerType 센터 타입 구분. 전체 검색시 0
 * @returns {object[]} center 정보 리스트
 */
export const getCenter = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/centers?city=${data.city}&gu=${data.gu}&centerType=${data.centerType}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get center");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting center: ", error);
      reject(error);
    })
  })
}
/**
 * centerID 입력 받아서 해당 center의 값 return
 * @param {int} centerId center의 아이디
 * @returns {object} center 정보
 */
export const getCenterById = (centerId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/centers/${centerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get centerbyid");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting center: ", error);
      reject(error);
    })
  })
}
/**
 * data로 특정 아이템에 특정 금액만큼 기부
 * @param {object} data 기부 정보
 * @param {string} data.memberId 멤버 id
 * @param {int} data.itemID 아이템 id
 * @param {int} data.totalAmount 기부할 금액
 * @returns 기부 완료한 아이템의 List
 */
export const donationRequest = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/donations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to post donation");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error donationing: ", error);
      reject(error);
    })
  })
}
/**
 * data로 특정 시, 구, 센터 타입에 특정 금액만큼 기부
 * @param {object} data 기부 정보
 * @param {String} data.memberId 멤버 id
 * @param {int} data.totalAmount 기부할 금액
 * @param {String} data.city 기부할 시
 * @param {String} data.gu 기부할 구
 * @param {int} data.centerType 기부할 센터 타입
 * @returns 기부 완료한 아이템의 List
 */
export const donationFastRequest = (data) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/donations/fast`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to post fast donation");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error donationing: ", error);
      reject(error);
    })
  })
}
/**
 * memberId로 멤버의 기부 기록을 가져옴
 * @param {int} memberId 멤버 id
 * @returns 멤버의 기부 기록 List
 */
export const getMyDonationHistory = (memberId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/donations/${memberId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get donation history");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting donation: ", error);
      reject(error);
    })
  })
}
/**
 * 특정 기부가 언제 모금이 끝났고, 배송이 완료되었는지 반환
 * @param {int} donationId  기부 id
 * @returns 모금의 시간 정보
 */
export const getDonationTimeinfo = (donationId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/donations/timeinfo/${donationId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get donation time info");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting donation: ", error);
      reject(error);
    })
  })
}
/**
 * 센터, 멤버 정보로 좋아요를 했는지 여부 반환
 * @param {int} centerId 센터 id
 * @param {int} memberId 멤버 id
 * @returns 좋아요를 눌렀는지 boolean
 */
export const isLiked = (centerId, memberId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/likes/${centerId}/${memberId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get my like info");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting like: ", error);
      reject(error);
    })
  })
}
/**
 * 센터, 멤버 정보로 센터에 좋아요/좋아요 취소
 * @param {int} centerId 센터 id
 * @param {int} memberId 멤버 id
 * @returns 
 */
export const likeRequest = (centerId, memberId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/likes/${centerId}/${memberId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to do like");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error like: ", error);
      reject(error);
    })
  })
}
/**
 * 특정 아이템의 진행도(모금중, 배송준비중...) 반환
 * @param {int} itemId 아이템 id
 * @returns 진행도 (0~3)
 */
export const getItemStatus = (itemId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/items/status/${itemId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get item status");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting item status: ", error);
      reject(error);
    })
  })
}
/**
 * 특정 아이템 id로 아이템의 정보를 반환함
 * @param {int} itemId 아이템 id
 * @returns 특정 아이템의 정보
 */
export const getItemInfoById = (itemId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/items/${itemId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get item info by item id");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting item info: ", error);
      reject(error);
    })
  })
}
/**
 * 센터 id로 센터에 있는 아이템을 반환함
 * @param {int} centerId 센터 id
 * @returns 아이템 리스트
 */
export const getItemInfoByCenterId = (centerId) => {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}/items/center/${centerId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if(!response.ok)
        throw new Error("Failed to get item info by center id");
      return response.json();
    })
    .then((json) => resolve(json))
    .catch((error) => {
      console.error("Error getting item info: ", error);
      reject(error);
    })
  })
}
