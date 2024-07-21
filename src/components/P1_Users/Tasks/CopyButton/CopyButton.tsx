import {FC, useState} from "react";
import style from "./CopyButton.module.scss"
import {svgIcons} from "../../../../assets/svgIcons";

interface ICopyButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

}

export const CopyButton: FC<ICopyButton> = ({
                                                ...props
                                            }) => {
    const [copied, setCopied] = useState(false)

    const onCopy = () => {

        if (!copied) {
            if (props.onClick) {
                // @ts-ignore
                props.onClick();
            }

            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 3000)
        }
    }

    // const onMouseDown = () => {
    //
    // }
    //
    // const onMouseUp = () => {
    //
    // }

    return (
        <button className={style.copyButton}
                {...props}
                // onMouseDown={onMouseDown}
                // onMouseUp={onMouseUp}
                onClick={onCopy}

        >
            {copied ? svgIcons.check : svgIcons.copy}
        </button>
    )
}