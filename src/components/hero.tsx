'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-darkWhite">
      <div className="isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto w-2/3">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <button className={`${jakartaSans.className} relative rounded-full mb-4 px-3 py-0.25 text-sm leading-6 bg-white text-gray-600 tracking-wide font-semibold`}>
              FinChat v4 is now live!🎉{' '}
              <a href="#" className="font-semibold">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="inline-flex mb-[4px] align-middle" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </a>
            </button>
          </div>
          <div className="text-center">
            <h1 className={`${spaceGrotesk.className} text-balance tracking-wide text-7xl mx-2 font-semibold text-gray-900 sm:text-[60px]`}>
                The future of investment research, powered by AI.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
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
