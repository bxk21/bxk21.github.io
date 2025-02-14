import Image from "next/image";

export default function SideBar() {
	return (
		<div className='w-1/5 bg-[--altBackground] border-[--altForeground] border rounded-md gap-16'>
			<h1>
				Bo Kang
			</h1>
			<ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
				<li className="mb-2">
					<a href="./">
						Home
					</a>
				</li>
				<li className="mb-2">
					<a href="./about">
						About
					</a>
				</li>
				<li className="mb-2">
					<a href="https://www.linkedin.com/in/bo-kang-6a5881b2/">
						Linkedin
						<Image
							className='grayscale'
							aria-hidden
							src="/linkedin.svg"
							alt="Linkedin icon"
							width={16}
							height={16}
						/>
					</a>
				</li>
				<li className="mb-2">
					<a href="https://github.com/bxk21/">
						Github
						<Image
							className='grayscale'
							aria-hidden
							src="/github-mark.svg"
							alt="GitHub icon"
							width={16}
							height={16}
						/>
					</a>
				</li>
				<li className="mb-2">
					<a href="./resume">
						Resume
					</a>
				</li>
				{/* <li className="mb-2">
					<a href="">
						Linkedin
					</a>
				</li> */}
			</ol>
		</div>
	);
}
