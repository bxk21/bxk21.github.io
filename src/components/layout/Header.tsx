import ThemePicker from './ThemePicker';

export default function Header() {
	return (
		<header className='w-full flex justify-between'>
			<div className='left-0'>
				<ThemePicker/>
			</div>
			<ThemePicker/>
		</header>
	);
}
