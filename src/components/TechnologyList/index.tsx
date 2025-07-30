'use client';

import { technologyModel } from '@/models/technologyModel';
import { slugify } from '@/utils/slugify';
import { useRouter } from 'next/navigation';

type TechnologyListProps = {
    technology: technologyModel;
};

export function TechnologyList({ technology }: TechnologyListProps) {
    const router = useRouter();

    return (
        <ul className='flex flex-row gap-8 lg:flex-col'>
            <li onClick={() => router.push('/technology/launch-vehicle')}>
                <div
                    className={`${
                        slugify(technology.name) === 'launch-vehicle'
                            ? 'bg-white'
                            : 'bg-transparent border-white/30 text-white'
                    } rounded-full border w-10 h-10 flex justify-center items-center cursor-pointer lg:w-20 lg:h-20 `}
                >
                    <span className='lg:text-[32px]'>1</span>
                </div>
            </li>
            <li onClick={() => router.push('/technology/spaceport')}>
                <div
                    className={`${
                        slugify(technology.name) === 'spaceport'
                            ? 'bg-white'
                            : 'bg-transparent border-white/30 text-white'
                    } rounded-full border w-10 h-10 flex justify-center items-center cursor-pointer lg:w-20 lg:h-20`}
                >
                    <span className='lg:text-[32px]'>2</span>
                </div>
            </li>
            <li onClick={() => router.push('/technology/space-capsule')}>
                <div
                    className={`${
                        slugify(technology.name) === 'space-capsule'
                            ? 'bg-white'
                            : 'bg-transparent border-white/30 text-white'
                    } rounded-full border w-10 h-10 flex justify-center items-center cursor-pointer lg:w-20 lg:h-20`}
                >
                    <span className='lg:text-[32px]'>3</span>
                </div>
            </li>
        </ul>
    );
}
