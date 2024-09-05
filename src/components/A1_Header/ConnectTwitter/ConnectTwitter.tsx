import React, {FC} from "react";
import style from "./ConnectTwitter.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {ButtonCustom, ButtonEnum} from "../../_common/ButtonCustom/ButtonCustom";

interface IConnectTwitter {
    showConnectTwitter: boolean
    onClose: () => void
    onConnect: () => void
}

export const ConnectTwitter: FC<IConnectTwitter> = ({
                                                        showConnectTwitter,
                                                        onClose,
                                                        onConnect,
                                                    }) => {

    const onConnectHandler = () => {
        onConnect();
        onClose()
    }

    return (
<>
    {
        showConnectTwitter && (
            <div className={style.connectTwitter}>
                <div className={style.card}>

                    <div className={style.cardHeader}>
                        <div className={style.cardHeaderLeft}>
                            {svgIcons.x_outlined}
                            <span>CONNECT Twitter</span>
                        </div>
                        <button className={style.closeBtn}
                                onClick={onClose}
                        >
                            {svgIcons.close}
                        </button>
                    </div>

                    <div className={style.description}>
                        <div className={style.icon}>
                            {svgIcons.x_outlined}
                        </div>
                        <p>
                            Sign message to verify your account!
                            To finish connecting you must sign a message in your wallet to verify that you are the owner
                        </p>
                    </div>

                    <ButtonCustom label="Connect wallet"
                                  kind={ButtonEnum.contained}
                                  className={style.connectBtn}
                                  onClick={onConnectHandler}
                    />

                </div>
            </div>
        )
    }
</>
    )
}