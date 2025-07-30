'use client';

import { bellefair } from '@/lib/fonts';
import { useRouter } from 'next/navigation';

export function ExplorerButton() {
    const router = useRouter();
    return (
        <div className='my-20'>
            <div className='group relative cursor-pointer h-36 w-36 sm:h-[272px] sm:w-[272px] rounded-full flex justify-center items-center'>
                <div className='absolute inset-0 rounded-full scale-125 md:scale-105 bg-white opacity-0 transition duration-800 group-hover:opacity-20'></div>
                <div
                    className='relative z-10 bg-white h-36 w-36 sm:h-[272px] sm:w-[272px] rounded-full flex justify-center items-center transition duration-300'
                    onClick={() => router.push('/destination/moon')}
                >
                    <h2
                        className={`text-lg sm:text-2xl ${bellefair.className} text-black`}
                    >
                        EXPLORE
                    </h2>
                </div>
            </div>
        </div>
    );
}
