import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Chat() {
    return(
        <div className={`${jakartaSans.className} flex justify-center p-48 text-chatText`}>
            <div className="flex flex-col gap-4 bg-greyBox w-[950px] h-[550px] rounded-3xl px-10 py-5">
                <div className="flex justify-end items-center gap-3">
                    <div className="flex flex-col justify-center bg-chatGrey w-[340px] h-14 rounded-xl px-5 text-lg">
                        Summarize microsoft&apos;s last quarter.
                    </div>
                    <div className="bg-chatProfile rounded-full w-10 h-10 opacity-85"></div>
                </div>
                <div className="flex items-end gap-3">
                    <div className="bg-chatProfile rounded-full w-10 h-10 opacity-85"></div>
                    <div className="mt-2 flex-col bg-chatGrey w-[400px] h-96 rounded-lg px-4 py-4 space-y-4 text-lg">
                        <div>...the company also experienced growth in various segments, including a 22% increase in Cloud revenue...</div>
                        <div>
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcompany-logos%2Fmsft.svg&w=64&q=75" className="ml-1 h-6 outline outline-borderGrey outline-8" />
                        </div>
                        <div className="flex items-end gap-2 h-52">
                            <div className="bg-barBlue w-[70px] h-[68px] rounded-sm"></div>
                            <div className="bg-barBlue w-[70px] h-[76px] rounded-sm"></div>
                            <div className="bg-barBlue w-[70px] h-[110px] rounded-sm"></div>
                            <div className="bg-barBlue w-[70px] h-[150px] rounded-sm"></div>
                            <div className="bg-barBlue w-[70px] h-[180px] rounded-sm"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-10 w-full rounded-full border-0 px-5 py-2 bg-lightGrey">
                    Ask your question...
                    <svg stroke="blue" fill="white" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <line x1="12" y1="19" x2="12" y2="5"></line>
                        <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    )
}