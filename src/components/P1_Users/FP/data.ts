import src from "../../../assets/png/user.png"

export const leaders = Array
    .from({length: 100}, (v, k) => k)
    .map(k => ({
        src,
        address: "Z7Xy9Qp4MvB2Lk6H",
        twitter: "#",
        pts: "20000",
        referred: "124K"
    }))