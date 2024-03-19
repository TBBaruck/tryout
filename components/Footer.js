import Link from "next/link";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { themeColors } from "@/utils/theme";

export function Footer() {

    let year = new Date();
    year = year.getFullYear();
    const styles = {
        footerText: "text-sm text-slate-400",
        socialIcons: "text-lg text-slate-400",
    }
    return(<>
        <footer className="min-h-[80px] flex flex-col justify-center md:grid md:grid-cols-3 gap-4 items-center bg-slate-800 px-16">
            <span className={styles.footerText}>&copy;{year} Irun Co. Limited</span>
                <ul className="flex flex-row gap-8 ">
                    <li>
                        <Link className={styles.socialIcons} href="#"><FaInstagram/></Link>
                    </li>
                    <li>
                        <Link className={styles.socialIcons} href="#"><FaFacebook/></Link>
                    </li>
                    <li>
                        <Link className={styles.socialIcons}href="#"><FaXTwitter/></Link>
                    </li>
                </ul>

                <ul className="flex flex-col md:flex-row gap-2 md:gap-8">
                    <li className={styles.footerText}>
                        <Link href="#">Privacy Policy</Link>
                    </li>
                    <li className={styles.footerText}>
                        <Link href="#">Terms of Use</Link>
                    </li>
                    <li className={styles.footerText}>
                        <Link href="#">Bug Bounty</Link>
                    </li>
                </ul>
            
        </footer>
    </>)
}

