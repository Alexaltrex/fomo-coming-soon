import style from "./Timer.module.scss"
import {FormikErrors, FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";
import {svgIcons} from "../../../assets/svgIcons";
import {useState} from "react";
import {ConnectWallet} from "../../P0_EnterCode/ConnectWallet/ConnectWallet";

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

    return (
        <div className={style.timer}>

            <div className={style.timerValues}>
                {
                    [
                        {
                            value: days,
                            label: "days"
                        },
                        {
                            value: hours,
                            label: "hours"
                        },
                        {
                            value: mins,
                            label: "mins"
                        },
                        {
                            value: secs,
                            label: "secs"
                        },
                    ].map(({value, label}, key) => (
                        <div key={key}
                             className={style.timerItem}
                        >
                            <div className={style.values}>
                                <div>
                                    <p>{value[0]}</p>
                                </div>
                                <div>
                                    <p>{value[1]}</p>
                                </div>
                            </div>
                            <p className={style.label}>
                                {label}
                            </p>
                        </div>
                    ))
                }
            </div>

            <p className={style.label}>
                Total staked
            </p>

            <p className={style.totalStakedValue}>
                {totalStaked}
            </p>

            <p className={style.solValue}>
                ~1,000.00 SOL
            </p>

            <p className={style.formLabel}>
                Stake your Solana until launch
            </p>

            <form onSubmit={formik.handleSubmit}
                  className={style.form}
            >
                <div className={style.inputWrapper}>
                    <input type="number"
                           //placeholder="Invite code"
                           {...formik.getFieldProps('value')}

                    />
                    <p>SOL</p>
                </div>

                <button type="submit"
                        className={style.stakeBtn}
                >
                    <span>STAKE</span>
                </button>

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