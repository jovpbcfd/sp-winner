import Image from "next/image";
import Leaderboard from "../../components/leaderboard";

export default function Home() {
	return (
		<div>
			<div>
				<Image
					src="/img/sp-main-bannerl.jpg"
					priority
					width={1444}
					height={444}
					alt="banner"
					className="w-full h-auto"
				/>
			</div>
			<div className="bg-[url(/img/hero_bg.png)] bg-cover bg-no-repeat py-5 md:py-10">
				<div className="max-w-[1230px] mx-auto text-balance text-center mb-2 md:mb-5">
					<h1 className="md:text-3xl font-semibold text-[#ffffff]">
						<span className="text-[#ffcb8d] font-extrabold">TOP 50:</span>{" "}
						Please follow the steps below: <br /> The inviter must deposit at
						least ₱300 from the time they join SwertePlus.
					</h1>
					<h2 className="text-[#ffcb8d] font-extrabold my-5 md:mt-10 md:mb-4 md:text-3xl">
						Invite more than 5 qualified players. <br />
						<span>(2025/10/06~2025/10/12)</span>
					</h2>
					<p className="text-[#ffffff] fonb-bold md:text-[20px]">
						The criteria for a qualified player is: the invited user must
						deposit ₱300 <br /> and reach a turnover of ₱3,000.
					</p>
				</div>
				<div className="md:pt-2 md:pb-5">
					<div className="max-w-[1230px] mx-auto">
						<Image
							src="/img/RANKING_AND_PRIZE.png"
							width={800}
							height={1286}
							className="w-auto h-auto mx-auto"
							alt="Ranking and prize"
						/>
					</div>
				</div>

				<div className="bg-[url(/img/SP_MILESTONE_WEBSITE_BACKGROUND.png)] bg-cover bg-no-repeat md:pb-30">
					<div className="max-w-[1230px] mx-auto text-balance text-center py-5 md:pt-20">
						<p className="text-[16px] md:text-[26px] text-[#ffffff]">
							REFER TO WIN — INVITE FOR GLORY
						</p>
						<p className="my-2 text-[#ffcb8d] font-extrabold md:text-2xl md:my-4">
							₱300,000 + PRIZE POOL <br />
							GRAND PRIZE ₱100,000 CASH
						</p>
						<p className="pt-2 md:text-[26px] text-[#ffffff]">
							OCTOBER 6 - OCTOBER 12
						</p>
					</div>

					<div className="max-w-[800px] mx-auto md:pt-10">
						<div className="flex items-center justify-between p-2 md:pb-5">
							<p className="md:text-2xl font-extrabold text-[#ffffff]">
								LIVE LEADERBOARD
							</p>
							<p className="md:text-2xl font-extrabold text-[#ffffff]">
								PAST RESULT
							</p>
						</div>
						<div className="bg-[url(/img/leaderboard.png)] bg-cover md:bg-contain bg-no-repeat">
							<Leaderboard />
						</div>
					</div>
				</div>

				<div className="bg-[url(/img/footer_bg.png)] bg-cover bg-no-repeat">
					<div className="max-w-[800px] mx-auto text-pretty p-2 md:py-10">
						<p className="text-[#ffcb8d] font-extrabold md:text-2xl md:py-5">
							Terms & Conditions:
						</p>

						<div>
							<p className="text-[#ffffff] mb-2 md:text-[18px] md:mb-5">
								1.Every day, the number of “qualified players” invited on the
								previous day will be counted, and the daily leaderboard will be
								announced.
							</p>
							<p className="text-[#ffffff] mb-2 md:text-[18px] md:mb-5">
								2.To be eligible for the final prize, you must invite at least
								five qualified players.
							</p>
							<p className="text-[#ffffff] mb-2 md:text-[18px] md:mb-5">
								3.Prize winnings must reach a 1x turnover in any game before
								withdrawal.
							</p>
							<p className="text-[#FFCB8D] mb-2 md:text-[18px] md:mb-5">
								4.For winners, our referral support staff will contact you,
								collect your information, and then distribute the prize.
							</p>
							<p className="text-[#FFCB8D] mb-2 md:text-[18px] md:mb-5">
								5.We will make reasonable efforts to contact winners within
								three (3) days. However, if a winner does not respond within
								this period, fails to meet any eligibility requirements, or
								cannot comply with the promotion terms and conditions, their
								eligibility will be forfeited.
							</p>
							<p className="text-[#ffffff] mb-2 md:text-[18px] md:mb-5">
								6.Each player is only allowed to register one account with
								SwertePlus. If we detect that a player has created duplicate
								accounts, SwertePlus reserves the right to terminate the
								account(s) and permanently freeze the funds. (Multiple
								registrations or logins from the same device, fingerprint, or IP
								are strictly prohibited.)
							</p>
							<p className="text-[#ffffff] mb-2 md:text-[18px] md:mb-5">
								7.SwertePlus reserves the right to change, modify, or terminate
								this promotion or any part of it at any time without prior
								notice.
							</p>
						</div>
						<p className="text-[#ffffff] mb-2 pt-5 text-center md:pt-10 md:font-semibold">
							© 2025 SWERTEPLUS COPYRIGHTS. ALL RIGHTS RESERVED
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
