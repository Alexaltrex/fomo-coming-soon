import {action, makeObservable, observable} from "mobx";

export class AppStore {
    address = null as null | string
    twitter = null as null | string

    constructor() {
        makeObservable(this,
            {
                address: observable,
                twitter: observable,

                setAddress: action.bound,
                setTwitter: action.bound,
            }
        )
    }

    setAddress(address: string) {
        this.address = address;
    }

    setTwitter(twitter: string) {
        this.twitter = twitter;
    }

}