import { atom } from "recoil";

// 데모 데이터용 atom
export const userState = atom({
    key: "userState",
    default: {
        User: {
            member_id: 12345,
            name: "심준성",
            email: "modak@knu.ac.kr",
            member_rank: "작은 불씨",
            register_date: "2024-05-25",
        },
        PeriodicalDonation: [
            {
                periodical_donation_id: 12345,
                center_name : "천광보육원",
                start_date: "2024-05-25",
                end_date: "2024-05-29",
                amount: 10000,
            },
            {
                periodical_donation_id: 12345,
                center_name : "천광보육원",
                start_date: "2024-05-25",
                end_date: "2024-05-29",
                amount: 10000,
            },
        ],
    },
});
