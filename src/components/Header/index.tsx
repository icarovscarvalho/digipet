import styles from "./styles.module.css"

export function Header() {
    return(
        <>
            <header>
                <div className={styles.logo}></div>
                <div className={styles.title}>
                    <h1>My</h1>
                    <h1>Digi</h1>
                    <h1>Pet</h1>
                </div>
            </header>
        </>
    )
}