import { useCallback, useState } from "react"

export default function useBoolean(initialState: boolean) {
    const [state, setState] = useState(initialState)
    const setFalse = useCallback(() => setState(false), [])
    const setTrue = useCallback(() => setState(true), [])
    const toggle = useCallback(() => setState((current) => !current), [])

    return {
        state,
        setState,
        setFalse,
        setTrue,
        toggle,
    }
}
