'use client'
import { useState } from 'react';
import Image from "next/image";

enum Theme {
	Default = 'light dark',
	Light = 'light only',
	Dark = 'dark only'
}

const defaultThemeIcon = <Image
	src="/theme/default.svg"
	alt="Light Theme Icon"
	width={20}
	height={20}
/>
const lightThemeIcon = <Image
	src="/theme/light.svg"
	alt="Light Theme Icon"
	width={20}
	height={20}
/>
const darkThemeIcon = <Image
	src="/theme/dark.svg"
	alt="Light Theme Icon"
	width={20}
	height={20}
/>;

const themeIcons = {
	[Theme.Default]: defaultThemeIcon,
	[Theme.Light]: lightThemeIcon,
	[Theme.Dark]: darkThemeIcon
};

export default function ThemePicker() {
	const [showDropdown, setShowDropdown] = useState(false);

	const initialTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? Theme.Dark : Theme.Light;
	const [theme, setTheme] = useState(Theme.Default);

	function changeTheme(clickedTheme: Theme) {
		const newTheme: Theme = clickedTheme === theme ? Theme.Default : clickedTheme;
		setTheme(newTheme);
		setShowDropdown(false);
		const newDisplayedTheme = newTheme === Theme.Default ? initialTheme : newTheme;
		document.documentElement.style.setProperty('color-scheme', newTheme)
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(newDisplayedTheme.split(' ')[0])
	}

	return (
		<div>
			<button
				// className='rounded-full border border-solid border-white/[.08] transition-colors flex items-center justify-center hover:bg-[#444444] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
				aria-haspopup="menu"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				{themeIcons[theme]}
				Theme
			</button>
			{showDropdown && <ul className="submenu themes-menu  inline-submenu-lg" aria-labelledby="themes-menu-button">
				<li>
					<button
						onClick={() => changeTheme(Theme.Light)}>
						{lightThemeIcon} Light
					</button>
				</li>
				<li>
					<button onClick={() => changeTheme(Theme.Dark)}>
						{darkThemeIcon} Dark
					</button>
				</li>
			</ul>}
		</div>
	);
}
