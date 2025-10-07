"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { data } from "../data/leaderboard";

const loopedData = [...data, ...data];

export default function Leaderboard() {
	const controls = useAnimation();
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const startAnimation = async () => {
			while (true) {
				await controls.start({
					y: "-50%", // scroll halfway (since we doubled list)
					transition: {
						duration: 50, // speed (+: slow) (-: fast)
						ease: "linear",
					},
				});
				await controls.set({ y: 0 }); // reset to start instantly
			}
		};

		startAnimation();
	}, [controls]);

	return (
		<div className="w-full mx-auto text-white md:h-[700px] md:px-4">
			{/* Header */}
			<div className="grid grid-cols-3 content-center place-items-center font-bold text-lg mb-5 md:p-4">
				<div className="text-sm pt-3 text-[#FFD5A3] uppercase md:font-extrabold md:text-xl md:pt-4">
					Ranking
				</div>
				<div className="text-sm pt-3 text-[#FFD5A3] uppercase md:font-extrabold md:text-xl md:pt-4">
					Score
				</div>
				<div className="text-sm pt-3 text-[#FFD5A3] uppercase md:font-extrabold md:text-xl md:pt-4">
					User ID
				</div>
			</div>

			{/* Scrollable container */}
			<div
				ref={containerRef}
				className="h-64 mx-auto w-[95%] md:w-full md:h-[500px] overflow-hidden rounded-lg relative"
			>
				<motion.div animate={controls} className="flex flex-col">
					{loopedData.map((item, i) => (
						<div
							key={i}
							className="grid grid-cols-3 items-center place-items-center py-2 px-4 mb-2  border-b border-[#FFCB8D]"
						>
							<div className="bg-[#1D1713] w-full flex items-center md:w-[120px] rounded-full border border-[#E85300]">
								<div className="p-1 md:p-3 bg-[#E85300] md:h-[40px] md:w-[50px] rounded-full flex items-center justify-center">
									<Image
										src="/img/medal.png"
										width={20}
										height={20}
										alt="medal"
										className="h-auto w-4 md:w-[31px]"
									/>
								</div>
								<span className="px-2 md:text-2xl text-[#FFCB8D] font-bold md:ml-5">
									{item.rank}
								</span>
							</div>
							<span>{item.score}</span>
							<div className="bg-[#1D1713] w-full flex items-center md:w-[150px] rounded-full border border-[#E85300]">
								<div className="p-1 md:p-3 bg-[#E85300] h-6 w-6 md:h-[40px] md:w-[50px] rounded-full flex items-center justify-center">
									<span className="text-xs md:text-base">{item.rank}</span>
								</div>
								<span className="ml-1 md:text-md text-[#FFCB8D] font-bold md:ml-2">
									{item.user}
								</span>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
