import Image from "next/image";

export default function AboutMe() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
			<Image
				src="/photos/IMG_0776.jpg"
				alt="Bo Kang"
				width={265}
				height={398}
				priority
			/>
		</main>
	);
}
