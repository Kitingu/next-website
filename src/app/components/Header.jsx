"use client";
import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function Header({ scrollToSection }) {
	const [headerOpen, setHeaderOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const handleScrollOrNavigate = (section) => {
		if (pathname === "/") {
			scrollToSection?.(section);
		} else {
			router.push(`/?scrollTo=${section}`);
		}
		setHeaderOpen(false);
	};

	return (
		<header className="bg-protoblue fixed w-full top-0 z-50">
			{/* Top nav */}
			<nav className="mx-auto flex container items-center justify-between p-6 lg:px-8">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5 shrink-0">
						<Image
							className="h-8 w-auto"
							src="/images/proto_logo.png"
							alt="Proto"
							width={120}
							height={40}
						/>
					</Link>
				</div>

				<div className="flex lg:hidden">
					<button
						onClick={() => setHeaderOpen(!headerOpen)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex lg:gap-x-10">
					<button
						onClick={() => handleScrollOrNavigate("discover")}
						className="text-sm font-semibold text-white"
					>
						Discover
					</button>
					<button
						onClick={() => handleScrollOrNavigate("domestic")}
						className="text-sm font-semibold text-white"
					>
						Cylinders
					</button>
					<button
						onClick={() => handleScrollOrNavigate("bulk")}
						className="text-sm font-semibold text-white"
					>
						Bulk LPG
					</button>
					<button
						onClick={() => handleScrollOrNavigate("otogas")}
						className="text-sm font-semibold text-white"
					>
						Otogas
					</button>
					<Link
						href="/manufacturing"
						className="text-sm font-semibold text-white"
					>
						Manufacturing
					</Link>
					<button
						onClick={() => handleScrollOrNavigate("esg")}
						className="text-sm font-semibold text-white"
					>
						ESG
					</button>
					<button
						onClick={() => handleScrollOrNavigate("jobs")}
						className="text-sm font-semibold text-white"
					>
						Careers
					</button>
					<Link href="/feedback" className="text-sm font-semibold text-white">
						Feedback
					</Link>
				</div>
			</nav>

			<div className="bg-protopink">
				<div className="container mx-auto py-3 px-6">
					<div className="flex items-center justify-between">
						{/* WhatsApp icon with text */}
						<div className="flex items-center gap-2">
							<a
								href="https://wa.me/254700355855"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center hover:underline"
							>
								<span className="sr-only">WhatsApp</span>
								<span className="text-white">Order cylinders via WhatsApp</span>
								<svg
									className="h-4 w-4 inline ml-1"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 15 14"
								> 0700355855
									<path
										fill="#fff"
										fillRule="evenodd"
										d="M7.5 12.309a5.464 5.464 0 0 1-3.028-.912l-2.117.678.689-2.047A5.468 5.468 0 0 1 1.993 6.8 5.514 5.514 0 0 1 7.5 1.293 5.513 5.513 0 0 1 13.009 6.8 5.515 5.515 0 0 1 7.5 12.309Zm0-12.06a6.551 6.551 0 0 0-5.608 9.933L.708 13.699l3.627-1.162A6.553 6.553 0 1 0 7.5.249Z"
										clipRule="evenodd"
									/>
									<path
										fill="#fff"
										fillRule="evenodd"
										d="M5.963 4.09c-.133-.321-.266-.268-.359-.268-.094 0-.202-.013-.309-.013a.596.596 0 0 0-.428.2c-.148.163-.562.55-.562 1.34s.576 1.554.656 1.66c.08.109 1.111 1.783 2.742 2.426 1.633.642 1.633.428 1.928.4.295-.027.951-.388 1.085-.763.133-.374.133-.695.096-.763-.041-.067-.151-.107-.31-.188-.162-.08-.95-.468-1.098-.522-.148-.053-.255-.08-.36.08-.11.16-.417.523-.51.63-.094.108-.188.12-.348.04-.16-.08-.678-.25-1.29-.797A4.898 4.898 0 0 1 6 6.44c-.092-.161-.008-.248.072-.328.073-.072.161-.187.24-.281.081-.094.106-.161.161-.268.052-.107.027-.201-.014-.282-.04-.081-.36-.87-.496-1.192Z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>

						{/* Social icons and phone number */}
						<ul className="flex items-center gap-4">
							{/* <li>
								<a href="#">
									<span className="sr-only">WhatsApp</span>
									<svg
										className="h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 15 14"
									>
										<path
											fill="#fff"
											fillRule="evenodd"
											d="M7.5 12.309a5.464 5.464 0 0 1-3.028-.912l-2.117.678.689-2.047A5.468 5.468 0 0 1 1.993 6.8 5.514 5.514 0 0 1 7.5 1.293 5.513 5.513 0 0 1 13.009 6.8 5.515 5.515 0 0 1 7.5 12.309Zm0-12.06a6.551 6.551 0 0 0-5.608 9.933L.708 13.699l3.627-1.162A6.553 6.553 0 1 0 7.5.249Z"
											clipRule="evenodd"
										/>
										<path
											fill="#fff"
											fillRule="evenodd"
											d="M5.963 4.09c-.133-.321-.266-.268-.359-.268-.094 0-.202-.013-.309-.013a.596.596 0 0 0-.428.2c-.148.163-.562.55-.562 1.34s.576 1.554.656 1.66c.08.109 1.111 1.783 2.742 2.426 1.633.642 1.633.428 1.928.4.295-.027.951-.388 1.085-.763.133-.374.133-.695.096-.763-.041-.067-.151-.107-.31-.188-.162-.08-.95-.468-1.098-.522-.148-.053-.255-.08-.36.08-.11.16-.417.523-.51.63-.094.108-.188.12-.348.04-.16-.08-.678-.25-1.29-.797A4.898 4.898 0 0 1 6 6.44c-.092-.161-.008-.248.072-.328.073-.072.161-.187.24-.281.081-.094.106-.161.161-.268.052-.107.027-.201-.014-.282-.04-.081-.36-.87-.496-1.192Z"
											clipRule="evenodd"
										/>
									</svg>
								</a>
							</li> */}
							<li>
								<a href="https://www.instagram.com/seagasltd/">
									<span className="sr-only">Facebook</span>
									<svg
										className="h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 9 18"
									>
										<path
											fill="#fff"
											d="m8.346 9.737.377-2.905H5.846V4.978c0-.842.232-1.415 1.44-1.415l1.535-.001V.964A20.61 20.61 0 0 0 6.582.85c-2.218 0-3.736 1.355-3.736 3.84v2.142H.336v2.905h2.51v7.453h3V9.737h2.5Z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/progaskenya/">
									<span className="sr-only">Instagram</span>
									<svg
										className="h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 15 15"
									>
										<path
											fill="#fff"
											d="M10.569 13.915c.785 0 1.529-.31 2.092-.872.562-.56.87-1.303.87-2.09V4.79c0-.786-.308-1.53-.87-2.09a2.95 2.95 0 0 0-2.092-.87H4.778c-.787 0-1.53.309-2.092.87a2.945 2.945 0 0 0-.871 2.09v6.165c0 .786.31 1.529.87 2.089a2.94 2.94 0 0 0 2.093.872h5.79Zm0 1.064H4.778A4.04 4.04 0 0 1 .75 10.954V4.789A4.04 4.04 0 0 1 4.778.764h5.79a4.038 4.038 0 0 1 4.028 4.025v6.165a4.039 4.039 0 0 1-4.027 4.025Z"
										/>
										<path
											fill="#fff"
											d="M7.676 5.326a2.494 2.494 0 1 0 0 4.989 2.496 2.496 0 1 0 0-4.989Zm3.832 2.491a3.812 3.812 0 0 1-3.812 3.809 3.812 3.812 0 0 1-3.815-3.809 3.811 3.811 0 0 1 3.815-3.809 3.812 3.812 0 0 1 3.812 3.809ZM12.471 3.949a.901.901 0 0 1-.902.9.9.9 0 1 1 0-1.803c.498 0 .902.404.902.903Z"
										/>
									</svg>
								</a>
							</li>
							<li>
								<a href=" https://x.com/_OtoGasKe">
									<span className="sr-only">X</span>
									<svg
										className="h-4 w-4 text-white"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
									</svg>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/proto-energy-limited"
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className="sr-only">LinkedIn</span>
									<svg
										className="h-4 w-4 text-white"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M20.452 20.452h-3.755v-5.569c0-1.327-.026-3.036-1.852-3.036-1.854 0-2.14 1.448-2.14 2.943v5.662H8.947V9h3.601v1.561h.051c.5-.949 1.721-1.951 3.545-1.951 3.796 0 4.494 2.5 4.494 5.747v6.095zM5.337 7.433c-1.209 0-2.189-.98-2.189-2.188 0-1.21.98-2.189 2.189-2.189s2.188.979 2.188 2.189c0 1.208-.98 2.188-2.188 2.188zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .793 0 1.771v20.458C0 23.207.792 24 1.771 24h20.453c.978 0 1.771-.793 1.771-1.771V1.771C24 .793 23.207 0 22.225 0z" />
									</svg>
								</a>
							</li>
							<li className="flex items-center">
								<a
									href="tel:0800723666"
									className="flex items-center space-x-1"
								>
									<svg
										className="h-4 w-4 text-white"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M6.62,10.79C8.06,13.45,10.55,15.93,13.21,17.38l2.2-2.2a1.1,1.1,0,0,1,1.1-.27,12.52,12.52,0,0,0,3.94.63A1.1,1.1,0,0,1,21,16.64V20.5a1.1,1.1,0,0,1-1.1,1.1A17.9,17.9,0,0,1,3,3.1,1.1,1.1,0,0,1,4.1,2H8a1.1,1.1,0,0,1,1.1,1.1A12.52,12.52,0,0,0,9.7,7a1.1,1.1,0,0,1-.28,1.1Z" />
									</svg>
									<span className="text-white">0800 723 666</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{headerOpen && (
				<div className="lg:hidden fixed inset-0 z-50 bg-white p-6">
					<div className="flex items-center justify-between mb-6">
						<Image
							className="h-8"
							src="/images/proto_logo.png"
							alt="Proto"
							width={120}
							height={40}
						/>
						<button
							onClick={() => setHeaderOpen(false)}
							className="text-gray-700"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div className="space-y-4">
						<button
							onClick={() => handleScrollOrNavigate("discover")}
							className="block w-full text-left font-medium"
						>
							Discover
						</button>
						<button
							onClick={() => handleScrollOrNavigate("domestic")}
							className="block w-full text-left font-medium"
						>
							Cylinders
						</button>
						<button
							onClick={() => handleScrollOrNavigate("bulk")}
							className="block w-full text-left font-medium"
						>
							Bulk LPG
						</button>
						<button
							onClick={() => handleScrollOrNavigate("otogas")}
							className="block w-full text-left font-medium"
						>
							Otogas
						</button>
						<Link href="/manufacturing" className="block font-medium">
							Manufacturing
						</Link>
						<button
							onClick={() => handleScrollOrNavigate("esg")}
							className="block w-full text-left font-medium"
						>
							ESG
						</button>
						<button
							onClick={() => handleScrollOrNavigate("jobs")}
							className="block w-full text-left font-medium"
						>
							Careers
						</button>
						<Link href="/feedback" className="block font-medium">
							Feedback
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
