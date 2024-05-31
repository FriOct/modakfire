import { atom } from "recoil";

export const periodicalDonationState = atom({
    key: "periodicalDonationState",
    default: [
        {
            periodical_donation_id: 0,
            center_name: "천광 보육원",
            start_date: new Date(),
            end_date: new Date(),
            donation_date: 22,
            amount: 200000,
            center_id: 0,
        },
        {
            periodical_donation_id: 3,
            center_name: "천 보육원",
            start_date: new Date(),
            end_date: new Date(),
            donation_date: 12,
            amount: 200100,
            center_id: 3,
        },
    ],
});
