import styles from "./styles.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export function Footer() {
    return(
        <>
            <footer>
                <p>
                    Site Developed by <strong>Ícaro Carvalho</strong>
                </p>
                <div className={styles.socialMedia}>
                    <FaGithub />
                    <FaLinkedin />
                    <IoLogoWhatsapp />
                </div>
            </footer>
        </>
    )
}