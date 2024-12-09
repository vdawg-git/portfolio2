import "./global.css"
import type { Metadata } from "next"
import { Navbar } from "./components/nav"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"
import "@fontsource/courier-prime/400.css"
import "@fontsource/courier-prime/700.css"
import { BackgroundCode } from "./components/backgroundCode"

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "VDawg",
		template: "%s | VDawg Portfolio",
	},
	description: "Front-end dev and Designer",
	openGraph: {
		title: "VDawg Portfolio",
		// description: "This is my portfolio.",
		url: baseUrl,
		siteName: "VDawg",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="antialiased relative min-h-screen  bg-bg0">
				<main className="min-h-0 h-full min-w-0  z-20  flex flex-col px-4 ">
					<Navbar />
					<div className="grow">{children}</div>
					<Footer />
				</main>

				<div
					className="absolute bg-repeat  mix-blend-hard-light opacity-1 size-full inset-0 pointer-events-none"
					style={{ backgroundImage: "url('/grain.webp')" }}
				/>

				<div className="fixed inset-x-0 z-20 bottom-0 bg-radial-[100%_80%_at_60%_90%] mix-blend-color-dodge from-fg/80 size-full   pointer-events-none" />

				{/* background Gradient Top */}
				<div className="fixed inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-bg0 to-transparent  " />

				{/* background Gradient Bottom  */}
				<div className="fixed inset-x-0 bottom-0 -z-10 max-h-0 ">
					<div className="absolute inset-x-0 bottom-0 -z-40 h-96 bg-gradient-to-b from-transparent to-bg0 [contain:layout]" />
				</div>

				<BackgroundCode />
			</body>
		</html>
	)
}
