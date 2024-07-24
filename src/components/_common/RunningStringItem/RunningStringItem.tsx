import {FC, Fragment, ReactNode, useRef} from "react";
import style from "./RunningStringItem.module.scss"
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export enum DirectionEnum {
    horizontal = "horizontal",
    vertical = "vertical"
}

interface IRunningStringItem {
    direction?: DirectionEnum,
    forward?: boolean
    duration?: number
    item: ReactNode
    count?: number
}

export const RunningStringItem: FC<IRunningStringItem> = ({
                                                              direction = DirectionEnum.horizontal,
                                                              forward = true,
                                                              duration = 10,
                                                              item,
                                                              count = 10
                                                          }) => {
    const appRef = useRef<HTMLDivElement>(null!);

    useGSAP(() => {

        if (direction === DirectionEnum.horizontal && forward) {
            gsap.timeline({repeat: -1})
                .to(".firstPart", {xPercent: 100, duration, ease: "none"})
                .set(".firstPart", {xPercent: -100})
                .to(".firstPart", {xPercent: 0, duration, ease: "none"})

            gsap.timeline({repeat: -1})
                .set(".secondPart", {xPercent: -100})
                .to(".secondPart", {xPercent: 100, duration : 2 * duration, ease: "none"})
                .set(".secondPart", {xPercent: -100})
        }

        if (direction === DirectionEnum.horizontal && !forward) {
            gsap.timeline({repeat: -1})
                .to(".firstPart", {xPercent: -100, duration, ease: "none"})
                .set(".firstPart", {xPercent: 100})
                .to(".firstPart", {xPercent: 0, duration, ease: "none"})

            gsap.timeline({repeat: -1})
                .set(".secondPart", {xPercent: 100})
                .to(".secondPart", {xPercent: -100, duration : 2 * duration, ease: "none"})
                .set(".secondPart", {xPercent: 100})
        }

        if (direction === DirectionEnum.vertical && forward) {
            gsap.timeline({repeat: -1})
                .to(".firstPart", {yPercent: -100, duration, ease: "none"})
                .set(".firstPart", {yPercent: 100})
                .to(".firstPart", {yPercent: 0, duration, ease: "none"})

            gsap.timeline({repeat: -1})
                .set(".secondPart", {yPercent: 100})
                .to(".secondPart", {yPercent: -100, duration : 2 * duration, ease: "none"})
                .set(".secondPart", {yPercent: 100})
        }

        if (direction === DirectionEnum.vertical && !forward) {
            gsap.timeline({repeat: -1})
                .to(".firstPart", {yPercent: 100, duration, ease: "none"})
                .set(".firstPart", {yPercent: -100})
                .to(".firstPart", {yPercent: 0, duration, ease: "none"})

            gsap.timeline({repeat: -1})
                .set(".secondPart", {yPercent: -100})
                .to(".secondPart", {yPercent: 100, duration : 2 * duration, ease: "none"})
                .set(".secondPart", {yPercent: -100})
        }

    }, {scope: appRef})

    return (
        <div className={style.runningStringItem}
             ref={appRef}
        >
            <div className={clsx({
                [style.part]: true,
                [style.part_vertical]: direction === DirectionEnum.vertical,
            }, "firstPart")}>
                {
                    Array
                        .from({length: count}, (v, k) => k)
                        .map(key => (
                            <Fragment key={key}>
                                {item}
                            </Fragment>

                        ))
                }
            </div>

            <div className={clsx({
                [style.part]: true,
                [style.part_vertical]: direction === DirectionEnum.vertical,
            }, "secondPart")}>
                {
                    Array
                        .from({length: count}, (v, k) => k)
                        .map(key => (
                            <Fragment key={key}>
                                {item}
                            </Fragment>

                        ))
                }
            </div>
        </div>
    )
}