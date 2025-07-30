'use client';

import { crewModel } from '@/models/crewModel';
import { slugify } from '@/utils/slugify';
import { useRouter } from 'next/navigation';

type CrewListProps = {
    crew: crewModel;
};

export function CrewList({ crew }: CrewListProps) {
    const router = useRouter();
    return (
        <ul className='flex gap-6'>
            <li onClick={() => router.push('/crew/Douglas-Hurley')}>
                <div
                    className={`w-[10px] h-[10px] rounded-full cursor-pointer  ${
                        slugify(crew.name) === 'douglas-hurley'
                            ? 'bg-white'
                            : 'bg-white/50'
                    }`}
                ></div>
            </li>
            <li onClick={() => router.push('/crew/Mark-Shuttleworth')}>
                <div
                    className={`w-[10px] h-[10px] rounded-full cursor-pointer  ${
                        slugify(crew.name) === 'mark-shuttleworth'
                            ? 'bg-white'
                            : 'bg-white/50'
                    }`}
                ></div>
            </li>
            <li onClick={() => router.push('/crew/Victor-Glover')}>
                <div
                    className={`w-[10px] h-[10px] rounded-full cursor-pointer  ${
                        slugify(crew.name) === 'victor-glover'
                            ? 'bg-white'
                            : 'bg-white/50'
                    }`}
                ></div>
            </li>
            <li onClick={() => router.push('/crew/Anousheh-Ansari')}>
                <div
                    className={`w-[10px] h-[10px] rounded-full cursor-pointer  ${
                        slugify(crew.name) === 'anousheh-ansari'
                            ? 'bg-white'
                            : 'bg-white/50'
                    }`}
                ></div>
            </li>
        </ul>
    );
}
