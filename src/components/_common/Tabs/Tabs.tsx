import {clsx} from "clsx";
import style from "./Tabs.module.scss";
import {FC, useEffect, useState} from "react";

interface ITabs {
    tabs: string[]
    tab: number
    onClick: (tab: number) => void
    className?: string
}

export const Tabs: FC<ITabs> = ({
                                    tabs,
                                    tab,
                                    onClick,
                                    className,
                                }) => {
    const [_tab, setTab] = useState(0)
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(1);

    useEffect(() => {
        if (tab > _tab) {
            setRight(tab + 1);
            setTimeout(() => setLeft(tab), 200)
        } else {
            setLeft(tab);
            setTimeout(() => setRight(tab + 1), 200)
        }

        // setLeft(tab)
        // setRight(tab + 1);
        setTab(tab)
    }, [tab]);

    return (
        <div className={clsx(style.tabs, Boolean(className) && className)}
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
            <div className={style.line}
                 style={{
                     left: `${left * 100 / tabs.length}%`,
                     right: `${(tabs.length - right) * 100 / tabs.length}%`
                 }}
            />


        </div>
    )
}