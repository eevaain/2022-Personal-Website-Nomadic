import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import "@fontsource/playfair-display/500.css"

export default function Home() {
  return (
    <div className = "min-h-screen p-10 flex flex-col bg-white">
                    <Head>
                    <title>Evan Lin</title>
                    <link rel="icon" href="/favicon.ico" />
                    </Head>
                <div className="flex flex-col place-self-center">
                  <Header/>
                </div>


            <div className = "Header">
              <a className = "medium text-black flex justify-center text-3xl text-center pb-2 pt-1 sm:text-6xl sm:pt-4 tracking-normal"> Take a Leap of Faith</a>
                  <div className = "flex flex-row justify-center">
                    <a className = "medium text-black font-regular text-lg sm:text-3xl pb-6 tracking-normal"> Safety net: zero</a>
                  </div>
            </div>


              <div className = "Portfolio">
              <div className = "flex flex-col items-center ">
              
                
                <div className="flex justify-center ">
                        <Image
                          src={'/ok2.png'}
                          height ={310}
                          width={466}
                          alt="image"
                        />
                </div>

              </div>
              </div>


            <div className = "flex flex-col self-center pt-6   w-11/12 sm:max-w-lg ">

              <details className="">
                  <summary className="bg-inherit text-lg cursor-pointer">
                    <a className="medium sm:text-2xl"> <pog className="pog">Design choice </pog>about this site </a>
                    </summary>
                  <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                      <p>A temple to worhip about communicating ideas instead of merit.</p>
                      <p>. . .</p>
                      <p>Felt like my old website was too busy <thing className="underline cursor-pointer" onClick = {() => window.open('https://wapp-sage.vercel.app/')}>[CONTEXT]</thing></p>
                      <p>. . .</p>
                      <p>Settling for something simple and timeless that accurately depicts my creative output. </p>
                  </div>
              </details>

              <details className="pt-0.5 open:bg-amber-200 duration-300">
                  <summary className="bg-inherit text-lg cursor-pointer">
                    <a className="medium sm:text-2xl"> About me </a>
                  </summary>
                  <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                      <p>Left full-stack and shut down a web3 startup to pursue computer architecture over a gap year.</p>
                      <p>. . .</p>
                      <p> Esoteric embedded system enthusiast. Curious about the fundemental nature of reality. I like to take risks and explore low-level computing while pursing a spiritual journey. And i love karaoke.</p>
                      <p>. . .</p>
                      <p>Graduated high school and now living my life to the fullest. Currently studying computer architecture by writing a CPU emulator and by building a homebrew computer using a 6502 processor. </p>
                      <p>. . .</p>
                      <p>Focusing on building a stronger emotional intelligence and forging deeper relationships.</p>
                      <p>. . .</p>
                      <p>I become legal on 2022-09-14. </p>
                      <p>. . .</p>
                      <p>Updated on 2022-08-29.</p>
                  </div>
              </details>



                <div className = "Footer pt-20">
                  <a className = "medium text-black text-xl sm:text-2xl tracking-normal">Find me on</a>
                  <div className = "flex justify-around pt-3 sm:pt-6">

                    <div>
                    <a className = "regular text-xs sm:text-base cursor-pointer" onClick = {() => window.open('https://www.youtube.com/channel/UCn9Ir-KFtIWSntk6RzGE1-A')}>YouTube</a>

                        <div className="h-1 w-full pt-3 relative">
                          <Image
                            src={'/scribble1.png'}
                            layout="fill" // required
                            alt="image"
                          />
                        </div>
                        
                    </div>


                    <div>
                    <a className = "regular text-xs sm:text-base cursor-pointer" onClick = {() => window.open('https://twitter.com/evannlinn')}>Twitter</a>

                      <div className="h-1 w-full pt-3 relative">
                        <Image
                          src={'/scribble2.png'}
                          layout="fill" // required
                          alt="image"
                        />
                      </div>

                    </div>

                    <div>
                    <a className = "regular text-xs sm:text-base cursor-pointer" onClick = {() => window.open('https://www.linkedin.com/in/evan-lin-0b764b1a3/')}>LinkedIn</a>

                      <div className="h-1 w-full pt-3 relative">
                        <Image
                          src={'/scribble3.png'}
                          layout="fill" // required
                          alt="image"
                        />
                      </div>

                    </div>

                    <div >
                      <a className = "regular text-xs sm:text-base cursor-pointer" onClick = {() => window.open('https://www.instagram.com/evanliin/?hl=en')}>Instagram</a>
                  
                      <div className="h-1 w-full pt-3 relative">
                          <Image
                            src={'/scribble4.png'}
                            layout="fill" // required
                            alt="image"
                          />
                        </div>
                    </div>

                    <div>
                      <a className = "regular text-xs sm:text-base" href="mailto:evanlin416@gmail.com">Email</a>
                  
                      <div className="h-1 w-full pt-3 relative">
                          <Image
                            src={'/scribble5.png'}
                            layout="fill" // required
                            alt="image"
                          />
                        </div>
                    </div>

                    </div> 
                </div>

              </div>
        
    </div>
  )
}
