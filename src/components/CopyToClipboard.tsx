'use client'
import Image from "next/image";

export default function CopyToClipboard({ data }: { data: string } ) {
	return (
		<button
			className='flex gap-2 h-min items-center'
			onClick={() => { navigator.clipboard.writeText(data); }}
		>
			<Image
				className='grayscale peer h-min'
				src="/icons/copy.svg"
				alt="Copy Icon"
				width='10'
				height='10'
			/>
			<div className='text-xs h-min transition-opacity opacity-0 peer-hover:opacity-100'>
				Copy To Clipboard
			</div>
		</button>
	);
}
