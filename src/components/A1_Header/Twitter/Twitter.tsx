import style from "./Twitter.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useRef, useState} from "react";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";

export const Twitter = () => {
    const twitter = "@KeanuReev";

    const [showMenu, setShowMenu] = useState(false);

    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLButtonElement>(null!);

    useOutsideButNotOnTargetClick(ref, targetRef, () => setShowMenu(false))

    return (
        <div className={style.twitter}
             ref={ref}
        >
            <button  className={style.btn}
                     onClick={() => setShowMenu(!showMenu)}
                     ref={targetRef}
            >
                {svgIcons.x}
                <p>{twitter}</p>
            </button>

            {
                showMenu && (
                    <div className={style.menu}>
                        {
                            [
                                {
                                    icon: svgIcons.logout,
                                    label: "Disconnect",
                                    onClick: () => {}
                                },
                            ].map(({icon, label, onClick}, key) => (
                                <button key={key}
                                        onClick={() => onClick()}
                                >
                                    {icon}
                                    <span>{label}</span>
                                </button>
                            ))
                        }
                    </div>
                )

            }
        </div>
    )
}