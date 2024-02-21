import { Outlet } from "react-router-dom";

export const MainLayout = () => {
	return (
		<div className="flex flex-col h-screen">
			<header className="flex items-center justify-between p-4">
				<h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
					TechTalk
				</h1>
			</header>
			<main className="flex-grow">
				<Outlet />
			</main>
			<footer></footer>
		</div>
	);
};
