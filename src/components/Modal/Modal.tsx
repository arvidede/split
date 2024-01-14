"use client"

import { ReactNode } from "react"

interface Props {
    open: boolean
    title: string
    children: ReactNode
    onClose: () => void
    onConfirm: () => void
}

export default function Modal(props: Props) {
    return (
        <dialog open={props.open}>
            <div>{props.title}</div>
            <div>{props.children}</div>
            <div>
                <button onClick={props.onClose}>Cancel</button>
                <button onClick={props.onConfirm}>Save</button>
            </div>
        </dialog>
    )
}
