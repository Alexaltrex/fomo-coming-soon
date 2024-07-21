import {BrowserRouter, HashRouter} from "react-router-dom";
import {RootStore, store} from "../../store/rootStore";
import {createContext} from "react";
import {App} from "./App";

export const StoreContext = createContext<RootStore>({} as RootStore)

export const AppContainer = () => {
    return (
        <HashRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </HashRouter>
    )
}