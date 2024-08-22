import src from "../../../assets/png/user.png"

export interface IUser {
    src: string
    name: string
    value: string
}

export const users = Array
    .from(({length: 50}), (v, k) => ({
        src,
        name: "LightningHurricane200x",
        value: "972K"
    }))
