import {svgIcons} from "../../../assets/svgIcons";
import {Link} from "react-router-dom";
import style from "./Logo.module.scss";
import {useState} from "react";
import {clsx} from "clsx";
export const Logo = () => {
    const [mouseDown, setMouseDown] = useState(false);
    const onMouseDown = () => setMouseDown(true);
    const onMouseUp = () => setMouseDown(false);

    return (
        <Link to="/"
              className={clsx({
                  [style.logo]: true,
                  [style.logo_mouseDown]: mouseDown,
              })}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
        >
            {svgIcons.logo_short}
        </Link>
    )
}