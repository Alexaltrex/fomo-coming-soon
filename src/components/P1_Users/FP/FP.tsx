import style from "./FP.module.scss"
import React from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {leaders} from "./data";
import {ButtonCustom, ButtonEnum} from "../../_common/ButtonCustom/ButtonCustom";

export const FP = () => {

    return (
        <div className={style.fp}>

            <div className={style.preTopUsers}>
                <p>2000 are already here</p>
            </div>

            <div className={style.table}>
                <div className={style.tableTop}>
                    <p>✦ FP</p>
                </div>
                <div className={style.body}>
                    {
                        [
                            {
                                label: "REferrals",
                                value: "100 PTS",
                            },
                            {
                                label: "Solana deposit",
                                value: "200 PTS",
                            },
                            {
                                label: "other",
                                value: "200 PTS",
                            },
                            {
                                label: "total",
                                value: "2500 PTS",
                            },
                        ].map(({label, value}, key) => (
                            <div key={key}
                                 className={style.row}
                            >
                                <p>{label}</p>
                                <p>{value}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={clsx(style.table, style.table_second)}>
                <div className={style.tableTop}>
                    {svgIcons.users}<p>Leaderboard</p>
                </div>
                <div className={style.tableHeader}>
                    {
                        ["Leaders", "PTS", "Referred"].map((label, key) => (
                            <p key={key}>{label}</p>
                        ))
                    }
                </div>
                <div className={style.body2}>
                    {
                        leaders.map(({
                                         src,
                                         address,
                                         twitter,
                                         pts,
                                         referred
                                     }, key) => (
                            <div key={key}
                                 className={style.row2}
                            >
                                <div className={style.user}>
                                    <img src={src} alt=""/>
                                    <p>{address}</p>
                                    <a href={twitter}
                                       target="_blank"
                                       rel="nofollow noopener noreferrer"
                                    >
                                        {svgIcons.x_contained}
                                    </a>
                                </div>
                                <div className={style.pts}>
                                    {pts}
                                </div>
                                <div className={style.referred}>
                                    {referred}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <ButtonCustom label="MY POINTS"
                          kind={ButtonEnum.contained}
                          className={style.myPointsButton}
            />


        </div>
    )
}