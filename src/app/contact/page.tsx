import CopyToClipboard from "@/components/CopyToClipboard";
import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<ol className="text-lg sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-2">
				<li className="mb-2 flex gap-2 items-center">
					<Image
						className='grayscale'
						aria-hidden
						src="/icons/phone.svg"
						alt="Phone icon"
						width='16'
						height='16'
					/>
					Call or
					<Image
						className='grayscale'
						aria-hidden
						src="/icons/text.svg"
						alt="Texting icon"
						width='16'
						height='16'
					/>
					Text:
					<Link href="tel:+17349850668" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						(734)985-0668
					</Link>
					<CopyToClipboard data="+17349850668"/>
				</li>
				<li className="mb-2">
					<Link href="./about" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						About
					</Link>
				</li>
				<li className="mb-2">
					<Link href="https://www.linkedin.com/in/bo-kang-6a5881b2/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<Image
							className='grayscale'
							aria-hidden
							src="/icons/linkedin.svg"
							alt="Linkedin icon"
							width='16'
							height='16'
						/>
						Linkedin
					</Link>
				</li>
				<li className="mb-2">
					<Link href="https://github.com/bxk21/" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<Image
							className='grayscale'
							aria-hidden
							src="/icons/github.svg"
							alt="GitHub icon"
							width='16'
							height='16'
						/>
						Github
					</Link>
				</li>
				<li className="mb-2">
					<Link href="./resume" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<Image
							className='grayscale'
							aria-hidden
							src="/icons/file.svg"
							alt="File icon"
							width='16'
							height='16'
						/>
						Resume
					</Link>
				</li>
				{/* <li className="mb-2">
					<Link href="">
						Linkedin
					</Link>
				</li> */}
			</ol>
		</main>
	);
}
