import Tweet from "./tweet"
import Quote from "./quote"
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Testimonials() {
    return(
        <div className="mt-32">
            <h1 className={`${spaceGrotesk.className} text-center text-balance tracking-wide leading-none mx-2 font-semibold text-gray-900 text-4xl sm:text-5xl md:text-6xl`}>
                Trusted by 150,000+ investors & organizations.
            </h1>
            <div className="overflow-hidden">
                <div className="mb-40 mt-20 flex w-[500%] animate-scroll2 justify-center items-centerspace-x-4 gap-12 place-items-center">
                    <div className="max-w-3xl grid grid-cols-4 grid-rows-3 gap-6 w-8/12">
                        <div className="row-span-2 flex justify-center pt-[25%]">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbcg.png&w=1920&q=75" alt="BCG" className="h-10" />
                        </div>
                        <div className="row-span-2 col-span-3 pt-12">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fmatt.jpg&w=256&q=75" name="Matt Ober" position="General Partner, Social Leverage." company="Ex-Third Point & Bloomberg" quote="Few tools I have come across in the last 15 years that I think are true game changers. FinChat makes investment research so much more efficient. The capabilities and use cases are" />
                        </div>
                        <div className="row-span-1 col-span-3">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fthomas.jpg&w=2048&q=75" name="Thomas Chua" username="SteadyCompound" content="The one platform that made my life 10× easier." comments={3} shares={1} likes={27} bookmarks={8} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fmckinsey.png&w=1920&q=75" alt="McKinsey" className="h-12" />
                        </div>
                    </div>
                    <div className="max-w-3xl grid grid-cols-6 grid-rows-3 gap-6 w-8/12">
                        <div className="row-span-1 col-span-5">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fbill.jpg&w=2048&q=75" name="Bill Brewster" username="BillBrewsterTBB" content="This Team has designed a great product and takes data quality very seriously." comments={1} shares={2} likes={3} bookmarks={8} />
                        </div>
                        <div className="flex justify-center pt-[25%]">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcfi.png&w=1920&q=75" alt="CFI" className="h-12" />
                        </div>
                        <div className="flex justify-center">  
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fstoller.png&w=1920&q=75" alt="Stoller" className="w-16 h-20" />
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Ftd.png&w=1920&q=75" alt="TD" className="h-16" />
                        </div>
                        <div className="row-span-2 col-span-3 pt-12 px-5">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fwyatt.jpg&w=256&q=75" name="Wyatt Sparks" position="Portfolio Manager" company="Sea Meadow Capital" quote="I've enjoyed using FinChat to source opportunities within my investable universe. The whole team is responsive to client feedback regarding coverage. A great resource for managers." />
                        </div>
                    </div>
                    <div className="max-w-3xl grid grid-cols-4 grid-rows-3 gap-6 w-8/12">
                        <div className="row-span-1 col-span-3">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fbrian.jpg&w=2048&q=75" name="Brian Feroldi" username="BrianFeroldi" content="The most intuitive platform I've ever seen for tracking business fundamentals" comments={8} shares={47} likes={475} bookmarks={301} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fsvn.png&w=1920&q=75" alt="SVN" className="h-20" />
                        </div>
                        <div className="row-span-2 flex justify-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdelorean.png&w=1920&q=75" alt="DeLorean" className="h-32 rounded-xl" />
                        </div>
                        <div className="flex items-center justify-center row-span-2 col-span-3 pt-12">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fjesper.jpg&w=256&q=75" name="Jesper Jensen" position="Principal." company="Allianz" quote="It's amazing - like having a Bloomberg terminal at your fingertips." />
                        </div>
                    </div>
                    <div className="max-w-3xl grid grid-cols-3 grid-rows-2 gap-6 w-7/12">
                        <div className="flex items-center justify-center col-span-3 pt-12">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Flinas.jpg&w=256&q=75" name="Linas Beliūnas" position="Linas' Newsletter" company="Read by 180,000 investors" quote="FinChat is a generative AI tool that will become the most powerful equity analyst ever." />
                        </div>
                        <div className="row-span-2 flex justify-center"> 
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbaskin.png&w=1920&q=75" alt="Baskin" className="h-14" />
                        </div>
                        <div className="row-span-1 col-span-2">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fchris.jpg&w=2048&q=75" name="Chris Mayer" username="chriswmayer" content="I'm enjoying FinChat - easy to create tables and charts and put things in perspective." comments={5} shares={6} likes={111} bookmarks={32} />
                        </div>
                    </div>

                    <div className="max-w-3xl grid grid-cols-4 grid-rows-3 gap-6 w-8/12">
                        <div className="row-span-2 flex justify-center pt-[25%]">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbcg.png&w=1920&q=75" alt="BCG" className="h-10" />
                        </div>
                        <div className="row-span-2 col-span-3 pt-12">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fmatt.jpg&w=256&q=75" name="Matt Ober" position="General Partner, Social Leverage." company="Ex-Third Point & Bloomberg" quote="Few tools I have come across in the last 15 years that I think are true game changers. FinChat makes investment research so much more efficient. The capabilities and use cases are" />
                        </div>
                        <div className="row-span-1 col-span-3">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fthomas.jpg&w=2048&q=75" name="Thomas Chua" username="SteadyCompound" content="The one platform that made my life 10× easier." comments={3} shares={1} likes={27} bookmarks={8} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fmckinsey.png&w=1920&q=75" alt="McKinsey" className="h-12" />
                        </div>
                    </div>
                    <div className="max-w-3xl grid grid-cols-6 grid-rows-3 gap-6 w-8/12">
                        <div className="row-span-1 col-span-5">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fbill.jpg&w=2048&q=75" name="Bill Brewster" username="BillBrewsterTBB" content="This Team has designed a great product and takes data quality very seriously." comments={1} shares={2} likes={3} bookmarks={8} />
                        </div>
                        <div className="flex justify-center pt-[25%]">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fcfi.png&w=1920&q=75" alt="CFI" className="h-12" />
                        </div>
                        <div className="flex justify-center">  
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fstoller.png&w=1920&q=75" alt="Stoller" className="w-16 h-20" />
                        </div>
                        <div className="col-span-2 flex justify-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Ftd.png&w=1920&q=75" alt="TD" className="h-16" />
                        </div>
                        <div className="row-span-2 col-span-3 pt-12 px-5">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fwyatt.jpg&w=256&q=75" name="Wyatt Sparks" position="Portfolio Manager" company="Sea Meadow Capital" quote="I've enjoyed using FinChat to source opportunities within my investable universe. The whole team is responsive to client feedback regarding coverage. A great resource for managers." />
                        </div>
                    </div>
                    <div className="max-w-3xl grid grid-cols-4 grid-rows-3 gap-6 w-8/12">
                        <div className="row-span-1 col-span-3">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fbrian.jpg&w=2048&q=75" name="Brian Feroldi" username="BrianFeroldi" content="The most intuitive platform I've ever seen for tracking business fundamentals" comments={8} shares={47} likes={475} bookmarks={301} />
                        </div>
                        <div className="flex justify-center items-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fsvn.png&w=1920&q=75" alt="SVN" className="h-20" />
                        </div>
                        <div className="row-span-2 flex justify-center">
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fdelorean.png&w=1920&q=75" alt="DeLorean" className="h-32 rounded-xl" />
                        </div>
                        <div className="flex items-center justify-center row-span-2 col-span-3 pt-12">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fjesper.jpg&w=256&q=75" name="Jesper Jensen" position="Principal." company="Allianz" quote="It's amazing - like having a Bloomberg terminal at your fingertips." />
                        </div>
                    </div>
                    <div className="max-w-3xl grid grid-cols-3 grid-rows-2 gap-6 w-7/12">
                        <div className="flex items-center justify-center col-span-3 pt-12">
                            <Quote profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Flinas.jpg&w=256&q=75" name="Linas Beliūnas" position="Linas' Newsletter" company="Read by 180,000 investors" quote="FinChat is a generative AI tool that will become the most powerful equity analyst ever." />
                        </div>
                        <div className="row-span-2 flex justify-center"> 
                            <img src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarquee-logos%2Fbaskin.png&w=1920&q=75" alt="Baskin" className="h-14" />
                        </div>
                        <div className="row-span-1 col-span-2">
                            <Tweet profile="https://finchat.io/_next/image/?url=%2Fassets%2Fimages%2Ftestimonials%2Fchris.jpg&w=2048&q=75" name="Chris Mayer" username="chriswmayer" content="I'm enjoying FinChat - easy to create tables and charts and put things in perspective." comments={5} shares={6} likes={111} bookmarks={32} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
