import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					className='grayscale'
					aria-hidden
					src="/icons/file.svg"
					alt="File icon"
					width='16'
					height='16'
				/>
				Learn
			</Link>
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					className='grayscale'
					aria-hidden
					src="/icons/window.svg"
					alt="Window icon"
					width='16'
					height='16'
				/>
				Examples
			</Link>
			<Link
				className="flex items-center gap-2 hover:underline hover:underline-offset-4"
				href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					className='grayscale'
					aria-hidden
					src="/icons/globe.svg"
					alt="Globe icon"
					width='16'
					height='16'
				/>
				Go to nextjs.org →
			</Link>
		</footer>
	);
}
