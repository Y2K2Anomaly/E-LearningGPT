import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {};

const Hero: FC<Props> = (props) => {
    return (
        <div className="w-screen h-screen flex items-center">
            <div className="ml-1 flex flex-col lg:flex-row relative top-[50px] lg:top-0 h-[400px] lg:h-[600px] w-full lg:w-[98vw] md:h-[50vh] md:w-[50vw] hero_animation rounded-full">
                <div className="lg:w-[50%] flex lg:min-h-screen items-center justify-center pt-[70px] lg:pt-0 z-10">
                    <Image
                        src={require("../../../public/assets/e-learningGPT.png")}
                        alt="_logo"
                        className='object-contain max-w-[70%] w-[40%] lg:max-w-[65%] h-auto z-10 rounded-lg'
                    />
                </div>
                <div className="lg:w-[50%] flex flex-col items-center lg:mt-8 text-center lg:text-left mt-[150px]">
                    <h2 className="dark:text-white text-[#00000c7] text-4xl lg:text-6xl font-semibold px-3 w-full lg:w-[600px] lg:leading-[75px] text-center">
                        Improve Your Online Learning Experience Better Instantly
                    </h2>
                    <br />
                    <p className="dark:text-[#edfff4] text-[#000000ac] font-semibold text-lg lg:w-[90%] md:w-[90%]">
                        We have 20+ Online courses & 500K+ Online registered students. Find your desired courses from them.
                    </p>
                    <br />
                    <br />
                    <div className="lg:w-[90%] md:w-[90%] w-[90%] h-[50px] flex items-center bg-transparent relative">
                        <input
                            type="search"
                            placeholder="Search Courses..."
                            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-l-[5px] p-2 w-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-xl font-semibold"
                        />
                        <div className="flex items-center justify-center w-[50px] cursor-pointer h-[50px] bg-[#39c1f3] rounded-r-[5px]">
                            <BiSearch className="text-white" size={30} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="lg:w-[90%] md:w-[90%] w-[90%] flex items-center">
                        <Image
                            src={require("../../../public/assets/client-1.webp")}
                            alt=''
                            className="rounded-full"
                        />
                        <Image
                            src={require("../../../public/assets/client-2.webp")}
                            alt=''
                            className="rounded-full ml-[-20px]"
                        />
                        <Image
                            src={require("../../../public/assets/client-3.webp")}
                            alt=''
                            className="rounded-full ml-[-20px]"
                        />
                        <p className="font-semibold dark:text-[#edfff4] text-[#000000b3] lg:pl-3 text-lg w-[70%]">
                            500K+ People already trusted us.{' '}
                            <Link
                                href="/courses"
                                className="dark:text-[#46e256] text-[crimson]"
                            >
                                View courses.
                            </Link>{' '}
                        </p>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Hero;
