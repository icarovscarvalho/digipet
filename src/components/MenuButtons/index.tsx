import { FaHeart, FaBowlFood, FaShower, FaBriefcaseMedical } from "react-icons/fa6";
import styles from "./styles.module.css"

export function MenuButtons(){
    return(
        <>
            <button><FaBowlFood /></button>
            <button><FaHeart /></button>
            <button><FaShower /></button>
            <button><FaBriefcaseMedical className={styles.ionIcon} /></button>
        </>
    )
}