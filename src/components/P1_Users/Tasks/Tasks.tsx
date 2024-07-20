import style from "./Tasks.module.scss";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";
import {svgIcons} from "../../../assets/svgIcons";
import {clsx} from "clsx";

export const Tasks = observer(() => {
    const {
        appStore: {
            tasks, setTasks
        }
    } = useStore()


    return (
        <div className={style.tasks}>

            <div className={style.tasksHeader}>
                <p>You’re on the list!</p>
            </div>

            <div className={style.list}>
                {
                    [
                        {
                            icon: svgIcons.wallet,
                            label: "Connect Wallet",
                            labelDone: "Wallet connected"
                        },
                        {
                            icon: svgIcons.telegram,
                            label: "Connect Telegram",
                            labelDone: "Telegram connected"
                        },
                        {
                            icon: svgIcons.users,
                            label: "First 10 users",
                            labelDone: "10 users invited"
                        },
                        {
                            icon: svgIcons.x,
                            label: "Connect Twitter",
                            labelDone: "Twitter connected"
                        },
                        {
                            icon: svgIcons.x,
                            label: "Follow Twiiter",
                            labelDone: "Twitter followed"
                        },
                        {
                            icon: svgIcons.x,
                            label: "Tweet",
                            labelDone: "Tweeted"
                        },
                    ].map(({icon, label, labelDone}, key) => (
                        <button key={key}
                                className={style.listItem}
                                onClick={() => setTasks(tasks.map((value, index) => index === key ? true : value))}
                        >
                            <div className={clsx({
                                [style.icon]: true,
                                [style.icon_done]: tasks[key],
                            })}>
                                {tasks[key] ? svgIcons.check : icon}
                            </div>

                            <p className={clsx({
                                [style.label]: true,
                                [style.label_done]: tasks[key],
                            })}>
                                {tasks[key] ? labelDone : label}
                            </p>
                        </button>
                    ))
                }
            </div>

        </div>
    )
})