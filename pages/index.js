import Link from "next/link";
import Head from "next/head";
import { Merriweather } from "next/font/google";
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const MerriBles400 = Merriweather ({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const MerriBles900 = Merriweather ({
  subsets: ['latin'],
  display: 'swap',
  weight: '900',
});

export default function Index() {
  return (
       
    <> 
     <Head>
          <title> Irun | Shop for hairs with fixes</title>
        </Head>
      <main className="h-screen"> 
        <div className="h-full w-full hidden lg:flex  justify-center items-center bg-desktop ">
          <div className="w-full h-full bg-[#402B3A]/30 flex  justify-center items-center">
            <div className="w-full md:w-[520px] items-center flex flex-col  gap-6 px-4 md:px-0 ">
            <h1 className={`${MerriBles900.className} text-4xl lg:text-6xl text-center text-[#F8F4EC]`}>Shop for hairs and book an appoint for a fix</h1>
              <Link  href='/auth/signup' 
              className="h-[64px] w-full md:w-[280px] flex justify-center items-center gap-4 bg-[#402B3A] px-4 rounded-md text-[#F8F4EC] text-3xl">
                <span>Get Started</span>
                <FaRegArrowAltCircleRight/>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full lg:hidden justify-center items-center bg-mobile ">
          <div className="w-full h-full bg-[#402B3A]/30 flex  justify-center items-center">
            <div className="w-full md:w-[520px] items-center flex flex-col  gap-6 px-4 md:px-0 ">
            <h1 className={`${MerriBles900.className} text-4xl lg:text-6xl text-center text-[#F8F4EC]`}>Shop for hairs and book an appoint for a fix</h1>
              <Link  href='/auth/signup' 
              className="h-[64px] w-full md:w-[280px] flex justify-center items-center gap-4 bg-[#402B3A] px-4 rounded-md text-[#F8F4EC] text-3xl">
                <span>Get Started</span>
                <FaRegArrowAltCircleRight/>
              </Link>
            </div>
          </div>
        </div>

        {/* shop intro section */}
      </main>
    </>
  );
}