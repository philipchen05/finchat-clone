import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Testimonials() {
    return(
        <div className="mt-48">
            <h1 className={`${spaceGrotesk.className} text-center text-balance tracking-wide leading-none mx-2 font-semibold text-gray-900 text-4xl sm:text-5xl md:text-6xl`}>
                Trusted by 150,000+ investors & organizations.
            </h1>
            <div className="overflow-hidden w-full mb-40 mt-20">
                <div className="flex w-[200%] animate-scroll space-x-4 gap-16 justify-center items-center">
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbaskin.png&w=1920&q=75" alt="Baskin" className="h-10" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbcg.png&w=1920&q=75" alt="BCG" className="h-10" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcfi.png&w=1920&q=75" alt="CFI" className="h-6" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcornell.png&w=1920&q=75" alt="Cornell" className="h-24" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdecent.png&w=1920&q=75" alt="Decent" className="h-6" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdelorean.png&w=1920&q=75" alt="DeLorean" className="h-24" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fmckinsey.png&w=1920&q=75" alt="McKinsey" className="h-7" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Frvc.png&w=1920&q=75" alt="RVC" className="h-2" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fstoller.png&w=1920&q=75" alt="Stoller" className="h-24" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fsvn.png&w=1920&q=75" alt="SVN" className="h-16" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Ftd.png&w=1920&q=75" alt="TD" className="h-5" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fwoodlock.png&w=1920&q=75" alt="Woodlock" className="h-16" />

                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbaskin.png&w=1920&q=75" alt="Baskin" className="h-10" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbcg.png&w=1920&q=75" alt="BCG" className="h-10" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcfi.png&w=1920&q=75" alt="CFI" className="h-6" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcornell.png&w=1920&q=75" alt="Cornell" className="h-24" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdecent.png&w=1920&q=75" alt="Decent" className="h-6" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdelorean.png&w=1920&q=75" alt="DeLorean" className="h-24" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fmckinsey.png&w=1920&q=75" alt="McKinsey" className="h-7" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Frvc.png&w=1920&q=75" alt="RVC" className="h-2" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fstoller.png&w=1920&q=75" alt="Stoller" className="h-24" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fsvn.png&w=1920&q=75" alt="SVN" className="h-16" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Ftd.png&w=1920&q=75" alt="TD" className="h-5" />
                    <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fwoodlock.png&w=1920&q=75" alt="Woodlock" className="h-16" />
                </div>
            </div>
        </div>
    )
}
