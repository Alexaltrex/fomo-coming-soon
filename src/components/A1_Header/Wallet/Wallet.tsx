import style from "./Wallet.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import {useRef, useState} from "react";
import {useOutsideButNotOnTargetClick} from "../../../hooks/useOutsideClick";

export const Wallet = () => {
    const address = "0x0b0000000006901"
    const [showMenu, setShowMenu] = useState(false);

    const ref = useRef<HTMLDivElement>(null!);
    const targetRef = useRef<HTMLButtonElement>(null!);

    useOutsideButNotOnTargetClick(ref, targetRef, () => setShowMenu(false))

    return (
        <div className={style.wallet}
             ref={ref}
        >
            <button className={style.btn}
                    onClick={() => setShowMenu(!showMenu)}
                    ref={targetRef}
            >
                {svgIcons.wallet}
                <p>
                    {address.slice(0, 4) + "..." + address.slice(address.length - 4, address.length)}
                </p>
            </button>

            {
                showMenu && (
                    <div className={style.menu}>
                        {
                            [
                                {
                                    icon: svgIcons.copy,
                                    label: "Copy address",
                                    onClick: () => {}
                                },
                                {
                                    icon: svgIcons.wallet,
                                    label: "Change wallet",
                                    onClick: () => {}
                                },
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