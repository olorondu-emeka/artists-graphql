import { Album, Artist, ArtistWithAlbums } from './artist.model';

import { Knex } from 'knex';

let queryBuilder: Knex;

export function initiateQueryBuilder(knexInstance: Knex) {
  queryBuilder = knexInstance;
}

async function queryArtistsWithAlbums(
  artists: Artist[]
): Promise<ArtistWithAlbums[]> {
  const artistsWithAlbums: ArtistWithAlbums[] = [];
  for (const artist of artists) {
    const Albums = await queryBuilder<Album>('albums').where(
      'ArtistId',
      artist.ArtistId
    );
    artistsWithAlbums.push({ ...artist, Albums });
  }

  return artistsWithAlbums;
}

export async function getArtistsWithAlbums(limit: number, offset: number) {
  const artists = await queryBuilder<Artist>('artists')
    .select('*')
    .limit(limit)
    .offset(offset);

  return await queryArtistsWithAlbums(artists);
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
