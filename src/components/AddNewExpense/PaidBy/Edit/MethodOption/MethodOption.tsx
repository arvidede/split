import clsx from "clsx"
import styles from "./MethodOption.module.scss"

interface Props {
    selected: boolean
    onClick: () => void
    id: string
    title: string
}

export default function MethodOption({ id, title, onClick, selected }: Props) {
    return (
        <nav
            key={id}
            className={clsx(styles.container, selected && styles.selected)}
            onClick={onClick}
        >
            {title}
        </nav>
    )
}
