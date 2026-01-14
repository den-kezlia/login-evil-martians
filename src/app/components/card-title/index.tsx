import styles from "./card-title.module.css"

type CardTitleProps = {
    title?: string
}

export default function CardTitle({ title }: CardTitleProps) {
    if (!title) {
        return null
    }

    return (
        <h1 className={styles.cardTitle}>{title}</h1>
    )
}