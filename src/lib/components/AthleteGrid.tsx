import './AthleteGrid.css';
import type React from 'react';
import type { CarouselAthlete } from '$lib/components/AthleteCarousel';
import AthleteCard from '$lib/components/AthleteCard';
import clsx from 'clsx';

export interface AthleteGridProps extends React.ComponentPropsWithoutRef<'ul'> {
	athletes: CarouselAthlete[];
}

export default function AthleteGrid({
	athletes,
	className,
	...props
}: AthleteGridProps) {
	return (
		<ul className={clsx('AthleteGrid', className)} {...props}>
			{athletes.map(({ id, ...athlete }) => (
				<li key={id} className='AthleteGrid-item'>
					{' '}
					<AthleteCard
						to={`/athletes/${id}`}
						{...athlete}
						className='AthleteGrid-athlete'
					/>{' '}
				</li>
			))}
		</ul>
	);
}
