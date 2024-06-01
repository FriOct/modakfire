import { atom } from "recoil";

// export const userState = atom({
//   key: "userState",
//   default: {
//     member_id: 2,
//     email: "더미더미@.com",
//     memmber_rank: "더미등급",
//     name: "더미씨",
//     register_date: "더미",
//   },
// });

export const userState = atom({
  key: "userState",
  default: null,
});
