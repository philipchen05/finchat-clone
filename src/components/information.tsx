'use client'

import { useState } from 'react'
import { Plus_Jakarta_Sans, Space_Grotesk, DM_Mono } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const dmMono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'] });

export default function Information() {
    const [state, setState] = useState(false)
    
    function getTextColour(state: boolean) {
        if(state) {
            return "text-greyText";
        } else {
            return "text-black";
        }
    }

    function renderContent() {
        if(state) {
            return(
                <ul className={`${dmMono.className} flex flex-col text-black w-[450px] text-center text-sm md:text-base`}>
                    <li className="border-b-[1px] border-veryLightGrey p-3">AI assistant</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Stock screener</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Data visualizations</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">DCF modelling</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Portfolio and watchlist dashboarding</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Notifications</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Competitor comparisons</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Upload documents</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Earnings calendar</li>
                </ul>
            )
        } else {
            return(
                <ul className={`${dmMono.className} flex flex-col text-black w-[450px] text-center text-sm md:text-base`}>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Accurate financial data on 100,000+ global public companies</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Company revenue and profit segments & KPIs</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Analyst estimates, price targets & ratings</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Utilize cutting edge AI to build summaries, models and visualizations</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Transcripts</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Filings</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Dividend history</li>
                    <li className="border-b-[1px] border-veryLightGrey p-3">Insider and institutional ownership</li>
                </ul>
            )
        }
    }

    return(
        <div className="flex flex-col items-center gap-16">
            <h1 className={`${spaceGrotesk.className} text-center text-balance tracking-wide leading-none mx-2 font-semibold text-gray-900 text-5xl md:text-6xl`}>
                Built for investors,<br />by investors.
            </h1>
            <div className={`${jakartaSans.className} text-sm font-semibold flex items-center`}>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="flex justify-evenly items-center w-[450px] h-14 outline outline-1 outline-darkGrey text-black rounded-3xl peer peer-checked:" onClick={() => { setState(!state) }}>
                        <h2 className={`${getTextColour(state)} flex justify-center w-[225px]`}>Company Research</h2>
                        <h2 className={`${getTextColour(!state)} flex justify-center w-[225px]`}>Tools</h2>
                    </div>
                    <span className="absolute -z-50 left-1 top-1 h-12 w-[225px] bg-white rounded-3xl drop-shadow-2xl transition-transform peer-checked:translate-x-[217px]" ></span>
                </label>
            </div>
            {renderContent()}
        </div>
    )
}