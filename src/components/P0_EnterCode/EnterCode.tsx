import style from "./ComingSoon.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {InviteCodeForm} from "./InviteCodeForm/InviteCodeForm";
import {Timer} from "./Timer/Timer";
import {ConnectWallet} from "./ConnectWallet/ConnectWallet";
import {useState} from "react";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";

export const ComingSoon = () => {

    const phase = 1 as number;
    const [connectWallet, setConnectWallet] = useState(false)


    return (
        <div className={style.comingSoon}>

            <div className={style.title}>
                {svgIcons.logo_full}
            </div>

            {
                (phase === 1 || phase === 2) && (
                    <InviteCodeForm onClick={() => setConnectWallet(true)}/>
                )
            }


            {
                phase === 3 && <Timer/>
            }

            <SocialLinks/>

            {connectWallet && <ConnectWallet onClose={() => setConnectWallet(false)}/>}

        </div>


    )
}