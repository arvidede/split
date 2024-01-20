import doesUserExist from "@/actions/doesUserExist"
import useDebouncedInput from "@/hooks/useDebouncedInput"
import { useEffect, useState } from "react"
import TextField from "../TextField"

interface Props {
    onSuccess: () => void
    onFail: () => void
}

export default function Email({ onSuccess, onFail }: Props) {
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const debouncedInput = useDebouncedInput(input, 1000)

    useEffect(() => {
        if (debouncedInput) {
            setLoading(true)
            doesUserExist(debouncedInput).then((exists) => {
                setLoading(false)
                if (exists) {
                    onSuccess()
                } else {
                    onFail()
                }
            })
        }
    }, [debouncedInput, onSuccess, onFail])

    return (
        <TextField
            loading={loading}
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            required
        />
    )
}
