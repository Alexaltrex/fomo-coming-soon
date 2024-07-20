import {FormikErrors, FormikHelpers} from "formik/dist/types";
import {useFormik} from "formik";
import style from "./InviteCodeForm.module.scss";
import {FC} from "react";
interface IValues {
    inviteCode: string
}

interface IInviteCodeForm {
    onClick: () => void
}

export const InviteCodeForm: FC<IInviteCodeForm> = ({onClick}) => {

    const initialValues: IValues = {
        inviteCode: "",
    }
    const validate = (values: IValues): FormikErrors<IValues> => {
        const errors = {} as FormikErrors<IValues>
        if (!values.inviteCode) {
            errors.inviteCode = "Required"
        }
        return errors
    }
    const onSubmit = async (values: IValues, formikHelpers: FormikHelpers<IValues>) => {
        try {
            console.log(values);
            onClick();
        } catch (e: any) {
            console.log(e.message)
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit: onSubmit,
        validate: validate
    })

    return (
        <form onSubmit={formik.handleSubmit}
              className={style.inviteCodeForm}
        >
            <div className={style.inputWrapper}>
                <input type="text"
                       placeholder="Invite code"
                       {...formik.getFieldProps('inviteCode')}

                />
            </div>

            <button type="submit"
                    className={style.continueBtn}
            >
                <span>Continue</span>
            </button>

        </form>
    )
}