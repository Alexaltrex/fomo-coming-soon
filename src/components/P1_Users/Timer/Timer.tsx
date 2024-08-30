import style from "./Timer.module.scss"
import {FormikErrors, FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";
import {svgIcons} from "../../../assets/svgIcons";
import React, {useState} from "react";
import {ConnectWallet} from "../../P0_EnterCode/ConnectWallet/ConnectWallet";
import {ButtonCustom, ButtonEnum} from "../../_common/ButtonCustom/ButtonCustom";

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import {clsx} from "clsx";

interface IValues {
    value: number
}


export const Timer = () => {
    const [connectWallet, setConnectWallet] = useState(false)

    const days = "07";
    const hours = "02";
    const mins = "24";
    const secs = "30";

    const totalStaked = "$200,355"

    const initialValues: IValues = {
        value: 0,
    }
    const validate = (values: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>
        if (!values.value) {
            errors.value = "Required"
        }
        return errors
    }
    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values);
            setConnectWallet(true);
        } catch (e: any) {
            console.log(e.message)
        } finally {
            formikHelpers.resetForm();
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit: onSubmit,
        //validate: validate
    })

    const [focus, setFocus] = useState(false)

    return (
        <div className={style.timer}>

            <div className={style.timerWrapperMobile}>
                <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
                                    labels={['Days', 'Hours', 'Mins', 'Sec']}
                                    labelStyle={{
                                        fontFamily: "Space Mono",
                                        fontSize: "12px",
                                        color: "rgba(255, 255, 255, 0.5)",
                                        textTransform: "uppercase",
                                    }}
                                    showSeparators={false}
                                    digitBlockStyle={{
                                        background: "#101011",
                                        width: "27px",
                                        height: "44px",
                                        fontFamily: "Space Mono",
                                        fontSize: "26px",
                                        color: "#FFF",
                                    }}

                >
                    <span>The countdown is complete</span>
                </FlipClockCountdown>
            </div>

            <div className={style.timerWrapperDesktop}>
                <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
                                    labels={['Days', 'Hours', 'Mins', 'Sec']}
                                    labelStyle={{
                                        fontFamily: "Space Mono",
                                        fontSize: `${1.2 * 12}px`,
                                        color: "rgba(255, 255, 255, 0.5)",
                                        textTransform: "uppercase",
                                    }}
                                    showSeparators={false}
                                    digitBlockStyle={{
                                        background: "#101011",
                                        width: `${1.2 * 40}px`,
                                        height: `${1.2 * 64}px`,
                                        fontFamily: "Space Mono",
                                        fontSize: `${1.2 * 40}px`,
                                        color: "#FFF",
                                    }}
                                    dividerStyle={{
                                        color: "#101011"
                                    }}
                >
                    <span>The countdown is complete</span>
                </FlipClockCountdown>
            </div>

            <p className={style.label}>
                Total DEPOSITED
            </p>

            <p className={style.totalStakedValue}>
                {totalStaked}
            </p>

            <p className={style.solValue}>
                ~1,000.00 SOL
            </p>

            <p className={style.formLabel}>
                Deposit your Solana until launch
            </p>

            <form onSubmit={formik.handleSubmit}
                  className={clsx({
                      [style.form]: true,
                      [style.form_focus]: focus,
                  })}
            >
                <div className={clsx({
                    [style.inputWrapper]: true,
                    [style.inputWrapper_focus]: focus,
                })}>
                    {svgIcons.solana}
                    <input type="number"
                        //placeholder="Invite code"
                           {...formik.getFieldProps('value')}
                           onFocus={() => setFocus(true)}
                           onBlur={e => {
                               formik.handleBlur(e);
                               setFocus(false)
                           }}
                    />
                    {/*<p>*/}
                    {/*   /$3,500*/}
                    {/*</p>*/}
                </div>

                <ButtonCustom label="STAKE"
                              kind={ButtonEnum.contained}
                              type="submit"
                              className={style.stakeBtn}
                />

            </form>

            {
                connectWallet && (
                    <ConnectWallet onClose={() => setConnectWallet(false)}
                                   onSign={() => setConnectWallet(false)}
                    />
                )
            }

        </div>
    )
}