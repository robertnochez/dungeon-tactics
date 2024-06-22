/*
import React from "react";
import Image from "next/image";  // Correct import for Next.js Image component
import { Noto_Serif } from "next/font/google";  // Assuming correct usage of next/font/google
import './Titlescreen.css';

const notoSerif = Noto_Serif({ subsets: ['latin'] });

const Page = () => {
    return (
        <div className="NotoSerif">
            <div className="sticky-bar-top">
            <Image
                src="/assets/dt-logo-black.png"
                alt="Dungeon Tactics Logo"
                width={75}
                height={75}
            />
            </div>
            <main>
            <h1>Welcome to My Next.js App</h1>
            <p>This is the default page.</p>
            </main>
      </div>
      );
};

export default Page;
*/


//SIMPLE PAGE FORM
import './Titlescreen.css';

const Page = () => {
    return (
        <div className="titlescreen-container"></div>
    );
};

export default Page;

