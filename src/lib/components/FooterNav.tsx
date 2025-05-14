import type React from 'react';
import './FooterNav.css';
import { Link, type LinkProps } from 'react-router';
import Icon from './Icon';
import clsx from 'clsx';

export default function FooterNav() {
	return (
		<nav className='FooterNav'>
			<h1 className='FooterNav-header'>Navigation</h1>
			<ul className='FooterNav-site'>
				<FooterNavItem className='FooterNav-link--site' to='/'>
					Home
				</FooterNavItem>
				<FooterNavItem className='FooterNav-link--site' to='/about'>
					About
				</FooterNavItem>
				<FooterNavItem className='FooterNav-link--site' to='/athletes'>
					Athletes
				</FooterNavItem>
				<FooterNavItem className='FooterNav-link--site' to='/contact'>
					Contact
				</FooterNavItem>
			</ul>
			<ul className='FooterNav-legal'>
				<FooterNavItem className='FooterNav-link--legal' to='/privacy-policy'>
					Privacy Policy
				</FooterNavItem>
				<FooterNavItem className='FooterNav-link--legal' to='/terms-of-service'>
					Terms of Service
				</FooterNavItem>
			</ul>
		</nav>
	);
}

type FooterNavItemProps = LinkProps;

function FooterNavItem({
	className,
	children,
	...props
}: React.PropsWithChildren<FooterNavItemProps>) {
	return (
		<li className='FooterNav-item'>
			<Link className={clsx(className, 'FooterNav-link')} {...props}>
				{children}
				<Icon className='FooterNav-icon' icon='tabler:external-link' />
			</Link>
		</li>
	);
}
