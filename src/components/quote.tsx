import { Plus_Jakarta_Sans } from 'next/font/google'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

interface Props {
    profile: string;
    name: string;
    position: string;
    company: string;
    quote: string;
}

export default function Quote(props: Props) {
    return(
        <div className={`${jakartaSans.className} flex w-full items-center flex-col gap-1 bg-white rounded-lg p-4 pt-0 shadow-lg text-greyText text-center`}>
            <img src={props.profile} className="mb-3 h-24 w-24 rounded-full -mt-12" />
            <p className="text-black">&quot;{props.quote}&quot;</p>
            <p>{props.name}</p>
            <p>{props.position}</p>
            <p>{props.company}</p>
        </div>
    )
    

}
