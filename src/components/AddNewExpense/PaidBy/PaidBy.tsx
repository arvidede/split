"use client"
import Edit from "./Edit"
import styles from "./PaidBy.module.scss"

export interface Props {}

const PaidBy: React.FC<Props> = ({}) => {
    return (
        <div className={styles.container}>
            Paid by (you) and split (equally)
            <Edit />
        </div>
    )
}

export default PaidBy
