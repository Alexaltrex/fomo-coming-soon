import style from "./EnterCode.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {InviteCodeForm} from "./InviteCodeForm/InviteCodeForm";
import {ConnectWallet} from "./ConnectWallet/ConnectWallet";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {TopUsers} from "../_common/TopUsers/TopUsers";
import {users} from "../_common/TopUsers/data";

export const EnterCode = () => {
    const [connectWallet, setConnectWallet] = useState(false)
    const navigate = useNavigate();

    return (
        <div className={style.enterCode}>

            <div className={style.title}>
                {svgIcons.logo_full}
            </div>

            <p className={style.subTitle}>
                Memes meets innovation on solana
            </p>

            <InviteCodeForm onClick={() => setConnectWallet(true)}/>

            {/*<SocialLinks/>*/}

            {
                connectWallet && (
                    <ConnectWallet onClose={() => setConnectWallet(false)}
                                   onSign={() => navigate("/user")}
                    />
                )
            }

            <div className={style.texts}>
                <p>Audited BY</p>
                {svgIcons.halborn}
                <p>2000 are already here </p>
                <p>Who's in?</p>
            </div>

            <TopUsers users={users}
                      className={style.topUsers}
            />


        </div>


    )
}