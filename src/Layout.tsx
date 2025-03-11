import { Outlet } from 'react-router';
import Navbar from '$lib/components/Navbar';

export default function Layout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
}
