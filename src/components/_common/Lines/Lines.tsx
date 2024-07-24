import style from "./Lines.module.scss"
import {FC, Fragment} from "react";
import {RunningStringItem} from "../RunningStringItem/RunningStringItem";
import {getRandomNumber} from "../../../helpers";
import {clsx} from "clsx";

interface ILines {
    count?: number
    className?: string
}

export const Lines: FC<ILines> = ({
                                      count = 13,
                                      className
                                  }) => {
    return (
        <div className={clsx(style.lines, Boolean(className) && className)}>
            <div className={style.wrapper}
                style={{
                    width: `${count * 80}px`,
                    height: `${count * 80}px`,
                }}
            >
                {
                    Array
                        .from({length: count + 1}, (v, k) => k)
                        .map((v, key) => (
                            <Fragment key={key}>
                                <div className={style.vertical}
                                     style={{
                                         left: `${key * 80}px`
                                     }}
                                />
                                <div className={style.horizontal}
                                     style={{
                                         top: `${key * 80}px`
                                     }}
                                />
                            </Fragment>
                        ))
                }

                <>
                    {
                        [0, 1].map((key) => (
                            <div className={style.animatedLinesWrapper}
                                 key={key}
                                 style={{
                                     transform: `rotate(${key * 90}deg)`
                                 }}
                            >
                                {
                                    Array
                                        .from({length: count + 1}, (v, k) => k)
                                        .map((v, key) => (
                                            <div key={key}
                                                 className={style.horizontalLineWrapper}
                                                 style={{
                                                     top: `${key * 80}px`
                                                 }}
                                            >
                                                <RunningStringItem item={
                                                    <div className={style.itemHorizontal}>
                                                        <div className={style.gradient}
                                                             style={{
                                                                 width: `${getRandomNumber(40, 160)}px`
                                                             }}
                                                        />
                                                    </div>
                                                }
                                                                   count={1}
                                                                   duration={getRandomNumber(8, 16)}
                                                                   forward={Math.random() >= 0.5}
                                                />
                                            </div>
                                        ))
                                }
                            </div>
                        ))
                    }
                </>

                <div className={style.mask}/>
            </div>
        </div>
    )
}