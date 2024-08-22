import {clsx} from "clsx";
import style from "./Tabs.module.scss";
import {FC} from "react";

interface ITabs {
    tabs: string[]
    tab: number
    onClick: (tab: number) => void
}

export const Tabs: FC<ITabs> = ({
                                    tabs,
                                    tab,
                                    onClick
                                }) => {
    return (
        <div className={style.tabs}
             style={{
                 gridTemplateColumns: `repeat(${tabs.length}, 1fr)`
             }}
        >
            {
                tabs.map((label, key) => (
                    <button key={key}
                            onClick={() => onClick(key)}
                            className={clsx({
                                [style.btn]: true,
                                [style.btn_selected]: key === tab,
                            })}
                    >
                        <span>{label}</span>
                    </button>
                ))
            }
        </div>
    )
}