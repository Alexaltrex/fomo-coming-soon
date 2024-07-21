import {svgIcons} from "../../../assets/svgIcons";
import style from "./SocialLinks.module.scss";
import React from "react";
export const SocialLinks = () => {
    return (
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
    )
}
