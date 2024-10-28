import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Data() {
    return(
        <div className="flex lg:flex-row flex-col items-center gap-y-20 mt-48 mx-12 md:mx-24">
            <div className="flex flex-col justify-center gap-y-4 w-full">
                <h1 className={`${jakartaSans.className} text-balance tracking-wide leading-none text-gray-900  text-4xl`}>
                    Your own AI assistant.
                </h1>
                <h3 className={`${jakartaSans.className} text-balance tracking-wide leading-relaxed text-gray-900 text-base`}>
                    <span className="bg-highlighter">Turn data into a discussion</span> with the power of AI. Investigate companies in depth with consistently rigorous, detailed data. Verified for accuracy.
                </h3>
                <div className="bg-black text-white px-3 font-semibold rounded-full py-1 text-xs w-[280px]">Start Chatting Now</div>
            </div>
            <div className="relative h-80 md:h-96 w-[80%] lg:w-[1000px]">
                <div className="flex items-center mt-[50%] ml-[75%] lg:ml-[65%] shadow-xl bg-white rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-opacity-30">
                    <svg stroke="#53bc68" fill="none" stroke-width="4" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-[90px] w-full lg:h-[120px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Ftable.png&w=1200&q=75" className="-z-50 top-0 absolute h-full w-full" alt="Table" />
            </div>
        </div>
    )
}
