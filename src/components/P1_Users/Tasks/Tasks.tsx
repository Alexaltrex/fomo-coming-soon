import style from "./Tasks.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";
import {DepositModal} from "../../_common/DepositModal/DepositModal";
import {useState} from "react";

export const Tasks = () => {

    const [depositModal, setDepositModal] = useState(false);
    const [signed, setSigned] = useState(false);

    return (
        <div className={style.tasks}>

            <DepositModal depositModal={depositModal}
                          setSigned={() => setSigned(true)}
                          onClose={() => setDepositModal(false)}
            />

            <div className={style.tasksHeader}>
                <p>You’re on the list!</p>
            </div>

            <div className={style.list}>
                {
                    [
                        {
                            icon: svgIcons.wallet,
                            label: "Connect Wallet",
                            labelDone: "Wallet connected",
                            done: true,
                            value: "50",
                        },
                        {
                            icon: svgIcons.telegram,
                            label: "Connect Telegram",
                            labelDone: "Telegram connected",
                            done: true,
                            value: "50",
                        },
                        {
                            icon: svgIcons.users,
                            label: "First 10 users",
                            labelDone: "10 users invited",
                            done: false,
                            value: "50",
                        },
                        {
                            icon: svgIcons.x,
                            label: "Connect Twitter",
                            labelDone: "Twitter connected",
                            done: false,
                            value: "50",
                        },
                        {
                            icon: svgIcons.x,
                            label: "Follow Twiiter",
                            labelDone: "Twitter followed",
                            done: false,
                            value: "50",
                        },
                        {
                            icon: svgIcons.x,
                            label: "Tweet",
                            labelDone: "Tweeted",
                            done: false,
                            value: "50",
                        },
                    ].map(({
                                                   icon,
                                                   label, labelDone,
                                                   done,
                        value
                                               }, key) => (
                        <div key={key}
                             className={style.listItem}
                        >
                            <div className={clsx({
                                [style.icon]: true,
                                [style.icon_done]: done,
                            })}>
                                {done ? svgIcons.check : icon}
                            </div>

                            <p className={clsx({
                                [style.label]: true,
                                [style.label_done]: done,
                            })}>
                                {done ? labelDone : label}
                            </p>

                            <div className={clsx({
                                [style.value]: true,
                                [style.value_done]: done,
                            })}>
                               <p>✦ {value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <button className={clsx({
                [style.deposite]: true,
                [style.deposite_signed]: signed,
            })}
                    onClick={() => {
                        !signed && setDepositModal(true)
                    }}
            >
                <div className={style.icon}>
                    {signed ? svgIcons.check : svgIcons.solana}
                </div>
                <p className={style.label}>Deposit 0.1 Sol for Early Access</p>
                <div className={style.value}>
                    <p>✦ 1,000</p>
                </div>
            </button>

        </div>
    )
}