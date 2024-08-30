import style from "./Users.module.scss";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {useState} from "react";
import {TopUsers} from "../_common/TopUsers/TopUsers";
import {users} from "../_common/TopUsers/data";
import {Tabs} from "../_common/Tabs/Tabs";

export const User = () => {
    const [tab, setTab] = useState(0)

    return (
        <div className={style.users}>

            <Tabs tabs={["Tasks", "Who’s in?", "POINTS"]}
                  tab={tab}
                  onClick={(tab) => setTab(tab)}
            />


            <div className={style.content}>

                <div className={clsx({
                    [style.title]: true,
                    [style.title_marginTop]: tab === 1,
                })}>
                    {svgIcons.logo_full}
                </div>

                {
                    tab === 0 ? (
                        <Tasks/>
                    ) : (
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