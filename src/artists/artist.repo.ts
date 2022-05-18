import { Artist, ArtistWithAlbums } from './artist.model';

import { Knex } from 'knex';

let queryBuilder: Knex;

export function initiateQueryBuilder(knexInstance: Knex) {
  queryBuilder = knexInstance;
}

export async function getArtistsWithAlbums(
  limit: number,
  offset: number
): Promise<ArtistWithAlbums[]> {
  return await queryBuilder<ArtistWithAlbums>('artists')
    .join('albums', 'artists.ArtistId', 'albums.ArtistId')
    .select('artists.*', 'albums.*')
    .limit(limit)
    .offset(offset);
}

export async function updateName(
  artistId: number,
  newName: string
): Promise<Artist> {
  const [artist] = await queryBuilder<Artist>('artists')
    .where('ArtistId', artistId)
    .update({ Name: newName }, '*');
  return artist;
}
