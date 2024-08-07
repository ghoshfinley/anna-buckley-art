import React from 'react';
import Image from 'next/image';
import background from "../public/background.gif"
import logo from "../public/logo.png"
import website from "../public/website.png"
import instagram from "../public/instagram.png"
import email from "../public/email.png"
import Link from 'next/link';


const Home = () => {
  return (
    <div className="w-full flex flex-row justify-end max-w-screen-2xl">
        <div className="relative flex flex-col justify-center flex-grow">
            <div className="flex flex-row justify-center -mb-12 z-10">
                <Image src={logo} className="w-6/12"/>
            </div>
        <Image src={background} className='bg-img'/>
        <div className="flex justify-center h-content w-auto max-w-80vw space-x-8 -mt-10">
            <Link href="https://www.annabuckley.art/" target='blank'>
                <Image 
                    className="w-80 h-auto pt-[30px] cursor-pointer"
                    src={website}
                    alt="website"
                />
            </Link>
            <Link href="https://www.instagram.com/annabuckleyart/" target='blank'>
                <Image 
                    className="w-80 h-auto cursor-pointer"
                    src={instagram}
                    alt="instagram"
                />
            </Link>
            <Link href={"mailto:annabuckleyart@gmail.com"}>
                <Image 
                    className="w-96 h-auto pt-[30px] cursor-pointer"
                    src={email}
                    alt="email"
                />
            </Link>
        </div>
        </div>
    </div>
  );
};

export default Home;
