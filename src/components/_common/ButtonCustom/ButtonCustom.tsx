import style from "./ButtonCustom.module.scss"
import {FC, useState} from "react";
import {clsx} from "clsx";

export enum ButtonEnum {
    outlined = "outlined",
    contained = "contained"

}

interface IButtonOutlined extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    label: string
    kind?: ButtonEnum
    className?: string
}

export const ButtonCustom: FC<IButtonOutlined> = ({
                                                      label,
                                                      kind = ButtonEnum.outlined,
                                                      className,
                                                      ...props
                                                  }) => {
    const [mouseDown, setMouseDown] = useState(false);
    const onMouseDown = () => setMouseDown(true);
    const onMouseUp = () => setMouseDown(false);

    return (
        <button className={clsx(
            {
                [style.buttonCustom]: true,
                [style.buttonCustom_contained]: kind === ButtonEnum.contained,
                [style.buttonCustom_mouseDown]: mouseDown,

            },
            Boolean(className) && className
        )}
                {...props}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
        >
            <span>{label}</span>
        </button>
    )
}