import { atom } from "recoil";

export const periodicalDonationState = atom({
    key: "periodicalDonationState",
    default: [{
        periodical_donation_id: 0,
        center_name: "센터",
        start_date: null,
        end_date: null,
        donation_date: 0,
        amount: 13,
    }],
});
