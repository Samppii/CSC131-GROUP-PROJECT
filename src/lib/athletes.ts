import type { CarouselAthlete } from '$lib/components/AthleteCarousel';

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
	sports: APISport[];
	social_accounts: APISocialAccount[];
	galleries: APIGalleryImage[];
}

export interface APISport {
	name: string;
	stats: APISportStat[];
}

export interface APISportStat {
	header: string;
	body: string;
}

export interface APISocialAccount {
	social_name: string;
	handle: string;
}

export interface APIGalleryImage {
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
