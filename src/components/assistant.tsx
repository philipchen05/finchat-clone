import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Assistant() {
    return(
        <div className="flex lg:flex-row lg:justify-evenly flex-col items-center gap-y-20 mt-48 mx-12 md:mx-24">
            <div className="flex flex-col justify-center gap-y-4 w-full px-28 lg:px-0 lg:w-1/2">
                <h1 className={`${jakartaSans.className} text-balance tracking-wide leading-none text-gray-900  text-4xl`}>
                    Your own AI assistant.
                </h1>
                <h3 className={`${jakartaSans.className} text-balance tracking-wide leading-relaxed text-gray-900 text-base`}>
                    <span className="bg-highlighter">Turn data into a discussion</span> with the power of AI. Investigate companies in depth with consistently rigorous, detailed data. Verified for accuracy.
                </h3>
                <button className="bg-almostBlack text-white px-3 font-semibold rounded-full py-1 text-sm h-10 w-40">Start Chatting Now</button>
            </div>
            <div className="w-56 h-56 lg:w-80 lg:h-80 bg-white shadow-2xl drop-shadow-2xl shadow-orange-200 rounded-full"></div>
        </div>
    )
}
