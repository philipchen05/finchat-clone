import { Plus_Jakarta_Sans } from 'next/font/google'
import Image from 'next/image'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Data() {
    return(
        <div className="flex lg:flex-row flex-col items-center gap-y-20 mt-48 mx-12 md:mx-24">
            <div className="relative h-80 md:h-96 w-[80%] lg:w-[1000px]">
                <div className="flex items-center mt-[50%] ml-[75%] lg:ml-[65%] shadow-xl bg-white rounded-full w-36 h-36 lg:w-44 lg:h-44 bg-opacity-30">
                    <svg stroke="#53bc68" fill="none" stroke-width="4" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-[90px] w-full lg:h-[120px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <Image src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Ftable.png&w=1200&q=75" className="-z-50 top-0 absolute h-full w-full" alt="Table" />
            </div>
            <div className="flex flex-col justify-center gap-y-4 md:ml-36 w-full">
                <h1 className={`${jakartaSans.className} text-balance tracking-wide leading-none text-gray-900  text-4xl`}>
                    Better data for better<br />decisions.
                </h1>
                <h3 className={`${jakartaSans.className} text-balance tracking-wide leading-relaxed text-gray-900 text-base`}>
                    <span className="bg-highlighter">Institutional-quality data</span> that's been verified by human equity analysts. Our trusted, in-depth information helps you capitalize on opportunities.
                </h3>
                <div className="bg-dataDarkGrey text-white px-3 font-semibold rounded-full py-1 text-xs w-[325px]">Financials and estimates by S&P Market Intelligence</div>
                <div className="bg-dataDarkGrey text-white px-3 font-semibold rounded-full py-1 text-xs w-[280px]">Segments and KPIs by FinChat Verified Data</div>
            </div>
        </div>
    )
}
