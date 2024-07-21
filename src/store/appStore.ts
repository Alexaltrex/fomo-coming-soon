import {action, makeObservable, observable} from "mobx";

export class AppStore {
    address = null as null | string
    twitter = null as null | string
    tasks = [false, false, false, false, false, false]

    constructor() {
        makeObservable(this,
            {
                address: observable,
                twitter: observable,
                tasks: observable,


                setAddress: action.bound,
                setTwitter: action.bound,
                setTasks: action.bound,

            }
        )
    }

    setAddress(address: string) {
        this.address = address;
    }

    setTwitter(twitter: string) {
        this.twitter = twitter;
    }

    setTasks(tasks: boolean[]) {
        this.tasks = tasks;
    }

}