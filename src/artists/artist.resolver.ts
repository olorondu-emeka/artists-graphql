import * as repo from './artist.repo';

import pubSub from '../config/pubSub';

export const ARTIST_UPDATED_TOPIC = 'ARTIST_UPDATED';

export async function getArtists(args: any) {
  const queryParam = args.queryParam ?? {};

  const limit = queryParam.limit ?? 10;
  const offset = queryParam.offset ?? 0;

  return await repo.getArtistsWithAlbums(limit, offset);
}

export async function updateArtistName(args: any) {
  const { artistId, name } = args.body;
  const updatedArtist = await repo.updateName(artistId, name);

  await pubSub.publish(ARTIST_UPDATED_TOPIC, {
    artistUpdated: { action: 'UPDATED', payload: updatedArtist }
  });

  return updatedArtist;
}

export const artistUpdated = {
  subscribe: () => pubSub.asyncIterator(ARTIST_UPDATED_TOPIC)
};
