interface Option {
    id: string
    title: string
}

const OPTIONS = [
    {
        id: "eur",
        title: "EUR",
    },
    {
        id: "sek",
        title: "SEK",
    },
    {
        id: "usd",
        title: "USD",
    },
    {
        id: "nok",
        title: "NOK",
    },
]

function Option({ id, title }: Option) {
    return (
        <option key={id} value={id}>
            {title}
        </option>
    )
}

export interface Props {}

export default function CurrencyPicker() {
    return <select name="currency">{OPTIONS.map(Option)}</select>
}
