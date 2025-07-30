import { NavBar } from '@/components/NavBar';
import { barlow, barlow_condensed, bellefair } from '@/lib/fonts';
import { destinationRepository } from '@/repositories/destinations';
import Image from 'next/image';
import Link from 'next/link';

type DestinationPageProps = {
    params: Promise<{ name: string }>;
};

export default async function DestinationPage({
    params,
}: DestinationPageProps) {
    const { name } = await params;
    const destination = await destinationRepository.findBydestinationName(name);

    return (
        <>
            <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] md:bg-[url('/assets/destination/background-destination-desktop.jpg')]">
                <NavBar onPage='destination' />
                <main className='flex flex-col items-center p-6 sm:p-10'>
                    <h2
                        className={`pb-6 gap-6 flex text-white text-md ${barlow_condensed.className} sm:text-xl sm:self-start md:pb-10 md:text-3xl`}
                    >
                        <span className='opacity-25'>01</span> PICK YOUR
                        DESTINATION
                    </h2>
                    <div className='flex flex-col justify-center items-center md:flex-row md:justify-evenly'>
                        <div className='mb-8'>
                            <Image
                                src={destination.images.png}
                                alt={destination.name}
                                width={150}
                                height={150}
                                className='w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px]'
                            />
                        </div>
                        <div className='flex flex-col sm:max-w-[80%] md:max-w-[50%]'>
                            <div className='flex justify-center md:justify-start'>
                                <ul className='flex gap-6'>
                                    <li
                                        className={`text-md text-white border-b-4 hover:border-white/25 ${
                                            barlow_condensed.className
                                        } ${
                                            name.toLowerCase() === 'moon'
                                                ? 'border-white'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        <Link href='/destination/moon'>
                                            MOON
                                        </Link>
                                    </li>
                                    <li
                                        className={`text-md text-white border-b-4 hover:border-white/25 ${
                                            barlow_condensed.className
                                        } ${
                                            name.toLowerCase() === 'mars'
                                                ? 'border-white'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        <Link href='/destination/mars'>
                                            MARS
                                        </Link>
                                    </li>
                                    <li
                                        className={`text-md text-white border-b-4 hover:border-white/25 ${
                                            barlow_condensed.className
                                        } ${
                                            name.toLowerCase() === 'europa'
                                                ? 'border-white'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        <Link href='/destination/europa'>
                                            EUROPA
                                        </Link>
                                    </li>
                                    <li
                                        className={`text-md text-white border-b-4 hover:border-white/25 ${
                                            barlow_condensed.className
                                        } ${
                                            name.toLowerCase() === 'titan'
                                                ? 'border-white'
                                                : 'border-transparent'
                                        }`}
                                    >
                                        <Link href='/destination/titan'>
                                            TITAN
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col justify-center items-center py-10 sm:mx-auto md:justify-start md:items-start gap-4'>
                                <h2
                                    className={`text-[56px] ${bellefair.className} text-white sm:text-[80px] md:text-[96px]`}
                                >
                                    {destination.name.toUpperCase()}
                                </h2>
                                <p
                                    className={`text-blue-300 text-[15px] text-center md:text-start ${barlow.className} md:text-lg`}
                                >
                                    {destination.description}
                                </p>
                            </div>
                            <div className='bg-white opacity-25 h-[1px]'></div>
                            <div className='flex flex-col py-10 gap-6 justify-center items-center sm:flex-row sm:justify-evenly'>
                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <h2
                                        className={`text-blue-300 ${barlow_condensed.className} text-md leading-0.5`}
                                    >
                                        AVG. DISTANCE
                                    </h2>
                                    <h2
                                        className={`text-3xl ${bellefair.className} text-white`}
                                    >
                                        {destination.distance.toUpperCase()}
                                    </h2>
                                </div>

                                <div className='flex flex-col gap-5 justify-center items-center'>
                                    <h2
                                        className={`text-blue-300 ${barlow_condensed.className} text-md leading-0.5`}
                                    >
                                        Est. travel time
                                    </h2>
                                    <h2
                                        className={`text-3xl ${bellefair.className} text-white`}
                                    >
                                        {destination.travel.toUpperCase()}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
