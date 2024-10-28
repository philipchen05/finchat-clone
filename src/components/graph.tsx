
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Graph() {
    return(
        <div className="flex flex-col items-center gap-3 mx-24 mt-28">
            <h1 className={`${spaceGrotesk.className} text-center text-balance tracking-wide leading-none font-semibold text-gray-900 text-4xl sm:text-5xl md:text-6xl`}>
                FinChat v. LLMs
            </h1>
            <h3 className={`${jakartaSans.className} text-center text-balance tracking-wide md:leading-relaxed md:mx-[25%] text-gray-900 text-lg`}>
                FinanceBench is the industry standard for evaluating LLM's on financial questions.
            </h3>
            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Ffinance-bench-graph.png&w=2048&q=75" className="w-[600px] rounded-md" />
            <h5 className={`${jakartaSans.className} text-center text-balance tracking-wide leading-none mx-2 text-gray-900 text-xs`}>
                Based on FinanceBench Top 100 Questions
            </h5>
        </div>
    )
}
