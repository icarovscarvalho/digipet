import styles from "./styles.module.css"
import { FaHeart, FaBowlFood, FaShower, FaBriefcaseMedical } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { GiMeal } from "react-icons/gi";

export function Main() {
    return(
        <>
            <main>
                <section>
                    <div className={`${styles.tamagotchiInteractions} ${styles.systemStyle}`}>
                        <div className={styles.lifeBarContainer}>
                            <FaHeart className={styles.ionIcon} />
                            <div className={styles.lifeBarLength}>
                                <div className={styles.lifeInnerContent}></div>
                            </div>
                        </div>
                        <div className={styles.thirstyBarContainer}>
                        <IoIosWater className={styles.ionIcon} />
                            <div className={styles.thirstyBarLength}>
                                <div className={styles.thirstyInnerContent}></div>
                            </div>
                        </div>
                        <div className={styles.hungerBarContainer}>
                        <GiMeal className={styles.ionIcon} />
                            <div className={styles.hungerBarLength}>
                                <div className={styles.hungerInnerContent}></div>
                            </div>
                        </div>
                        <div className={styles.happyContainer}>
                            <p className={styles.fellingEmoji}>😁</p>
                        </div>
                    </div>
                    <div className={styles.tamagotchiBody}>
                        <div className={styles.eggAnimation}>
                            <div className={styles.egg}></div>
                        </div>
                    </div>
                    <div className={`${styles.tamagotchiButtons} ${styles.systemStyle}`}>
                        <button><FaBowlFood /></button>
                        <button><FaHeart /></button>
                        <button><FaShower /></button>
                        <button><FaBriefcaseMedical className={styles.ionIcon} /></button>
                    </div>
                </section>
            </main>
        </>
    )
}