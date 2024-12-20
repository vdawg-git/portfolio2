import { InstagramIcon } from "./icons/instagram"
import "./footer.css"

export default function Footer() {
	return (
		<>
			<footer className=" max-w-3xl relative w-full text-bg4 mb-6 mt-24  mx-auto grow-0 ">
				<div className="max-sm:flex-col  gridd ">
					<ul className="font-sm    flex flex-col  md:flex-row  ">
						<li>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/vdawg-git"
							>
								<div className="i-pixelarticons-github size-6"></div>
								<p className="">Github</p>
							</a>
						</li>

						<li>
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://www.instagram.com/vdawg.jpg/"
							>
								<InstagramIcon className="size-6" />
								<p className="">Instagram</p>
							</a>
						</li>
					</ul>

					<ul className=" col-start-2   -col-end-1 max-sm:row-start-1 max-sm:row-end-2 h-full">
						<li className="flex justify-start  sm:justify-end h-full items-center">
							<a
								rel="noopener noreferrer"
								target="_blank"
								href="https://github.com/vdawg-git/vdawg-git.github.io"
							>
								<div className="i-pixelarticons-external-link size-6" />
								<p className="">view source</p>
							</a>
						</li>
					</ul>
				</div>
			</footer>

			<div className="bg-radial-[150%_100%_at_50%_100%] absolute bottom-0 inset-x-0 mix-blend-color-dodge from-fg0 to-transparent to-70% h-120 w-full z-50 contain-[layout_paint_size_strict]    pointer-events-none"></div>
		</>
	)
}
