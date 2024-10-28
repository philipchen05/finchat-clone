import { Space_Grotesk, DM_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'] });

export default function Start() {
    return(
        <div className="relative z-40 flex justify-center bg-white p-32 mt-52 rounded-3xl shadow-xl mx-4">
            <div className="flex flex-col justify-center items-center gap-y-4 w-[90%]">
                <h1 className={`${spaceGrotesk.className} text-center text-balance tracking-wide leading-none font-medium text-gray-900 text-4xl sm:text-5xl md:text-6xl`}>
                Discover how FinChat can supercharge your research.
                </h1>
                <button className="bg-almostBlack hover:opacity-90 text-white px-3 font-semibold rounded-full py-1 text-sm h-14 w-52 mt-12">Get Started For Free</button>
                <h3 className={`${dmMono.className} text-balance text-center tracking-wide leading-relaxed text-gray-900 text-sm`}>
                    (No credit card required)
                </h3>
            </div>
        </div>
    )
}