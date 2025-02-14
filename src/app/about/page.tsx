import Image from "next/image";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Image
				src="/photos/muse.jpg"
				alt="Bo Kang"
				width='1000'
				height='1000'
				priority
			/>
		</main>
	);
}
