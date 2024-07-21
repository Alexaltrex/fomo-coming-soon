import {svgIcons} from "../../../assets/svgIcons";
import style from "./HaveInviteCode.module.scss";

export const HaveInviteCode = () => {
    return (
        <div className={style.haveInviteCode}>
            <div className={style.left}>
                {svgIcons.copy}
                <span>have invite Code</span>
            </div>
            <div className={style.right}>
                <span>Z7Xy9Qp4MvB2Lk6H</span>
            </div>
        </div>
    )
}