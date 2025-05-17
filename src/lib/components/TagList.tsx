import './TagList.css';
import type React from 'react';
import Tag, { type Tag as TagType } from '$lib/components/Tag';
import clsx from 'clsx';

export type TagID = number;

export type ListTag = TagType & { id: TagID };

export interface TagListProps extends React.ComponentPropsWithoutRef<'ul'> {
	tags: ListTag[];
}

export default function TagList({ tags, className, ...props }: TagListProps) {
	return (
		<ul className={clsx('TagList', className)} {...props}>
			{tags.map(({ id, ...tag }) => (
				<Tag key={id} {...tag} />
			))}
		</ul>
	);
}
