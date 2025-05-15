import type React from 'react';
import './CallToAction.css';
import { Link, type LinkProps } from 'react-router';
import clsx from 'clsx';
import Icon, { type IconProps } from './Icon';

type CallToActionProps = IconProps;

export default function CallToAction({
	icon,
	children,
	className,
	ctaType = 'a',
	...componentProps
}: React.PropsWithChildren<CallToActionExtendProps>) {
	// TODO: make it glow on hover/focus
	const contents = (
		<>
			<Icon className='CallToAction-icon' icon={icon} />
			{children}
		</>
	);

	const classes = clsx(className, 'CallToAction');

	if (isButtonProps(ctaType, componentProps)) {
		return (
			<button className={classes} {...componentProps}>
				{contents}
			</button>
		);
	}

	if (isAnchorProps(ctaType, componentProps)) {
		return (
			<Link className={classes} {...componentProps}>
				{contents}
			</Link>
		);
	}
}

function isButtonProps(
	ctaType: 'button' | 'a' | undefined,
	_props: CallToActionButtonProps | CallToActionAnchorProps,
): _props is CallToActionButtonProps {
	return (ctaType && ctaType === 'button') || false;
}

function isAnchorProps(
	ctaType: 'button' | 'a' | undefined,
	_props: CallToActionButtonProps | CallToActionAnchorProps,
): _props is CallToActionAnchorProps {
	return !ctaType || ctaType === 'a';
}

type CallToActionButtonProps = React.ComponentPropsWithoutRef<'button'>;
type CallToActionAnchorProps = LinkProps & { to: string };

export type CallToActionExtendProps = CallToActionProps &
	(
		| ({ ctaType: 'button' } & CallToActionButtonProps)
		| ({ ctaType?: 'a' } & CallToActionAnchorProps)
	);
