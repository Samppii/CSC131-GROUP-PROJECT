import './Tag.css';
import type React from 'react';
import clsx from 'clsx';

export interface Tag {
	body: string;
}

export type TagProps = Tag & React.ComponentPropsWithoutRef<'li'>;

export default function Tag({ body, className, ...props }: TagProps) {
	return (
		<li className={clsx('Tag', className)} {...props}>
			{body}
		</li>
	);
}
