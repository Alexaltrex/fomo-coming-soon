import style from "./Header.module.scss";
import {Link} from "react-router-dom";
import {svgIcons} from "../../assets/svgIcons";
import {clsx} from "clsx";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/rootStore";
import {ButtonCustom} from "../_common/ButtonCustom/ButtonCustom";
import {Logo} from "./Logo/Logo";

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
                        <div className={clsx(style.connectedItem, style.borderItem)}>
                            {svgIcons.wallet}
                            <p>
                                {address.slice(0, 4) + "..." + address.slice(address.length - 4, address.length)}
                            </p>
                        </div>
                    ) : (
                        <ButtonCustom label="CONNECT WALLET"
                                      className={clsx(style.connectBtn, style.borderItem)}
                        />
                    )
                }

                {
                    twitter ? (
                        <div className={clsx(style.connectedItem, style.borderItem)}>
                            {svgIcons.x}
                            <p>{twitter}</p>
                        </div>
                    ) : (
                        <ButtonCustom label="CONNECT WALLET"
                                      className={clsx(style.connectBtn, style.borderItem)}
                                      onClick={() => setTwitter("@KeanuReev")}
                        />
                        // <button className={clsx(style.connectBtn, style.borderItem)}
                        //         onClick={() => setTwitter("@KeanuReev")}
                        // >
                        //     <span>CONNECT TWITTER</span>
                        // </button>
                    )
                }


            </div>
        </header>
    )
})
