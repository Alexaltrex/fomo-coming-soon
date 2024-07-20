import style from "./Leader.module.scss";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";
import {Tasks} from "./Tasks/Tasks";
import {SocialLinks} from "../_common/SocialLinks/SocialLinks";

export const User = () => {

    return (
        <div className={style.leader}>


            <div className={clsx({
                [style.content]: true,
            })}>

                <div className={style.title}>
                    {svgIcons.logo_full}
                </div>

                <Tasks/>

                <SocialLinks/>
            </div>


        </div>
    )
}