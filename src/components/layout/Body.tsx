import SideBar from "./Sidebar";

export default function Body({
	children,
}: Readonly<{
	children: React.ReactNode;
}> ) {
	return (
		<div className='size-full flex'>
			<SideBar/>
			<div className='h-full w-4/5'>
				{children}
			</div>
		</div>
	);
}
