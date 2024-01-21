import clsx from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { useFormStatus } from "react-dom"
import styles from "./Button.module.scss"

type Button = ButtonHTMLAttributes<HTMLButtonElement>

interface Props {
    formAction?: Button["formAction"]
    children?: ReactNode
    onClick?: Button["onClick"]
    className?: Button["className"]
    type?: Button["type"]
    role?: Button["role"]
    disabled?: Button["disabled"]
    variant?: "primary" | "secondary"
}

export default function Button({
    children,
    onClick,
    formAction,
    className,
    type = "submit",
    variant = "primary",
    role,
    disabled,
}: Props) {
    return (
        <button
            formAction={formAction}
            onClick={onClick}
            className={clsx(styles.button, className, styles[variant])}
            type={type}
            role={role}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export function FormButton(props: Props) {
    const { pending } = useFormStatus()
    return <Button {...props} disabled={pending} />
}
