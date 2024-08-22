import {action, makeObservable, observable} from "mobx";

export class AppStore {
    address = null as null | string
    twitter = null as null | string
    depositModal = false
    signed = false

    constructor() {
        makeObservable(this,
            {
                address: observable,
                twitter: observable,
                depositModal: observable,
                signed: observable,

                setAddress: action.bound,
                setTwitter: action.bound,
                setDepositModal: action.bound,
                setSigned: action.bound,
            }
        )
    }

    setAddress(address: string) {
        this.address = address;
    }

    setTwitter(twitter: string) {
        this.twitter = twitter;
    }

    setDepositModal(depositModal: boolean) {
        this.depositModal = depositModal
    }

    setSigned(signed: boolean) {
        this.signed = signed
    }


}