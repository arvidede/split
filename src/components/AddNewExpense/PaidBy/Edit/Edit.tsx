import { Checkbox } from "@/components/Checkbox"
import TextField from "@/components/TextField"
import { useGroup } from "@/context/Group"
import { Profile } from "@/types"
import { ReactNode, useState } from "react"
import styles from "./Edit.module.scss"
import MethodOption from "./MethodOption"
import { Person } from "./Person"

enum Method {
    Equal = "equal",
    Amount = "amount",
    Percentage = "percentage",
}

const methods = [
    {
        id: Method.Equal,
        title: "=",
    },
    {
        id: Method.Amount,
        title: "kr", // #TODO: show actual currency
    },
    {
        id: Method.Percentage,
        title: "%",
    },
]

export default function Edit() {
    const [method, setMethod] = useState(Method.Equal)

    function renderMethod() {
        switch (method) {
            case Method.Equal:
                return <Equal />
            case Method.Amount:
                return <Amount />
            case Method.Percentage:
                return <Percentage />
        }
    }

    return (
        <div className={styles.edit}>
            <div className={styles.methods}>
                {methods.map(({ id, title }) => {
                    return (
                        <MethodOption
                            key={id}
                            id={id}
                            title={title}
                            onClick={() => setMethod(id)}
                            selected={method === id}
                        />
                    )
                })}
            </div>
            {renderMethod()}
        </div>
    )
}

function PayerRow({ user, children }: { user: Profile; children: ReactNode }) {
    return (
        <li>
            <Person user={user} />
            {children}
        </li>
    )
}

function Equal() {
    const { members } = useGroup()
    return (
        <div>
            <ul>
                {members.map((member) => (
                    <PayerRow key={member.id} user={member}>
                        <Checkbox />
                    </PayerRow>
                ))}
            </ul>
        </div>
    )
}

function Amount() {
    const { members } = useGroup()
    return (
        <div>
            <ul>
                {members.map((member) => (
                    <PayerRow key={member.id} user={member}>
                        <TextField type="number" />
                    </PayerRow>
                ))}
            </ul>
        </div>
    )
}

function Percentage() {
    const { members } = useGroup()
    return (
        <div>
            <ul>
                {members.map((member) => (
                    <PayerRow key={member.id} user={member}>
                        <TextField type="number" />
                    </PayerRow>
                ))}
            </ul>
        </div>
    )
}
