import { LabelHTMLAttributes, forwardRef } from "react"
import styles from "./label.module.css"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ children, className, ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={`${styles.label} ${className || ""}`}
            {...props}
        >
            {children}
        </label>
    )
})

Label.displayName = 'Label'

export default Label