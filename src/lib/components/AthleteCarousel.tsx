import type React from 'react';
import AthleteCard, { type Athlete } from './AthleteCard';
import './AthleteCarousel.css';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import CallToAction from './CallToAction';

export type AthleteID = number;

export type CarouselAthlete = Athlete & { id: AthleteID };

export interface AthleteCarouselProps
	extends React.ComponentPropsWithoutRef<'ul'> {
	athletes: CarouselAthlete[];
}

export default function AthleteCarousel({
	athletes,
	className,
	...props
}: AthleteCarouselProps) {
	// TODO: replace name key with id pkey

	const carouselRef = useRef<HTMLUListElement>(null);
	const athletesRef = useRef<Map<AthleteID, HTMLAnchorElement | null>>(null);
	const buttonsRef = useRef<Map<AthleteID, HTMLButtonElement | null>>(null);

	function getAthletesMap() {
		if (!athletesRef.current) {
			athletesRef.current = new Map();
		}
		return athletesRef.current;
	}

	function getButtonsMap() {
		if (!buttonsRef.current) {
			buttonsRef.current = new Map();
		}
		return buttonsRef.current;
	}

	const athleteElements = athletes.map(({ id, ...athlete }) => {
		const athleteCard = (
			<li key={id} className='AthleteCarousel-item'>
				<AthleteCard
					key={id}
					to={`/athletes/${id}`}
					data-id={id}
					ref={node => {
						if (!node) return;
						const map = getAthletesMap();
						map.set(id, node);
						return () => {
							map.delete(id);
						};
					}}
					{...athlete}
					className='AthleteCarousel-athlete'
				/>
			</li>
		);

		const onClick = () => {
			const map = getAthletesMap();
			const el = map.get(id);
			if (!el) return;

			el.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'center',
			});
		};

		const radioButton = (
			<button
				key={id}
				data-id={id}
				ref={node => {
					const map = getButtonsMap();
					map.set(id, node);
					return () => {
						map.delete(id);
					};
				}}
				type='button'
				className='AthleteCarousel-radio'
				onClick={onClick}
			/>
		);

		function setup() {
			const athletes = getAthletesMap();
			const athlete = athletes.get(id);

			const buttons = getButtonsMap();
			const button = buttons.get(id);

			const carousel = carouselRef.current;

			if (!athlete || !button || !carousel) return;

			const callback: IntersectionObserverCallback = entries => {
				for (const entry of entries) {
					const activeClass = 'is-active';
					if (entry.isIntersecting) {
						button.classList.add(activeClass);
					} else {
						button.classList.remove(activeClass);
					}
				}
			};

			const observer = new IntersectionObserver(callback, {
				root: carousel,
				threshold: 0.8,
			});

			observer.observe(athlete);
		}

		return {
			athleteCard,
			radioButton,
			setup,
		};
	});

	useEffect(() => {
		for (const el of athleteElements) {
			el.setup();
		}
	});

	return (
		<div className='AthleteCarousel-container'>
			<h2 className='AthleteCarousel-title'>Our Partnered Athletes</h2>

			<ul
				ref={carouselRef}
				className={clsx('AthleteCarousel', className)}
				{...props}
			>
				{athleteElements.map(e => e.athleteCard)}
			</ul>

			<div className='AthleteCarousel-radioGroup'>
				{athleteElements.map(e => e.radioButton)}
			</div>

			<CallToAction
				className='AthleteCarousel-cta'
				ctaType='a'
				to='/athletes'
				icon='tabler:users-group'
			>
				View All Our Athletes
			</CallToAction>
		</div>
	);
}
