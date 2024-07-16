import { Header } from "../Header"
import { Main } from "../Main"
import styles from "./styles.module.css"

export function Container() {
    return(
        <>
            <div className={styles.container}>
                <Header />
                <Main />
            </div>
        </>
    )
}