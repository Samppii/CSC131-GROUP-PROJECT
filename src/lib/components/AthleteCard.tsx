import type React from 'react';
import './AthleteCard.css';
import clsx from 'clsx';
import { Link } from 'react-router';
import TagList, { type ListTag } from '$lib/components/TagList';

export interface Athlete {
	name: string;
	position: string;
	school: string;
	tags?: string[];
	image: string;
}

export type AthleteCardProps = React.ComponentPropsWithRef<typeof Link> &
	Athlete;

export default function AthleteCard({
	name,
	position,
	school,
	tags,
	image,
	className,
	to,
	...props
}: AthleteCardProps) {
	const listTags: ListTag[] | undefined = tags?.map((tag, i) => ({
		id: i,
		body: tag,
	}));

	return (
		<Link to={to} className={clsx('AthleteCard', className)} {...props}>
			<img
				src={image}
				alt={`Portrait of ${name}`}
				className='AthleteCard-portrait'
			/>
			<h3 className='AthleteCard-name'>{name}</h3>
			<div className='AthleteCard-info'>
				<p className='AthleteCard-position'>{position}</p>
				<p className='AthleteCard-school'>{school}</p>
			</div>

			{listTags && <TagList tags={listTags} />}
		</Link>
	);
}
