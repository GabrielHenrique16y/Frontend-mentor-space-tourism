'use client';

import { barlow_condensed } from '@/lib/fonts';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/shared/logo.svg';
import menuIcon from '@/assets/shared/icon-hamburger.svg';
import { SideBarMobile } from '../SideBarMobile';
import { useState } from 'react';

type NavBarProps = {
    onPage: string;
};

export function NavBar({ onPage }: NavBarProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <nav className='flex justify-between items-center p-6 sm:p-0'>
                <Link href='/'>
                    <Image
                        src={logo}
                        alt='logo'
                        className='h-10 w-10 sm:mx-3'
                        width={40}
                        height={40}
                    />
                </Link>
                <Image
                    src={menuIcon}
                    alt='Menu'
                    className={`h-6 cursor-pointer block sm:hidden ${
                        isOpen && 'hidden'
                    }`}
                    height={24}
                    width={28}
                    onClick={() => setIsOpen(true)}
                />
                <ul className='gap-10 w-full justify-end hidden backdrop-blur-md bg-black/30 p-6 sm:flex'>
                    <li>
                        <Link
                            href='/'
                            className={`text-sm ${barlow_condensed.className} text-white sm:text-md md:text-lg`}
                        >
                            <span className='font-bold text-white'>00</span>{' '}
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/destination/moon'
                            className={`text-sm ${barlow_condensed.className} text-white sm:text-md md:text-lg`}
                        >
                            <span className='font-bold text-white'>01</span>{' '}
                            DESTINATION
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/crew/Douglas-Hurley'
                            className={`text-sm ${barlow_condensed.className} text-white sm:text-md md:text-lg`}
                        >
                            <span className='font-bold text-white'>02</span>{' '}
                            CREW
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='/technology/launch-vehicle'
                            className={`text-sm ${barlow_condensed.className} text-white sm:text-md md:text-lg`}
                        >
                            <span className='font-bold text-white'>03</span>{' '}
                            TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </nav>
            <SideBarMobile
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onPage={onPage}
            />
        </>
    );
}
