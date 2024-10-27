import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

const navigation = [
  { name: 'PRICING', href: '#', current: false },
  { name: 'API', href: '#', current: false },
  { name: 'LOGIN', href: '#', current: false },
  { name: 'Sign Up Free', href: '#', current: true },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className={`${jakartaSans.className} mt-4`}>
        <Disclosure as="nav" className="bg-darkWhite">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="mx-2 group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
            </div>
            <div className="mx-12 flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <button className="flex flex-shrink-0 items-center">
                <img
                    alt="FinChat.io"
                    src="https://finchat.io/_next/image/?url=%2Fassets%2Ffinchat-logos%2Ffinchat-logo-wordmark-light.png&w=750&q=75"
                    className="h-8 w-auto"
                />
                </button>
                <div className="hidden sm:ml-6 sm:block w-full">
                <div className="flex space-x-4 justify-end">
                    {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                        item.current ? 'bg-grey text-black px-4 hover:bg-darkGrey' : 'text-greyText hover:opacity-50 px-3',
                        'rounded-full py-2 text-sm font-semibold tracking-wide',
                        )}
                    >
                        {item.name}
                    </a>
                    ))}
                </div>
                </div>
            </div>
            </div>
        </div>

        <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
                <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                    item.current ? 'bg-grey text-black' : 'text-greyText hover:opacity-50',
                    'block rounded-md px-3 py-2 text-base font-semibold tracking-wide',
                )}
                >
                {item.name}
                </DisclosureButton>
            ))}
            </div>
        </DisclosurePanel>
        </Disclosure>
    </div>
  )
}
