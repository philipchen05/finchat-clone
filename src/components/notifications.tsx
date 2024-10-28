import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Notifications() {
    return(
        <div className={`${jakartaSans.className} relative w-screen h-max overflow-hidden text-sm`}>
            <div className="flex gap-[460px]">
                <div className="ml-7 mt-28">
                    <div className="flex gap-3 items-end">
                        <div className="flex items-center bg-greyBox w-72 h-14 rounded-lg rounded-br-none px-4">
                            Summarize Microsoft's last quarter...
                        </div>
                        <div className="bg-greyBox rounded-full w-8 h-8 opacity-85"></div>
                    </div>
                    <div className="mt-2 flex-col bg-greyBox w-72 h-64 rounded-lg rounded-bl-none px-4 py-4 space-y-4">
                        <div>...the company also experienced growth in various segments, including a 22% increase in Cloud revenue...</div>
                        <div>
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcompany-logos%2Fmsft.svg&w=64&q=75" className="ml-1 h-6 outline outline-borderGrey outline-8" />
                        </div>
                        <div className="flex items-end gap-2 h-1.3">
                            <div className="bg-barBlue w-16 h-[48px] rounded-sm"></div>
                            <div className="bg-barBlue w-16 h-[72px] rounded-sm"></div>
                            <div className="bg-barBlue w-16 h-[80px] rounded-sm"></div>
                            <div className="bg-barBlue w-16 h-[108px] rounded-sm"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-[400px]">
                    <div className="relative -z-50 flex items-center bg-greyBox w-72 h-20 rounded-lg rounded-br-none px-4 opacity-95">
                        ...see the progress from our membership growth in Q2...
                    </div>
                    <div className="mt-2 flex-col bg-greyBox w-72 h-48 rounded-lg rounded-bl-none px-4 py-5 space-y-4 font-semibold">
                        <div className="flex gap-6 items-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcompany-logos%2Fnflx.png&w=64&q=75" className="ml-1 h-7 outline outline-borderGrey outline-8" />
                            <div>Membership Count</div>
                        </div>
                        <div className="flex items-end gap-2 h-1.3">
                            <div className="bg-barRed w-16 h-[48px] rounded-sm"></div>
                            <div className="bg-barRed w-16 h-[72px] rounded-sm"></div>
                            <div className="bg-barRed w-16 h-[80px] rounded-sm"></div>
                            <div className="bg-barRed w-16 h-[108px] rounded-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className={`${spaceGrotesk.className} -z-50 absolute top-80 text-center text-balance tracking-wide leading-none mx-2 font-semibold text-gray-900 text-4xl sm:text-5xl md:text-6xl`}>
                The new standard for fundamental research.
            </h1>
            <div className="absolute top-[395px] left-[-14px] bg-lightGrey rounded-full w-8 h-8"></div>
            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdark-mockups%2Flvmh-chart.png&w=2048&q=75" className="-z-50 absolute top-80 opacity-95 h-56 md:h-72" />
            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdark-mockups%2Fnotifications.png&w=2048&q=75" className="-z-50 absolute top-40 opacity-95 left-[825px] ml-12 h-36 md:h-48" />
            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fdark-mockups%2Ftable.png&w=2048&q=75" className="absolute top-72 left-[960px] ml-12 h-36 md:h-48" />
        </div>
    )
}