'use client'
import { useState } from 'react'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Footer() {
    const [input, setInput] = useState("");

    function getSubmitButton() {
        if(input.length > 0) {
            return(
                <button className="absolute top-[15%] left-2 bg-black w-8 h-8 rounded-full flex justify-center items-center">
                    <svg stroke="#FFFFFF" fill="#FFFFFF" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path></svg>
                </button>
            )
        } else {
            return(
                <button disabled className="absolute top-[15%] left-2 bg-white w-8 h-8 rounded-full flex justify-center items-center cursor-not-allowed">
                    <svg stroke="#777169" fill="#777169" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"></path></svg>
                </button>
            )
        }
    }

    return(
        <footer className="pb-12">
            <div className={`${jakartaSans.className} relative px-24 py-48 -mt-12 bg-white rounded-3xl mx-4 text-black md:flex md:justify-evenly md:row`}>
                <div className="col-md-5 offset-md-1 mb-8 md:mb-3 w-full">
                    <h2 className="text-3xl leading-normal">Stay informed with<br />our newsletter.</h2>
                    <p className="text-greyText mt-1 md:mt-4">Weekly earnings, insights, research & news.</p>
                    <form action="#" method="POST">
                        <div className="relative z-50 mt-2.5 h-12">
                            {getSubmitButton()}
                            <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setInput(e.target.value)}
                            className={`${jakartaSans.className} flex flex-col justify-center h-full bg-grey w-80 rounded-full border-0 px-12 py-2 text-gray-900 placeholder:text-greyText placeholder:md:text-base placeholder:text-sm shadow-inner focus:outline-none`}
                            />
                        </div>
                    </form>
                </div>
                <div className="flex gap-16 md:ml-0 -ml-3">
                    <div className="col-6 col-md-2 mb-3">
                        <h5 className="text-greyText text-xs tracking-wider mb-3">COMPANY</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">LinkedIn</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Twitter/X</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5 className="text-greyText text-xs tracking-wider mb-3">PRODUCT</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Enterprise</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5 className="text-greyText text-xs tracking-wider mb-3">RESOURCES</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Affiliater</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Newsletter</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${jakartaSans.className} flex flex-col md:flex-row py-3 px-6 border-top text-greyText text-xs gap-y-3`}>
                <div className="flex flex-col md:flex-row gap-x-5 w-5/6 whitespace-nowrap gap-y-2">
                    <div className="flex md:flex-row flex-col gap-x-1 gap-y-1">
                        <p>Privacy Policy</p>
                        <p className="text-veryLightGrey md:visible invisible md:h-full h-0">|</p>
                        <p>Terms of Service</p>
                    </div>
                    <p>© 2024 Stratosphere Technology Inc. All rights reserved.</p>
                </div>
                <div className="w-full flex gap-2 md:justify-end">
                    <button className="hover:bg-grey w-7 h-7 rounded-md flex items-center justify-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#777169" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                    </button>
                    <button className="hover:bg-grey w-7 h-7 rounded-md flex items-center justify-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#777169" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg>
                    </button>
               </div>
            </div>
        </footer>
    )
}
