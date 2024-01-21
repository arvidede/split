import clsx from "clsx"
import { InputHTMLAttributes } from "react"
import styles from "./TextField.module.scss"

type Input = InputHTMLAttributes<HTMLInputElement>

interface Props {
    className?: Input["className"]
    value?: Input["value"]
    defaultValue?: Input["defaultValue"]
    onChange?: Input["onChange"]
    name?: Input["name"]
    type?: Input["type"]
    id?: Input["id"]
    placeholder?: Input["placeholder"]
    required?: Input["required"]
    loading?: boolean
}

export default function TextField({
    className,
    value,
    defaultValue,
    onChange,
    name,
    type,
    id,
    placeholder,
    required,
    loading,
}: Props) {
    return (
        <div className={clsx(styles.container, loading && styles.loading)}>
            <input
                className={clsx(styles.input, className)}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                name={name}
                type={type}
                id={id}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}
