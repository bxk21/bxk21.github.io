'use client'
import { IconClipboardCopy } from "@tabler/icons-react";

export default function CopyToClipboard({ data, size, className }: { data: string, size?: number, className?: string } ) {
	return (
		<div className={`flex gap-2 items-center relative ${className || ''}`}>
			<button
				className="peer"
				onClick={() => { navigator.clipboard.writeText(data); }}
			>
				<IconClipboardCopy
					className='grayscale'
					aria-label="Copy Icon"
					size={size || 24}
				/>
			</button>
			<div className='text-xs absolute top-full left-full transition-opacity opacity-0 peer-hover:opacity-100'>
				Copy To Clipboard
			</div>
		</div>
	);
}
