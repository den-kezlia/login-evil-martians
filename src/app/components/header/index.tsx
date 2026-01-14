import Image from 'next/image'
import styles from "./header.module.css"

type HeaderProps = {
    title?: string
    icon?: string
}

export default function Header({ title, icon }: HeaderProps) {
    if (!title) {
        return null
    }

    return (
        <div className={styles.header}>
            {icon && (
                <Image
                    src={icon}
                    alt={`${title} icon`}
                    className={styles.headerIcon}
                    width={24}
                    height={24}
                    priority
                />
            )}

            <p>{title}</p>
        </div>
    )
}