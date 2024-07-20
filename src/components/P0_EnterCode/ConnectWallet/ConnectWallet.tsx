import style from "./ConnectWallet.module.scss";
import {svgIcons} from "../../../assets/svgIcons";
import {FC, useState} from "react";
import {icons} from "./icons";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useStore} from "../../../store/rootStore";

interface IConnectWallet {
    onClose: () => void
}

export const ConnectWallet: FC<IConnectWallet> = observer(({onClose}) => {
    const {
        appStore: {
            setAddress
        }
    } = useStore();


    const [showWalletList, setShowWalletList] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(-1);

    return (
        <div className={style.connectWallet}>
            {svgIcons.logo_full}

            <div className={style.card}>

                <div className={style.cardHeader}>
                    {svgIcons.wallet}
                    <span>Connect wallet</span>
                    <button onClick={() => onClose()}>
                        {svgIcons.close}
                    </button>
                </div>

                <div className={style.description}>
                    {
                        selectedWallet === -1 ? (
                            <p>
                                To proceed, you have to connect your wallet first. Thank you for your cooperation
                            </p>
                        ) : (
                            <>
                                <div className={style.icon}>
                                    {/*@ts-ignore*/}
                                    {Object.values(icons)[selectedWallet]}
                                </div>
                                <p>
                                    Sign message to verify your account! To finish connecting you must sign a
                                    message in your wallet to verify that you are the owner
                                </p>
                            </>

                        )
                    }

                </div>

                {
                    !showWalletList ? (
                        <button className={style.connectBtn}
                                onClick={() => setShowWalletList(true)}
                        >
                            <span>Connect wallet</span>
                        </button>
                    ) : (
                        <>
                            {
                                selectedWallet === -1 ? (
                                    <div className={style.walletList}>
                                        {
                                            [
                                                {
                                                    icon: icons.metamask,
                                                    label: "Metamask",
                                                    detected: true,
                                                },
                                                {
                                                    icon: icons.phantom,
                                                    label: "Phantom",
                                                    detected: true,
                                                },
                                                {
                                                    icon: icons.exodus,
                                                    label: "Exodus",
                                                    detected: false,
                                                },
                                                {
                                                    icon: icons.binance,
                                                    label: "Binance Wallet",
                                                    detected: false,
                                                },
                                                {
                                                    icon: icons.coinbase,
                                                    label: "Coinbase",
                                                    detected: false,
                                                },
                                                {
                                                    icon: icons.solflare,
                                                    label: "Solflare",
                                                    detected: false,
                                                },

                                            ].map(({icon, label, detected}, key) => (
                                                <button key={key}
                                                        onClick={() => setSelectedWallet(key)}
                                                >
                                                    <div className={style.iconWrapper}>
                                                        {icon}
                                                    </div>
                                                    <p className={style.label}>
                                                        {label}
                                                    </p>
                                                    {
                                                        detected && (
                                                            <p className={style.detected}>
                                                                Detected
                                                            </p>
                                                        )
                                                    }
                                                </button>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <Link className={style.signButton}
                                          to="/user"
                                          onClick={() => {
                                              setAddress("0x1ABC7154748D1CE5144478CDEB574AE244B939B5");
                                          }}
                                    >
                                        {svgIcons.circleNotch}
                                    </Link>
                                )
                            }

                        </>

                    )

                }
            </div>
        </div>
    )
})