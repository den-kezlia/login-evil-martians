import { InputHTMLAttributes, forwardRef } from "react"
import styles from "./input.module.css"

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
    return (
        <div className={styles.inputContainer}>
            <input
                className={className ? `${styles.input} ${className}` : styles.input}
                ref={ref}
                {...props}
            />
        </div>
    )
})

Input.displayName = 'Input'

export default Input