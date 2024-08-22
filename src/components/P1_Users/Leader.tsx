import style from "./Leader.module.scss";
import React, {useState} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {Referral} from "./Referral/Referral";
import {Tabs} from "../_common/Tabs/Tabs";
import {users} from "../_common/TopUsers/data";
import {TopUsers} from "../_common/TopUsers/TopUsers";

export const Leader = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className={style.leader}>

            <Tabs tabs={["Tasks", "referral", "Who’s in?"]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
            />

            <div className={clsx({
                [style.content]: true,
                [style.content_tab1]: tab === 1,
                [style.content_tab2]: tab === 2,

            })}>

                <div className={style.title}>
                    {svgIcons.logo_full}
                </div>

                {tab === 0 && <Tasks/>}

                {tab === 1 && <Referral/>}

                {tab === 2 && (
                    <>
                        <div className={style.preTopUsers}>
                            <p>2000 are already here</p>
                        </div>
                        <TopUsers users={users}/>
                    </>
                )}

                {/*<SocialLinks/>*/}
            </div>


        </div>
    )
}