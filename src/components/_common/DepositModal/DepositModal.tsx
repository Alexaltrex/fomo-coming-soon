import style from "./DepositModal.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {FC} from "react";
import {ButtonCustom, ButtonEnum} from "../ButtonCustom/ButtonCustom";

interface IDepositModal {
    depositModal: boolean
    onClose: () => void
    setSigned: () => void
}

export const DepositModal: FC<IDepositModal> = ({
                                                    depositModal,
                                                    onClose,
                                                    setSigned
                                                }) => {

    const onSign = () => {
        onClose()
        setSigned()
    }


    return (
        <>
            {
                depositModal && (
                    <div className={style.depositModal}>
                        <div className={style.card}>

                            <div className={style.cardHeader}>
                                <div className={style.cardHeaderLeft}>
                                    {svgIcons.solana}
                                    <span>Deposit 0.1 Sol for Bot Protection</span>
                                </div>
                                <button className={style.closeBtn}
                                        onClick={() => onClose()}
                                >
                                    {svgIcons.close}
                                </button>
                            </div>

                            <div className={style.description}>
                                <div className={style.iconWrapper}>
                                    {svgIcons.solana}
                                </div>
                                <p>
                                    Sign message to verify your account! To finish connecting you must sign a message in
                                    your wallet to verify that you are the owner
                                </p>
                            </div>

                            <ButtonCustom label="Sign transaction"
                                          kind={ButtonEnum.contained}
                                          className={style.signBtn}
                                          onClick={onSign}
                            />


                        </div>
                    </div>
                )
            }
        </>

    )
}