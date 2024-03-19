
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import {MdKeyboardArrowDown} from "react-icons/md";
import { BsCurrencyDollar} from "react-icons/bs";
import { Merriweather } from "next/font/google";
import {GoDotFill} from "react-icons/go";
import { useState } from "react";


const MerriReg400 = Merriweather({
    subsets:['latin'],
    display:'swap',
    weight:'400'
});

export function NavBar() {
        
    const [showMenu, setShowMenu] = useState(true);
    const [showClose, setShowClose] = useState(false)

    const handleHiMenu = () => {
        setShowMenu(true)
        setShowClose(true);
    }

    const handleMdClose = () => {
        setShowMenu(false)
        setShowClose(false)
    }
    

    return(
        <nav className="h-[60px] grid grid-cols-2 lg:grid-cols-3 gap-8 bg-[#402B3A] border-amber-600 px-2 md:px-8 lg:px-16">
            {/* Show on all devices */}
           <ul className="hidden lg:flex flex-row gap-2 items-center">
                <li className={styles.navLink}><Link href="#">Shop</Link></li>
                <li className={styles.navLink}><Link href="#">Accessories</Link></li>
                <li className={styles.navLink}><Link href="#">Showroom</Link></li>
                <li className={styles.navLink}><Link href="/contact-us">Contact-Us</Link></li>
           </ul>

            {/* show on all devices */}

           <div className="flex flex-row gap-1 justify-start lg:justify-center items-center">
                <h1 className={`${MerriReg400.className} text-4xl text-gray-100`}> Irun</h1>
                <GoDotFill className="text-amber-400"/>
           </div>

        {/* show only on mobile and tablets */}
            <div className="flex justify-end items-center lg:hidden">
                <div>
                <HiMenuAlt3 onClick={handleHiMenu} className={`${showMenu ? "hidden" : "flex"} text-gray-200 text-4xl `}/>
                </div>
                
                <IoMdClose onClick={handleMdClose} className={`${showClose ? "flex" : "hidden"} text-gray-200 text-4xl `}/>
            </div>

            {/* show only on desktop */}
            <div className="hidden lg:flex flex-row gap-4">
            <div className="flex flex-row gap-4">
                <blockquote className="flex flex-row items-center">
                    <FaGlobeAmericas className="text-amber-200"/>
                    <span className="text-amber-400">English</span>
                    <MdKeyboardArrowDown className="text-amber-200"/>
                </blockquote>

                <blockquote className="flex flex-row items-center">
                    <BsCurrencyDollar className="text-amber-400"/>
                    <span className="text-amber-400">USB</span>
                    <MdKeyboardArrowDown className="text-amber-400"/>
                </blockquote>
            </div>

           <ul className="hidden lg:flex flex-row gap-4 items-center">
                <li> <Link href="#"><CiSearch className={styles.navLinkIcon}/></Link></li>
                <li> <Link href="#"><CiUser className={styles.navLinkIcon}/></Link></li>
                <li> <Link href="#"><CiHeart className={styles.navLinkIcon}/></Link></li>
                <li> <Link href="#"><CiShoppingCart className={styles.navLinkIcon}/></Link></li>
           </ul>
            </div>

                {/* <ul onClick={handleHiMenu} className={`${showMenu ? "flex-col" : "hidden"}  flex justify-center  mt-6 marginAdjust   `}>
                    <li className="li-elements bg-[#402B3A] text-white font-bold"> <Link href="#">Shop</Link></li>
                    <li className="li-elements  bg-[#402B3A] text-white font-bold"> <Link href="#">Accessories</Link></li>
                    <li className="li-elements  bg-[#402B3A] text-white font-bold"> <Link href="#">Show-Room</Link></li>
                    <li className="li-elements  bg-[#402B3A] text-white font-bold"> <Link href="#">Contact-us</Link></li>
                </ul> */}
           
        </nav>
    )
}
const styles = {
    navLink: "text-gray-200",
    navLinkIcon: "text-gray-200 text-2xl"
}