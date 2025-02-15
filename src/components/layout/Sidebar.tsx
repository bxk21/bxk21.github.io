import { IconFileCv, IconPencil } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
	return (
		<div className='w-1/5 bg-[--accented-background] border-[--altForeground] border rounded-md p-4'>
			<div className="grid place-items-center">
				<Image
					className="border-4 rounded-full"
					src="/photos/side.jpg"
					alt="Bo Kang"
					width='1000'
					height='1000'
					priority
				/>
			</div>
			<div className="text-3xl p-4 text-center">
				Bo Kang
			</div>
			<ol className="text-lg sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-2">
				<li className="mb-2">
					<Link href="./" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						Home
					</Link>
				</li>
				<li className="mb-2">
					<Link href="./contact" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<IconPencil
							className='grayscale'
							aria-label="Phone icon"
							size='16'
						/>
						Contact
					</Link>
				</li>
				{/* <li className="mb-2">
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
				</li> */}
				<li className="mb-2">
					<Link href="./resume" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						<IconFileCv
							className="grayscale"
							aria-label="File icon"
							size='16'
						/>
						Resume
					</Link>
				</li>
				<li className="mb-2">
					<Link href="./about" className="flex items-center gap-2 hover:underline hover:underline-offset-4">
						About
					</Link>
				</li>
				{/* <li className="mb-2">
					<Link href="">
						Linkedin
					</Link>
				</li> */}
			</ol>
		</div>
	);
}
