"use client"

import createExpense from "@/actions/expense/createExpense"
import DatePicker from "@/components/DatePicker"
import { useGroup } from "@/context/Group"
import useBoolean from "@/hooks/useBoolean"
import { useRef } from "react"
import Button from "../Button"
import Modal from "../Modal"
import TextField from "../TextField"
import styles from "./AddNewExpense.module.scss"
import CurrencyPicker from "./CurrencyPicker"
import PaidBy from "./PaidBy"

const initialState = {
    title: "",
    currency: "EUR",
    amount: 0,
}

interface Props {}

export default function AddNewExpense({}: Props) {
    const formRef = useRef<HTMLFormElement>(null)
    const modal = useBoolean(false)
    const { id: groupId, ...rest } = useGroup()

    console.log(rest)

    function handleSubmit() {
        formRef.current?.requestSubmit()
    }

    async function submit(formData: FormData) {
        const { ok } = await createExpense(groupId, formData)
        if (ok) {
            modal.setFalse()
        }
    }

    return (
        <div>
            <Button onClick={modal.setTrue}>Add an expense</Button>
            <Modal
                open={modal.state}
                title="Add an expense"
                onClose={modal.setFalse}
                onConfirm={handleSubmit}
            >
                <form ref={formRef} action={submit} className={styles.form}>
                    <TextField
                        type="text"
                        placeholder="Enter a description"
                        name="title"
                        defaultValue={initialState.title}
                    />
                    <div className={styles.amount}>
                        <CurrencyPicker />
                        <TextField
                            name="amount"
                            type="number"
                            placeholder="0.00"
                            defaultValue={initialState.amount}
                        />
                    </div>

                    <PaidBy />

                    <DatePicker />
                </form>
            </Modal>
        </div>
    )
}
