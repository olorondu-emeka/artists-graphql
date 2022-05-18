import * as repo from './artist.repo';

export async function getArtists(args: any) {
  const queryParam = args.queryParam ?? {};

  const limit = queryParam.limit ?? 10;
  const offset = queryParam.offset ?? 0;

  return await repo.getArtistsWithAlbums(limit, offset);
}

export async function updateArtistName(args: any) {
  const { artistId, name } = args.body;
  const updatedArtist = await repo.updateName(artistId, name);

  return updatedArtist;
}
