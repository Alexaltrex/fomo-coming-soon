import style from "./Users.module.scss";
import {clsx} from "clsx";
import {useState} from "react";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {Referral} from "./Referral/Referral";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";
import {Timer} from "./Timer/Timer";

export const Phase3Leader = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className={style.users}>

            <div className={clsx(style.tabs, style.tabs_3)}>
                {
                    ["staking", "rewards", "Tasks"].map((label, key) => (
                        <button key={key}
                                onClick={() => setTab(key)}
                                className={clsx({
                                    [style.btn]: true,
                                    [style.btn_selected]: key === tab,
                                })}
                        >
                            <span>{label}</span>
                        </button>
                    ))
                }
            </div>

            <div className={clsx({
                [style.content]: true,
                [style.content_padding]: tab === 1,
            })}>

                <div className={style.title}>
                    {svgIcons.logo_full}
                </div>

                {
                    tab === 0 && (
                        <>
                            <Timer/>
                            <p className={style.label}>
                                you’ve staked
                            </p>
                            <p className={style.count}>
                                10,000 SOL
                            </p>
                        </>
                    )
                }

                {
                    tab === 1 && <Referral/>
                }

                {
                    tab === 2 && <Tasks/>
                }

                <SocialLinks/>
            </div>


        </div>
    )
}