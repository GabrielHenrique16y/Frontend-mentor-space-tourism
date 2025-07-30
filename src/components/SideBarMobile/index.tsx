import Link from 'next/link';
import Image from 'next/image';
import iconClose from '@/assets/shared/icon-close.svg';
import { barlow_condensed } from '@/lib/fonts';

type SideBarProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onPage: string;
};

export function SideBarMobile({ isOpen, setIsOpen, onPage }: SideBarProps) {
    return (
        <aside
            className={`fixed top-0 right-0 h-full w-64 bg-black/40 transform transform-transform duration-300 z-50 sm:hidden backdrop-blur-xl ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className='pl-8'>
                <div className='flex justify-end items-center mb-6 py-8 px-4'>
                    <button
                        className='text-xl text-white cursor-pointer'
                        onClick={() => setIsOpen(false)}
                    >
                        <Image alt='Close button' src={iconClose}></Image>
                    </button>
                </div>
                <nav className='space-y-4 flex flex-col'>
                    <Link
                        href='/'
                        className={`text-lg ${barlow_condensed.className} ${
                            onPage === 'home'
                                ? 'border-r-4 border-white '
                                : 'border-0'
                        } text-white hover:border-r-4 hover:border-white/50 transition duration-300`}
                    >
                        <span className='font-bold text-white'>00</span> HOME
                    </Link>
                    <Link
                        href='/destination/moon'
                        className={`text-lg ${barlow_condensed.className} ${
                            onPage === 'destination'
                                ? 'border-r-4 border-white '
                                : 'border-0'
                        } text-white hover:border-r-4 hover:border-white/50 transition duration-300`}
                    >
                        <span className='font-bold text-white'>01</span>{' '}
                        DESTINATION{' '}
                    </Link>
                    <Link
                        href='/crew/Douglas-Hurley'
                        className={`text-lg ${barlow_condensed.className} ${
                            onPage === 'crew'
                                ? 'border-r-4 border-white'
                                : 'border-0'
                        } text-white hover:border-r-4 hover:border-white/50 transition duration-300`}
                    >
                        <span className='font-bold text-white'>02</span> CREW{' '}
                    </Link>
                    <Link
                        href='/technology/launch-vehicle'
                        className={`text-lg ${barlow_condensed.className} ${
                            onPage === 'technology'
                                ? 'border-r-4 border-white '
                                : 'border-0'
                        } text-white hover:border-r-4 hover:border-white/50 transition duration-300`}
                    >
                        <span className='font-bold text-white'>03</span>{' '}
                        TECHNOLOGY{' '}
                    </Link>
                </nav>
            </div>
        </aside>
    );
}
