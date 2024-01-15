import clsx from "clsx"
import { InputHTMLAttributes } from "react"
import styles from "./TextField.module.scss"

type Input = InputHTMLAttributes<HTMLInputElement>

interface Props {
    className?: Input["className"]
    value?: Input["value"]
    onChange?: Input["onChange"]
    name?: Input["name"]
    type?: Input["type"]
    id?: Input["id"]
    placeholder?: Input["placeholder"]
}

export default function TextField({
    className,
    value,
    onChange,
    name,
    type,
    id,
    placeholder,
}: Props) {
    return (
        <input
            className={clsx(styles.input, className)}
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            id={id}
            placeholder={placeholder}
        />
    )
}
