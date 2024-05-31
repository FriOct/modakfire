import { atom } from "recoil";

export const periodicalDonationState = atom({
    key: "periodicalDonationState",
    default: [{
        periodical_donation_id: 0,
        center_name: "천광 보육원",
        start_date: new Date(),
        end_date: new Date(),
        donation_date: 22,
        amount: 200000,
    }],
});
