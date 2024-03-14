import Head from "next/head"
import Link from "next/link"
import { Merriweather } from "next/font/google";
import { FaMapPin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import {FaPhoneAlt} from "react-icons/fa";
import {FaInstagram} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { themeColors } from "@/utils/theme";


const MerriBles400 = Merriweather ({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
  });

function ContactUs () {
    
    return(<>
    <Head>
        <title>Contact us | Irun</title>
    </Head>
    <main className="flex flex-col gap-6 px-4 md:px-16 lg:px-32 py-8 md:py-16">
        <h1 className={`${MerriBles400.className} text-5xl text-center`}>Contact Us</h1>

        {/* top section */}
        <div className="flex flex-col gap-4">
            <blockquote className="min-h-32  flex flex-row gap-4 items-center justify-center border border-gray-300 rounded-md shadow-md">
                <FaMapPin  className="text-5xl"/>
                <p className="text-2xl"> 1st Floor Pronet Mall, Plot B53 Gado Nasko Road, Kubwa, Abuja, Nigeria</p>
            </blockquote>

            <div className="grid md:grid-cols-2 gap-4">
                <blockquote className="min-h-32  flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-md shadow-md">
                    <IoMdMailOpen className="text-5xl"/>
                    <Link href="mailto:sales@irun.com" className="text-2xl"> sales@irun.com</Link>
                </blockquote>
                
                <blockquote className="min-h-32  flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-md shadow-md">
                    <FaPhoneAlt className="text-5xl"/>
                    <Link href="tel:07055173201" className="text-2xl"> 070877777367</Link>
                </blockquote>      
            </div>
        </div>

        {/* lower section */}
        
        <div className="flex flex-col gap-4 ">
            <h2 className={`${MerriBles400.className} text-2xl text-center`}>Engage with us Across our Platforms</h2>
            <div className="grid md:grid-cols-3 gap-4">
                 <blockquote className="min-h-32  flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-md shadow-md">
                    <FaInstagram className={`text-[${themeColors.strongPink}] text-5xl`}/>
                    <Link href="https://instagram.com/earlycodetech" className="text-2xl"> @early_code_tech</Link>
                </blockquote> 
                 <blockquote className="min-h-32  flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-md shadow-md">
                    <FaFacebook className={`text-[${themeColors.strongPink}] text-5xl`}/>
                    <Link href="https://facebook.com/earlycodetech" className="text-2xl"> @earlycodetech</Link>
                </blockquote> 
                 <blockquote className="min-h-32  flex flex-col gap-4 items-center justify-center border border-gray-300 rounded-md shadow-md">
                    <FaXTwitter className={`text-[${themeColors.strongPink}] text-5xl`}/>
                    <Link href="https://twitter.com/earlycodetech" className="text-2xl"> @earlycodetech</Link>
                </blockquote> 

            </div>
        </div>
    </main>
    </>)
}

export default ContactUs