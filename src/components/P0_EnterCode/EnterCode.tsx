import style from "./EnterCode.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {InviteCodeForm} from "./InviteCodeForm/InviteCodeForm";
import {ConnectWallet} from "./ConnectWallet/ConnectWallet";
import {useState} from "react";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";
import {useNavigate} from "react-router-dom";

export const EnterCode = () => {
    const [connectWallet, setConnectWallet] = useState(false)
const navigate = useNavigate();

    return (
        <div className={style.enterCode}>

            <div className={style.title}>
                {svgIcons.logo_full}
            </div>

            <InviteCodeForm onClick={() => setConnectWallet(true)}/>

            <SocialLinks/>

            {
                connectWallet && (
                    <ConnectWallet onClose={() => setConnectWallet(false)}
                                   onSign={() => navigate("/user")}
                    />
                )
            }

        </div>


    )
}