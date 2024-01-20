import clsx from "clsx"
import { ReactNode, useEffect } from "react"
import styles from "./FadeIn.module.scss"

export default function FadeIn({
    children,
    visible,
    className,
    delay = 0,
}: {
    children?: ReactNode
    visible?: boolean
    className?: string
    delay?: number
}) {
    useEffect(() => {}, [visible])

    if (!visible) return null

    return (
        <div
            style={{ animationDelay: `${delay}ms` }}
            className={clsx(styles.container, className)}
        >
            {children}
        </div>
    )
}
