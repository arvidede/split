"use client"

import clsx from "clsx"
import { ReactNode } from "react"
import Button from "../Button"
import styles from "./Modal.module.scss"

interface Props {
    open: boolean
    title: string
    children: ReactNode
    onClose: () => void
    onConfirm: () => void
}

export default function Modal({
    open,
    title,
    children,
    onClose,
    onConfirm,
}: Props) {
    return (
        <>
            <div
                className={clsx(styles.backdrop, open && styles.open)}
                onClick={onClose}
            />
            <dialog open={open} className={styles.modal}>
                <h3>{title}</h3>
                <section>{children}</section>
                <section className={styles.actions}>
                    <Button onClick={onClose} variant="secondary">
                        Cancel
                    </Button>
                    <Button onClick={onConfirm} variant="primary">
                        Save
                    </Button>
                </section>
            </dialog>
        </>
    )
}
