import style from "./TopUsers.module.scss"
import {FC} from "react";
import {clsx} from "clsx";
import {svgIcons} from "../../../assets/svgIcons";
import {IUser} from "./data";

interface ITopUsers {
    users: IUser[]
    className?: string
}

export const TopUsers: FC<ITopUsers> = ({
                                            users,
                                            className,
                                        }) => {
    return (
        <div className={clsx(
            style.topUsers,
            Boolean(className) && className
        )}>
            <div className={style.title}>
                {svgIcons.users}
                <p>Top 50 users by twitter count</p>
            </div>
            <div className={style.list}>
                {
                    users.map(({src, name, value}, key) => (
                        <div key={key}
                             className={style.item}
                        >
                            <div className={style.left}>
                                <img src={src} alt=""/>
                                <p>{name}</p>
                                {svgIcons.x_contained}
                            </div>
                            <div className={style.right}>
                                {svgIcons.x_outlined}
                                <p>{value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}