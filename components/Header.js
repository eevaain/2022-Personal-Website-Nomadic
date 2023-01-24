import Link from 'next/link'

export default function Header() {

    return (
      <>

<div className="relative">
                <img className = "rounded-md h-12 w-big sm:h-16 bg-bottom object-cover" src="trippy2.png" alt="ok"></img>
                <a className="medium absolute w-full py-2 bottom-1 sm:py-2.5 sm:medium sm:bottom-2.5 text-white text-center">Evan Lin</a>
              </div>

              {/* GIVE A THANK YOU TO EVERY SECTION LIKE A THANK YOU TO BRETT FOR EPIPHETS*/}
              {/* thank anshul and harrison in projects*/}
              {/* thank jake in bookshelf */}
              {/* thank jae and ryan junee in writing */}

                    <div className = "flex justify-around pt-6 pb-8 text-xs sm:text-base ">
                     <Link href="/">
                        <a className = "regular no-underline hover:underline focus:underline">Home</a>
                      </Link>
                      <Link href="/Writing">
                        <a className = "regular no-underline hover:underline">Writing</a>
                      </Link>
                      <Link href="/Bookshelf">
                        <a className = "regular no-underline hover:underline">Bookshelf</a>
                      </Link>
                        <Link href="/Epiphets">
                          <a className = "regular no-underline hover:underline">Epithets</a>
                        </Link>
                      <Link href="/Projects">
                        <a className = "regular no-underline hover:underline">Projects</a>
                      </Link>
                    </div>
   
    </>
    )
} 
