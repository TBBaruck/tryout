export default funtion Index() {
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

        <div className="h-full w-full lg:hidden justify-center items-center bg-mobile">
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

        <section className="min-h-[420px] grid grid-cols-3 bg-black">
          <article className="flex justify-center items-center bg-yellow-400">
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/bg_desktop"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
        
          </article>
          <aside className="col-span-2 p-16 bg-green-400">
           <div className="grid grid-cols-2 gap-2">
           <Image width={300} height={680} src='/hair_hori.jpg'/>
            
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <Image width={200} height={200} src='/hair_4.jpg'/>
            <Image width={200} height={200} src='/hair_3.jpg'/>
            <Image width={200} height={200} src='/hair_3.jpg'/>
            <Image width={200} height={200} src='/hair_4.jpg'/>
            </div>
           </div>
          </aside>

        </section>
        {/* shop intro section */}
      </main>
    </>
  );
}