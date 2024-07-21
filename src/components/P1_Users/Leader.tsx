import style from "./Users.module.scss";
import {useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {Referral} from "./Referral/Referral";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";

export const Leader = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className={style.users}>

            <div className={style.tabs}>
                {
                    ["Tasks", "referral"].map((label, key) => (
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
                    tab === 0 ? <Tasks/> : <Referral/>
                }

                <SocialLinks/>
            </div>


        </div>
    )
}