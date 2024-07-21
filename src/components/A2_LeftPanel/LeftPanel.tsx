import style from "./LeftPanel.module.scss"
import {svgIcons} from "../../assets/svgIcons";

export const LeftPanel = () => {
    return (
        <div className={style.leftPanel}>

            <div className={style.socialLinks}>
                {
                    [
                        {
                            icon: svgIcons.telegram,
                            href: "#",
                        },
                        {
                            icon: svgIcons.x,
                            href: "#",
                        },
                    ].map(({icon, href}, key) => (
                        <a key={key}
                           href={href}
                           target="_blank"
                           rel="nofollow noopener noreferrer"
                           className={style.link}
                        >
                            {icon}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}