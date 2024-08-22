import style from "./Phase3User.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {Timer} from "./Timer/Timer";
import React from "react";
import {users} from "../_common/TopUsers/data";
import {TopUsers} from "../_common/TopUsers/TopUsers";

export const Phase3User = () => {
    return (
        <div className={style.phase3User}>

            <div className={style.title}>
                {svgIcons.logo_full}
            </div>

            <Timer/>

            <div className={style.texts}>
                <p>Audited BY</p>
                {svgIcons.halborn}
                <p>2000 are already here </p>
                <p>Who's in?</p>
            </div>

            <TopUsers users={users}
                      className={style.topUsers}
            />


            {/*<SocialLinks/>*/}

            {/*<HaveInviteCode/>*/}


        </div>
    )
}