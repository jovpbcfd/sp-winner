"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Menu() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="26"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="text-white"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setTimeout(() => {
				setIsSticky(window.scrollY > 520);
			}, 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<header
			className={`bg-[linear-gradient(to_bottom,#E85300_0%,#F9B34F_100%)] transition-all duration-300 ease-in-out ${
				isSticky && "sticky top-0 z-100 shadow-lg"
			}`}
		>
			{/* <motion.div className={`w-full max-w-[1230px] mx-auto text-white transition-all duration-300 ${isSticky ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <nav className={`hidden md:flex justify-end bg-[#252B73] text-sm py-2 px-4 transition-opacity duration-300 ${isSticky ? 'opacity-0' : 'opacity-100'}`}>
                    <Link href="#" className="px-3">PANALOBET REGISTER</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">PANALOBET LOGIN</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">PANALOBET DEPOSIT</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">PANALOBET WITHDRAWAL</Link>
                    <span>|</span>
                    <Link href="#" className="px-3">DOWNLOAD PANALOBET APP</Link>
                </nav>
            </motion.div> */}

			<motion.div
				className={`bg-[linear-gradient(to_bottom,#E85300_0%,#F9B34F_100%)] transition-shadow duration-300 shadow-lg ${
					isSticky ? "shadow-lg" : ""
				}`}
			>
				<div className="w-full max-w-[1230px] mx-auto text-white">
					<div className="flex justify-between items-center px-2 py-4 md:py-4 md:px-[22px]">
						<div>
							<Link href="/">
								<Image
									src="/img/SP_LOGO.webp"
									alt="PANALOBET"
									width={100}
									height={40}
									className="w-[100px] md:w-[150px]"
								/>
							</Link>
						</div>
						<div className="hidden md:ml-auto md:flex gap-4">
							{/* <Link
                href="#"
                className="bg-transparent px-4 py-2 rounded-full text-center
                            transition-transform transform hover:scale-105
                            border border-white
                            md:w-[150px]
                            flex items-center justify-center
                            "
              >
                SIGNUP
              </Link> */}
							{/* <Link
								href="https://www.swerteplus.ph/"
								className="bg-[linear-gradient(to_bottom,#F9B34F_0%,#FB5F2E_58%,#FB341E_81%,#FC0A0D_100%)] px-4 py-2 rounded-full shadow-md text-center
                            transition-transform transform hover:scale-105 duration-300
                            md:w-[150px]
                            flex items-center justify-center
                            "
							>
								LOGIN
							</Link> */}
						</div>
						{/* <button
							className="md:hidden text-white"
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						>
							<Menu />
						</button> */}
					</div>
				</div>
			</motion.div>

			<div
				className={`
    text-white transition-all duration-500 ease-in-out overflow-hidden
    ${
			mobileMenuOpen
				? "max-h-[500px] opacity-100 translate-y-0"
				: "max-h-0 opacity-0 -translate-y-4"
		}
  `}
			>
				<div className="flex flex-col justify-center items-center mt-4 gap-4 pb-5 mx-auto md:hidden px-2">
					{/* <Link
            href="#"
            className="bg-transparent w-full py-3 lg:px-4 rounded-full text-center
        transition-transform transform hover:scale-105
        border border-white
        md:w-[150px]
        flex items-center justify-center"
          >
            SIGNUP
          </Link> */}
					{/* <Link
						href="https://www.swerteplus.ph/"
						className="bg-[linear-gradient(to_bottom,#F9B34F_0%,#FB5F2E_58%,#FB341E_81%,#FC0A0D_100%)]
        w-full
         py-3 rounded-full shadow-md text-center lg:px-4
        transition-transform transform hover:scale-105 duration-300
        md:w-[150px]
        flex items-center justify-center"
					>
						LOGIN
					</Link> */}
				</div>
			</div>

			{/* {mobileMenuOpen && (
        <div className="text-white">
          <div className="flex flex-col justify-center items-center mt-4 gap-4 pb-5 mx-auto md:hidden px-2">
            <Link
              href="#"
              className="bg-transparent w-full px-4 py-2 rounded-full text-center
                            transition-transform transform hover:scale-105
                            border border-white
                            md:w-[150px]
                            flex items-center justify-center
                            "
            >
              SIGNUP
            </Link>
            <Link
              href="#"
              className="bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)]
              w-full
              px-4 py-2 rounded-full shadow-md text-center
                            transition-transform transform hover:scale-105 duration-300
                            md:w-[150px]
                            flex items-center justify-center
                            "
            >
              LOGIN
            </Link>
          </div>
        </div>
      )} */}

			{/* <div className="w-full max-w-[1200px] mx-auto text-white py-2 lg:py-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/img/PANALOBET-LOGO.webp"
              alt="PANALOBET"
              width={200}
              height={40}
            />
          </Link>
        </div>
        <nav
          className={` md:flex justify-center py-2 ${
            mobileMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
            >
              WHAT&apos;S NEW
            </Link>
            <Link
              href="/slots"
              className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
            >
              GAME ITEMS
            </Link>
            <Link
              href="/live-casino"
              className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
            >
              PROMOTIONS
            </Link>
            <Link
              href="/card-games"
              className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
            >
              BEGINNER TEACHING
            </Link>
            <Link
              href="/fishing-games"
              className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
            >
              ABOUT PANALABET
            </Link>
            <Link
              href="/sports"
              className="flex items-center gap-2 transition-transform transform duration-300 hover:scale-105 hover:underline"
            >
              APP DOWNLOAD
            </Link>
          </div>
          <div className="flex justify-center items-center mt-4 gap-4 mx-auto md:hidden">
            <Link
              href="#"
              className="bg-transparent px-4 py-2 rounded-full text-center
                            transition-transform transform hover:scale-105
                            border border-white
                            md:w-[150px]
                            flex items-center justify-center
                            "
            >
              SIGNUP
            </Link>
            <Link
              href="#"
              className="bg-[linear-gradient(135deg,#8EE4FF_0%,#3495FF_100%)] px-4 py-2 rounded-full shadow-md text-center
                            transition-transform transform hover:scale-105 duration-300
                            md:w-[150px]
                            flex items-center justify-center
                            "
            >
              LOGIN
            </Link>
          </div>
        </nav>
      </div> */}
		</header>
	);
}
