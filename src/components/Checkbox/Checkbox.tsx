"use client"
import styles from "./Checkbox.module.scss"

export interface Props {}

function Checkbox({}: Props) {
    return <input type="checkbox" className={styles.checkbox} />
}

export default Checkbox
