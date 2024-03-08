import Link from "next/link";

export default function Index() {
  return (
    <> 
      <main className="h-screen"> 
        <div className="h-full w-full hidden lg:flex  justify-center items-center bg-desktop ">
          <div className="w-full h-full bg-[#402B3A]/50 flex  justify-center items-center">
            <div className="w-full md:w-[520px] items-center flex flex-col  gap-6 px-4 md:px-0 ">
            <h1 className="text-4xl lg:text-6xl text-center text-[#F8F4EC]">Shop for hairs and book an appoint for a fix</h1>
              <Link  href='/auth/signup' className="H-[48PX] w-full md:w-[300px] flex justify-center items-center  bg-[#402B3A] px-4 rounded-md text-[#F8F4EC] text-2xl">Get Started</Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full lg:hidden bg-mobile">

        </div>
      </main>
    </>
  );
}