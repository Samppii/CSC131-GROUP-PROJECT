import { Outlet } from 'react-router';
import Navbar from '$lib/components/Navbar';
import Footer from '$lib/components/Footer';

export default function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
