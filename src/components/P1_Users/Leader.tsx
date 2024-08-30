import style from "./Leader.module.scss";
import React, {useEffect, useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {Referral} from "./Referral/Referral";
import {Tabs} from "../_common/Tabs/Tabs";
import {users} from "../_common/TopUsers/data";
import {TopUsers} from "../_common/TopUsers/TopUsers";
import {FP} from "./FP/FP";

export const Leader = () => {
    const [tab, setTab] = useState(0);
    const [subTab, setSubTab] = useState(0);

    useEffect(() => {
        setSubTab(0)
    }, [tab]);


    return (
        <div className={style.leader}>

            <Tabs tabs={["Points", "Who’s in?"]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
            />

            {
                tab === 0 && (
                    <Tabs tabs={["REFERRALS", "✦ FP", "TASKS"]}
                          tab={subTab}
                          onClick={(_tab) => setSubTab(_tab)}
                          className={style.tabsWrapper}
                    />
                )
            }

            <div className={clsx({
                [style.content]: true,
                [style.content_paddingVertical]: tab === 0 && subTab === 0,
                [style.content_paddingTop]: tab === 0 && subTab === 1,

            })}>

                <div className={style.title}>
                    {svgIcons.logo_full}
                </div>

                {tab === 0 && subTab === 0 && <Referral/>}
                {tab === 0 && subTab === 1 && <FP/>}
                {tab === 0 && subTab === 2 && <Tasks/>}

                {tab === 1 && (
                    <>
                        <div className={style.preTopUsers}>
                            <p>2000 are already here</p>
                        </div>
                        <TopUsers users={users}
                                  className={style.topUsers}
                        />
                    </>
                )}

                {/*<SocialLinks/>*/}
            </div>


        </div>
    )
}