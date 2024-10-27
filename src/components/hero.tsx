'use client'

import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import Searchbar from "./searchbar"

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Hero() {
  return (
    <div className="bg-darkWhite mb-48">
      <div className="isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto w-11/12 lg:w-9/12">
          <div className="sm:mb-8 flex justify-center">
            <button className={`${jakartaSans.className} relative rounded-full mb-4 px-3 py-0.25 text-xs md:text-sm leading-6 bg-white text-gray-600 tracking-wide font-semibold`}>
              FinChat v4 is now live!🎉{' '}
              <a href="#" className="font-semibold">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="inline-flex mb-[4px] align-middle" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </button>
          </div>
          <div>
            <h1 className={`${spaceGrotesk.className} text-center text-balance tracking-wide leading-none mx-2 font-semibold text-gray-900 text-4xl sm:text-5xl md:text-6xl`}>
                The future of investment research, powered by AI.
            </h1>
            <div className={`${jakartaSans.className} mb-4 mx-4 mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-3 text-black text-sm sm:text-base`}>
                <button className="bg-white rounded-md h-14 md:h-16 px-2 flex flex-col justify-center text-left">
                    What are Mark Zuckerberg's and Satya Nadella's recent comments about AI?
                </button>
                <button className="bg-white rounded-md h-14 md:h-16 px-2 flex flex-col justify-center text-left">
                    How many new large deals did ServiceNow sign in the last quarter?
                </button>
                <button className="bg-white rounded-md h-14 md:h-16 px-2 flex flex-col justify-center text-left">
                    Write me a detailed description of all of MercadoLibre segments and products.
                </button>
                <button className="bg-white rounded-md h-14 md:h-16 px-2 flex flex-col justify-center text-left">
                    How have Amazon's focus areas changed?
                </button>
            </div>
            <Searchbar />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
        </div>
      </div>
    </div>
  )
}
