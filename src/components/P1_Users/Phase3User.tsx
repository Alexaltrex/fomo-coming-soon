import style from "../P0_EnterCode/EnterCode.module.scss";
import {svgIcons} from "../../assets/svgIcons";
import {Timer} from "./Timer/Timer";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";
import {HaveInviteCode} from "./HaveInviteCode/HaveInviteCode";
import {clsx} from "clsx";

export const Phase3User = () => {
    return (
        <div className={clsx(style.enterCode, style.enterCode_paddingBottom)}>

            <div className={style.title}>
                {svgIcons.logo_full}
            </div>

            <Timer/>

            <SocialLinks/>

            <HaveInviteCode/>


        </div>
    )
}