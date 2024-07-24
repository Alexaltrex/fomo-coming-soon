import style from "./EnterCode.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {InviteCodeForm} from "./InviteCodeForm/InviteCodeForm";
import {ConnectWallet} from "./ConnectWallet/ConnectWallet";
import React, {useState} from "react";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";
import {useNavigate} from "react-router-dom";
// @ts-ignore
import {FlipItem} from "../_common/FlipItem";

export const EnterCode = () => {
    const [connectWallet, setConnectWallet] = useState(false)
    const navigate = useNavigate();

    //const [count, setCount] = useState(1);


    return (
        <div className={style.enterCode}>

            <div className={style.title}>
                {svgIcons.logo_full}
            </div>

            <InviteCodeForm onClick={() => setConnectWallet(true)}/>

            {/*<div className={style.tickWrapper}*/}
            {/*>*/}
            {/*    <FlipItem value={count}/>*/}
            {/*</div>*/}

            {/*<button onClick={() => setCount(count + 1)}>*/}
            {/*    add*/}
            {/*</button>*/}

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