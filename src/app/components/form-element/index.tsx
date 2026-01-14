import styles from "./form-element.module.css"

type FormElementProps = {
    children: React.ReactNode
}

export default function FormElement({ children }: FormElementProps) {
    return (
        <div className={styles.formElement}>
            {children}
        </div>
    )
}