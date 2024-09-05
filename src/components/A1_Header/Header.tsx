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
import {useState} from "react";
import {ConnectTwitter} from "./ConnectTwitter/ConnectTwitter";

export const Header = observer(() => {
    const {
        appStore: {
            address, twitter, setTwitter,
        }
    } = useStore();

    const [showConnectTwitter, setShowConnectTwitter] = useState(false)

    return (
        <header className={style.header}>
            <Logo/>
            <ConnectTwitter showConnectTwitter={showConnectTwitter}
                            onClose={() => setShowConnectTwitter(false)}
                            onConnect={() => setTwitter("@KeanuReev")}
            />

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
                                      onClick={() => setShowConnectTwitter(true)}
                        />
                    )
                }


            </div>
        </header>
    )
})
