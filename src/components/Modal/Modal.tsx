"use client"

import clsx from "clsx"
import { ReactNode } from "react"
import styles from "./Modal.module.scss"

interface Props {
    open: boolean
    title: string
    children: ReactNode
    onClose: () => void
    onConfirm: () => void
}

export default function Modal(props: Props) {
    return (
        <>
            <div
                className={clsx(styles.backdrop, props.open && styles.open)}
                onClick={props.onClose}
            />
            <dialog open={props.open} className={styles.modal}>
                <div>{props.title}</div>
                <div>{props.children}</div>
                <div>
                    <button onClick={props.onClose}>Cancel</button>
                    <button onClick={props.onConfirm}>Save</button>
                </div>
            </dialog>
        </>
    )
}
