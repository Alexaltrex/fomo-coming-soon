import {action, makeObservable, observable} from "mobx";
import {LangEnum} from "../types/app.type";

export class AppStore {
    burgerMenu = false
    catalogOpen = false
    filtersOpen = false
    lang = LangEnum.eng

    constructor() {
        makeObservable(this,
            {
                burgerMenu: observable,
                catalogOpen: observable,
                filtersOpen: observable,
                lang: observable,

                setBurgerMenu: action.bound,
                setCatalogOpen: action.bound,
                setFiltersOpen: action.bound,
                setLang: action.bound,
            }
        )
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu;
    }

    setCatalogOpen(catalogOpen: boolean) {
        this.catalogOpen = catalogOpen;
    }


    setFiltersOpen(filtersOpen: boolean) {
        this.filtersOpen = filtersOpen;
    }

    setLang(lang: LangEnum) {
        this.lang = lang;
    }


}