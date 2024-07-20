import {useContext} from "react";
import {AppStore} from "./appStore";
import {StoreContext} from "../components/A0_App/AppContainer";
import {CategoryStore} from "./categoryStore";
import {AuthStore} from "./authStore";

export class RootStore {
    appStore: AppStore
    authStore: AuthStore
    categoryStore: CategoryStore

    constructor() {
        this.appStore = new AppStore();
        this.authStore = new AuthStore();
        this.categoryStore = new CategoryStore();
    }
}
export const store = new RootStore()

export const useStore = (): RootStore => useContext(StoreContext)
