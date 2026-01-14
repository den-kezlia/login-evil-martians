import { forwardRef, ButtonHTMLAttributes } from "react"
import styles from "./button.module.css"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
    return (
        <button className={className ? `${styles.button} ${className}` : styles.button} ref={ref} {...props}>
            {props.children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
