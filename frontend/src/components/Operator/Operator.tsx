import "./Operator.scss"

export const Operator = () => {
    return (
        <select name="Operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
    )
}