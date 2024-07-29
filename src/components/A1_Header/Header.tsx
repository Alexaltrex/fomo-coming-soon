import style from "./Header.module.scss";
import {Link} from "react-router-dom";
import {svgIcons} from "../../assets/svgIcons";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {ButtonCustom} from "../_common/ButtonCustom/ButtonCustom";
import {Logo} from "./Logo/Logo";
import {Wallet} from "./Wallet/Wallet";
import {Twitter} from "./Twitter/Twitter";

export const Header = observer(() => {
    const {
        appStore: {
            address, twitter, setTwitter,
        }
    } = useStore();


    return (
        <header className={style.header}>
            <Logo/>

            <div className={style.rightPart}>

                {
                    address ? (
                        <Wallet/>
                    ) : (
                        <ButtonCustom label="CONNECT WALLET"
                                      className={clsx(style.connectBtn, style.borderItem)}
                        />
                    )
                }

                {
                    twitter ? (
                        <Twitter/>
                    ) : (
                        <ButtonCustom label="CONNECT TWITTER"
                                      className={clsx(style.connectBtn, style.borderItem)}
                                      onClick={() => setTwitter("@KeanuReev")}
                        />
                    )
                }


            </div>
        </header>
    )
})
