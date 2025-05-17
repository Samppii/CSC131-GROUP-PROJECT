import { Link, NavLink } from 'react-router';
import './Navbar.css';
import logo from '$lib/assets/pcm_black_accent.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';
import type React from 'react';
import { useState } from 'react';
import clsx from 'clsx';

export type NavbarProps = React.ComponentPropsWithoutRef<'nav'>;

export default function Navbar({ className, ...props }: NavbarProps) {
	const [show, setShow] = useState(false);

	const hide = () => setShow(false);
	const toggle = () => setShow(!show);

	return (
		<nav className={clsx('Navbar', className)} {...props}>
			<Link to='/' className='Navbar-logo'>
				<img
					src={logo}
					alt="Player's Club Management logo"
					className='Navbar-logoImage'
				/>
			</Link>

			<button
				className={clsx('Navbar-menuButton', show && 'is-enabled')}
				type='button'
				onClick={toggle}
			>
				<Icon className='Navbar-menuIcon' icon='tabler:menu-deep' />
			</button>

			<ul
				className={clsx('Navbar-links', show && 'is-expanded')}
				onClick={hide}
				onKeyDown={hide}
			>
				<NavbarItem to='/'>Home</NavbarItem>
				<NavbarItem to='/about' end>
					About
				</NavbarItem>
				<NavbarItem to='/athletes' end>
					Athletes
				</NavbarItem>
				<NavbarItem to='/contact' end>
					Contact
				</NavbarItem>
			</ul>
		</nav>
	);
}

type NavbarItemProps = React.ComponentPropsWithoutRef<typeof NavLink>;

function NavbarItem({
	children,
	className,
	...props
}: React.PropsWithChildren<NavbarItemProps>) {
	return (
		<li className='Navbar-item'>
			<NavLink className={clsx('Navbar-link', className)} {...props}>
				{children}
			</NavLink>
		</li>
	);
}
