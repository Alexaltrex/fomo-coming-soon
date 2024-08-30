import style from "./Phase3Leader.module.scss";
import {clsx} from "clsx";
import React, {useEffect, useState} from "react";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {Referral} from "./Referral/Referral";

import {Timer} from "./Timer/Timer";
import {Tabs} from "../_common/Tabs/Tabs";
import {TopUsers} from "../_common/TopUsers/TopUsers";
import {users} from "../_common/TopUsers/data";
import {FP} from "./FP/FP";

export const Phase3Leader = () => {
    const [tab, setTab] = useState(0);
    const [subTab, setSubTab] = useState(0);

    useEffect(() => {
        setSubTab(0)
    }, [tab]);


    return (
        <div className={style.phase3Leader}>

            <Tabs //tabs={["staking", "rewards", "Tasks", "Who’s in?"]}
                  tabs={["Deposit", "points", "Who’s In?"]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
            />

            {
                tab === 1 && (
                    <Tabs tabs={["REFERRALS", "✦ FP", "TASKS"]}
                          tab={subTab}
                          onClick={(_tab) => setSubTab(_tab)}
                          className={style.tabsWrapper}
                    />
                )
            }


            <div className={clsx({
                [style.content]: true,
                [style.content_verticalPadding]: tab === 1 && subTab === 0,
                [style.content_topPadding]: (tab === 1 && subTab === 1) || (tab === 2),
            })}>

                <div className={style.title}>
                    {svgIcons.logo_full}
                </div>

                {
                    tab === 0 && (
                        <>
                            <Timer/>
                            <p className={style.label}>
                                you’ve DEPOSITED
                            </p>
                            <div className={style.count}>
                                {svgIcons.solana}
                                <p>
                                    100<span>/$3,500</span>
                                </p>

                            </div>
                        </>
                    )
                }

                { tab === 1 && subTab === 0 && <Referral/> }
                { tab === 1 && subTab === 1 && <FP/> }
                { tab === 1 && subTab === 2 && <Tasks/> }

                {
                    tab === 2 && (
                        <>
                            <div className={style.preTopUsers}>
                                <p>2000 are already here</p>
                            </div>
                            <TopUsers users={users}
                                      className={style.topUsers}
                            />
                        </>
                    )
                }



                {/*<SocialLinks/>*/}
            </div>


        </div>
    )
}