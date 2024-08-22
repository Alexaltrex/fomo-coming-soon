import style from "./Phase3Leader.module.scss";
import {clsx} from "clsx";
import {useState} from "react";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {Referral} from "./Referral/Referral";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";
import {Timer} from "./Timer/Timer";
import {Tabs} from "../_common/Tabs/Tabs";
import {TopUsers} from "../_common/TopUsers/TopUsers";
import {users} from "../_common/TopUsers/data";

export const Phase3Leader = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className={style.phase3Leader}>

            <Tabs tabs={["staking", "rewards", "Tasks", "Who’s in?"]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
            />

            <div className={clsx({
                [style.content]: true,
                [style.content_tab1]: tab === 1,
                [style.content_tab3]: tab === 3,
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

                {
                    tab === 3 && (
                        <>
                            <div className={style.preTopUsers}>
                                <p>2000 are already here</p>
                            </div>
                            <TopUsers users={users} />
                        </>
                    )
                }



                {/*<SocialLinks/>*/}
            </div>


        </div>
    )
}