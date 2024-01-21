"use client"
import styles from "./DatePicker.module.scss"

export interface Props {}

export default function DatePicker({}: Props) {
    const today = new Date().toLocaleDateString()
    return (
        <div className={styles.container}>
            <input type="date" name="date" defaultValue={today} />
        </div>
    )
}
