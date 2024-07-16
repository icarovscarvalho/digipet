import styles from "./styles.module.css"
import { FaHeart } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { GiShinyApple } from "react-icons/gi";

export function InteractionBars(){

    return(
        <>
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
            <GiShinyApple className={styles.ionIcon} />
                <div className={styles.hungerBarLength}>
                    <div className={styles.hungerInnerContent}></div>
                </div>
            </div>
            <div className={styles.happyContainer}>
                <p className={styles.fellingEmoji}>😁</p>
            </div>
        </>
    )
}