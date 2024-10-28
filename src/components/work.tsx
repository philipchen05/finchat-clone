import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Data() {
    return(
        <div className="flex gap-x-8 lg:flex-row lg:justify-evenly flex-col items-center gap-y-20 mt-48 mx-12 md:mx-24">
            <div className="flex flex-col justify-center gap-y-4 w-full px-28 lg:px-0 lg:w-1/2 lg:mb-36">
                <h1 className={`${jakartaSans.className} text-balance tracking-wide leading-none text-gray-900  text-4xl`}>
                    Work faster than ever.
                </h1>
                <h3 className={`${jakartaSans.className} text-balance tracking-wide leading-relaxed text-gray-900 text-base`}>
                    <span className="bg-highlighter">Save time researching</span> your next great investment idea with the comprehensive investment research platform for global equities. This is where institutional-level data meets the speed of AI.
                </h3>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-96 lg:w-[500px]">
                <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdoughnut.png&w=2048&q=75" className="rounded-3xl shadow-inner" />
                <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fabstract-bar-chart-table.png&w=2048&q=75" className="row-span-2 rounded-3xl shadow-inner" />
                <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fabstract-charts.png&w=2048&q=75" className="rounded-3xl shadow-inner" />
            </div>
        </div>
    )
}
