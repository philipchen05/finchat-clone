import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export default function Customize() {
    return(
        <div className="flex lg:flex-row flex-col-reverse items-center gap-y-20 mx-12 md:mx-24">
            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcustomizable-mockup.png&w=2048&q=75" className="h-56 md:h-80 lg:h-96" />
            <div className="flex flex-col justify-center gap-y-4 md:ml-36 w-full px-28 md:px-0">
                <h1 className={`${jakartaSans.className} text-balance tracking-wide leading-none text-gray-900  text-4xl`}>
                    Your own customizable<br />terminal.
                </h1>
                <h3 className={`${jakartaSans.className} text-balance tracking-wide leading-relaxed text-gray-900 text-base`}>
                    <span className="bg-highlighter">Easily track what matters to you</span>. Our intuitive platform gives you the flexibility to customize your experience and auto-save your research.
                </h3>
            </div>
        </div>
    )
}
