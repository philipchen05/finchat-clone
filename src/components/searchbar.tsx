'use client'

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Searchbar() {return (
    <form action="#" method="POST">
        <div className="mt-2.5">
            <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Search your next investment idea..."
            className={`${jakartaSans.className} flex flex-col justify-center h-12 md:h-14 bg-gradient-to-r from-amber-100 to-orange-300 w-full rounded-full border-0 px-5 py-2 text-gray-900 placeholder:text-greyText placeholder:md:text-base placeholder:text-sm shadow-inner`}
            />
        </div>
      </form>
  )
}
