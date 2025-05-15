import type { CarouselAthlete } from '$lib/components/AthleteCarousel';
import type { CarouselStatCard } from '$lib/components/StatCarousel';
import type { Stat } from '$lib/components/StatCard';

export interface APIAthlete {
	id: number;
	first_name: string;
	last_name: string;
	tags: string;
	position: string;
	image: string | null;
	school: string;
	class_of: number;
	weight_lbs: number;
	height_inches: number;
	hometown: string;
	interests: string;
	summary: string;
	tagline: string;
	sports: APISport[];
	social_accounts: APISocialAccount[];
	galleries: APIGalleryImage[];
}

export interface APISport {
	id: number;
	name: string;
	icon: string;
	stats: APISportStat[];
}

export interface APISportStat {
	id: number;
	header: string;
	body: string;
}

export interface APISocialAccount {
	id: number;
	social_name: string;
	handle: string;
}

export interface APIGalleryImage {
	id: number;
	image: string;
	alt?: string;
}

export function parseAthlete(athlete: APIAthlete): CarouselAthlete {
	return {
		id: athlete.id,
		name: `${athlete.first_name ?? ''} ${athlete.last_name ?? ''}`,
		position: athlete.position,
		school: athlete.school,
		tags: athlete.tags.split('\n').slice(0, 3),
		image: athlete.image ?? '',
	};
}

export function parseAthletes(data: APIAthlete[]): CarouselAthlete[] {
	return data.map(parseAthlete);
}

export function parseSportStat(sportStat: APISportStat): Stat {
	return {
		id: sportStat.id,
		name: sportStat.header,
		body: sportStat.body,
	};
}

export function parseSport(sport: APISport): CarouselStatCard {
	return {
		id: sport.id,
		title: sport.name,
		icon: sport.icon,
		stats: sport.stats.map(parseSportStat),
	};
}

export function parseSports(athlete: APIAthlete): CarouselStatCard[] {
	return athlete.sports.map(parseSport);
}
