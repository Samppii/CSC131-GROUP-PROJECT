import '$lib/components/StatCarousel.css';
import StatCard, { type StatCardProps } from '$lib/components/StatCard';
import type React from 'react';
import clsx from 'clsx';

export type StatCardID = number;

export type CarouselStatCard = StatCardProps & { id: StatCardID };

export interface StatCarouselProps
	extends React.ComponentPropsWithoutRef<'ul'> {
	stats: CarouselStatCard[];
}

export default function StatCarousel({
	stats,
	className,
	...props
}: StatCarouselProps) {
	return (
		<ul className={clsx('StatCarousel', className)} {...props}>
			{stats.map(({ id, ...card }) => (
				<StatCard key={id} className='StatCarousel-card' {...card} />
			))}
		</ul>
	);
}
