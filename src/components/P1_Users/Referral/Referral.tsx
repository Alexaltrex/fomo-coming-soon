import style from "./Referral.module.scss"
import {svgIcons} from "../../../assets/svgIcons";
import schemeMobile from "../../../assets/png/scheme_mobile.png";
import schemeDesktop from "../../../assets/png/scheme_desktop.png";
import {useEffect, useState} from "react";
import {CopyButton} from "../Tasks/CopyButton/CopyButton";
export const Referral = () => {

    const levels = [35, 3.5, 3, 2, 1]

   const onCopy = () => {

   }

    return (
        <div className={style.referralComponent}>

            <div className={style.section}>

                <div className={style.header}>
                    <p>Code</p>
                </div>

                <div className={style.description}>
                    <p>
                        Earn money during our launch campaign with our referral system. You'll receive extra rewards for
                        each member you refer.
                    </p>
                </div>

                <div className={style.levels}>
                    {
                        levels.map((value, key) => (
                            <div key={key}
                                 className={style.level}
                            >
                                <p>{`LVL ${key + 1}`}</p>
                                <p>{`${value}%`}</p>
                                <div className={style.dots}>
                                    {
                                        Array.from({length: key + 1}, (v, k) => k)
                                            .map(key => (
                                                <div key={key}/>
                                            ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={style.codeSection}>
                    <div className={style.top}>

                        <div className={style.code}>
                            {svgIcons.code}
                            <p>Code</p>
                        </div>

                        <p className={style.codeValue}>
                            Z7XMLk6yMLk6H
                        </p>

                        <CopyButton
                            //onClick={onCopy}
                        />

                    </div>
                    <button className={style.generateBtn}>
                        <span>GENERATE NEW</span>
                    </button>
                </div>

                <p className={style.useCount}>
                    People used your code: <span>5</span>
                </p>
            </div>

            <div className={style.section}>
                <div className={style.header}>
                    <p>referral</p>
                </div>
                <div className={style.schemeWrapper}>
                    <img src={schemeMobile} alt="" className={style.schemeMobile}/>
                    <img src={schemeDesktop} alt="" className={style.schemeDesktop}/>
                </div>
            </div>

            <p className={style.bottomText}>
                invited friends <span>save 10% on their contributions</span>
            </p>


        </div>
    )
}