import styles from "./styles.module.css"

export function GameScreen() {
    return(
        <>
            <div className={styles.tamagotchiBody}>
                <div className={styles.eggAnimation}>
                    <div className={styles.egg}></div>
                </div>
            </div>
        </>
    )
}