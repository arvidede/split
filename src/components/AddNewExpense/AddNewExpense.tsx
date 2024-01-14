"use client"

import createExpense from "@/actions/createExpense"
import { useRef, useState } from "react"
import Modal from "../Modal"

const initialState = {
    title: "",
    currency: "EUR",
    amount: 0,
}

interface Props {
    groupId: string
}

export default function AddNewExpense({ groupId }: Props) {
    const formRef = useRef<HTMLFormElement>(null)
    const [showModal, setShowModal] = useState(false)

    function handleSubmit() {
        formRef.current?.requestSubmit()
    }

    async function submit(formData: FormData) {
        const { ok } = await createExpense(groupId, formData)
        if (ok) {
            setShowModal(false)
        }
    }

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Add an expense</button>
            <Modal
                open={showModal}
                title="Add an expense"
                onClose={() => setShowModal(false)}
                onConfirm={handleSubmit}
            >
                <form ref={formRef} action={submit}>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter a description"
                            name="title"
                            defaultValue={initialState.title}
                        />
                        <span>
                            <input
                                name="currency"
                                type="text"
                                placeholder="Currency"
                                defaultValue={initialState.currency}
                            />
                            <input
                                name="amount"
                                type="number"
                                placeholder="0.00"
                                defaultValue={initialState.amount}
                            />
                        </span>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
