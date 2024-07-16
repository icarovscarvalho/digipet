import { GameScreen } from "../GameSecreen";
import { InteractionBars } from "../InteractionBars";
import { MenuButtons } from "../MenuButtons";
import styles from "./styles.module.css"

export function Main() {

    return(
        <>
            <main>
                <section>
                    <div className={`${styles.tamagotchiInteractions} ${styles.systemStyle}`}>
                        <InteractionBars />
                    </div>
                    <GameScreen />
                    <div className={`${styles.tamagotchiButtons} ${styles.systemStyle}`}>
                        <MenuButtons />
                    </div>
                </section>
            </main>
        </>
    )
}